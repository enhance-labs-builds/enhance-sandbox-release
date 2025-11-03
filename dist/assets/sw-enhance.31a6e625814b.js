// ../internal-common/dist/index.js
var WORKER_MESSAGE_CONFIG = "enhance:configure";
var WORKER_MESSAGE_DISABLE = "enhance:disable";
var WORKER_MESSAGE_METRICS = "enhance:metrics";
var WORKER_MESSAGE_LOG = "enhance:log";

// src/helpers.ts
function ensureLeadingSlash(path) {
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path;
}
function normalizeAssetHostOrigins(hosts) {
  const origins = /* @__PURE__ */ new Set();
  for (const host of hosts) {
    const parsed = safeParseUrl(host);
    if (parsed) {
      origins.add(parsed.origin);
    }
  }
  return origins;
}
function appendRequestToSandboxBase(sandboxBase, requestUrl) {
  const base = new URL(sandboxBase.toString());
  const basePath = base.pathname.endsWith("/") ? base.pathname.slice(0, -1) : base.pathname;
  const requestPath = requestUrl.pathname.startsWith("/") ? requestUrl.pathname : `/${requestUrl.pathname}`;
  base.pathname = `${basePath}${requestPath}`.replace(/\/+/g, "/");
  base.search = requestUrl.search;
  base.hash = "";
  return base;
}
function safeParseUrl(input) {
  try {
    return new URL(input);
  } catch {
    try {
      return new URL(`https://${input}`);
    } catch {
      return null;
    }
  }
}

// src/sw.ts
var ROUTABLE_DESTINATIONS = /* @__PURE__ */ new Set([
  "script",
  "style",
  "font",
  "image",
  "worker",
  "sharedworker",
  "modulepreload"
]);
var DEFAULT_HMR_PROTOCOLS = ["vite-hmr"];
var DEFAULT_HMR_PATH_HINTS = [
  "/@vite/client",
  "/__vite/client",
  "/vite/client",
  "/__vite_ping",
  "/sockjs-node",
  "/webpack-dev-server",
  "/webpack-hmr",
  "/webpackhotmiddleware",
  "/webpack-hot-middleware",
  "/__webpack_hmr",
  "/_next/webpack-hmr",
  "/parcel-hmr",
  "/__parcel_hmr",
  "/__snowpack__",
  "/snowpack/hmr"
];
var BROADCAST_INTERVAL_MS = 500;
var activeConfig = null;
var metrics = { sandboxHits: 0, sandboxFallbacks: 0 };
var lastBroadcast = 0;
function normalizeStringList(values) {
  if (!Array.isArray(values)) {
    return [];
  }
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const value of values) {
    if (typeof value !== "string")
      continue;
    const trimmed = value.trim();
    if (trimmed.length === 0 || seen.has(trimmed))
      continue;
    seen.add(trimmed);
    result.push(trimmed);
  }
  return result;
}
function uniqueStrings(values) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const value of values) {
    const trimmed = value.trim();
    if (trimmed.length === 0 || seen.has(trimmed))
      continue;
    seen.add(trimmed);
    result.push(trimmed);
  }
  return result;
}
function toLowerCaseUnique(values) {
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const value of values) {
    const lowered = value.toLowerCase();
    if (seen.has(lowered))
      continue;
    seen.add(lowered);
    result.push(lowered);
  }
  return result;
}
function normalizeWorkerHmrConfig(config) {
  return {
    protocols: normalizeStringList(config?.protocols),
    pathHints: normalizeStringList(config?.pathHints)
  };
}
function mergeDefaultHmrProtocols(custom) {
  if (custom.length === 0) {
    return DEFAULT_HMR_PROTOCOLS.slice();
  }
  return uniqueStrings(custom);
}
function mergeDefaultHmrPathHints(custom) {
  return uniqueStrings([...DEFAULT_HMR_PATH_HINTS, ...custom]);
}
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || typeof data !== "object")
    return;
  switch (data.type) {
    case WORKER_MESSAGE_CONFIG:
      activeConfig = normalizeConfig(data.config);
      metrics = { sandboxHits: 0, sandboxFallbacks: 0 };
      void broadcastMetrics();
      break;
    case WORKER_MESSAGE_DISABLE:
      activeConfig = null;
      metrics = { sandboxHits: 0, sandboxFallbacks: 0 };
      break;
    default:
      break;
  }
});
self.addEventListener("fetch", (event) => {
  const handler = async (fetchEvent) => {
    const { request } = fetchEvent;
    if (!activeConfig) {
      return fetch(request);
    }
    if (!shouldHandleRequest(request)) {
      return fetch(request);
    }
    const url = new URL(request.url);
    if (shouldBypass(url.pathname)) {
      return fetch(request);
    }
    if (request.mode === "navigate") {
      return handleDocumentRequest(request);
    }
    if (!shouldRouteAsset(request, url)) {
      return fetch(request);
    }
    const sandboxResponse = await fetchFromSandbox(request, url);
    if (sandboxResponse) {
      metrics.sandboxHits += 1;
      void broadcastMetrics();
      return sandboxResponse;
    }
    metrics.sandboxFallbacks += 1;
    void broadcastMetrics();
    return fetch(request);
  };
  event.respondWith(handler(event));
});
function normalizeConfig(config) {
  const sandboxBase = new URL(config.sandboxBaseURL);
  const callbackBypassNormalized = config.callbackBypass.map((path) => ensureLeadingSlash(path));
  const assetHostOrigins = normalizeAssetHostOrigins(config.assetHosts);
  const securityMode = config.securityMode ?? "permissive";
  const hmr = normalizeWorkerHmrConfig(config.hmr);
  return {
    ...config,
    securityMode,
    sandboxBase,
    callbackBypassNormalized,
    assetHostOrigins,
    hmr
  };
}
function shouldHandleRequest(request) {
  return request.method === "GET" || request.method === "HEAD";
}
function shouldRouteAsset(request, url) {
  if (!activeConfig)
    return false;
  const destination = request.destination;
  if (!destination || !ROUTABLE_DESTINATIONS.has(destination)) {
    return false;
  }
  if (isOverlayAsset(url)) {
    return false;
  }
  const origin = url.origin;
  const isAppOrigin = origin === self.location.origin;
  const isConfiguredAssetHost = activeConfig.assetHostOrigins.has(origin);
  if (!isAppOrigin && !isConfiguredAssetHost) {
    return false;
  }
  return true;
}
function shouldBypass(pathname) {
  if (!activeConfig)
    return false;
  const normalized = ensureLeadingSlash(pathname);
  return activeConfig.callbackBypassNormalized.some((prefix) => normalized.startsWith(prefix));
}
function isOverlayAsset(url) {
  if (!activeConfig)
    return false;
  return matchesOverlayAsset(url, activeConfig.overlayPath) || matchesOverlayAsset(url, activeConfig.overlayBootstrapPath);
}
function matchesOverlayAsset(url, assetPath) {
  if (!assetPath)
    return false;
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return url.href === assetPath;
  }
  const normalized = normalizeAssetPathForDocument(assetPath);
  if (!normalized)
    return false;
  const requested = `${url.pathname}${url.search}`;
  if (requested === normalized)
    return true;
  if (url.search === "?import") {
    return url.pathname === normalized;
  }
  return false;
}
async function handleDocumentRequest(request) {
  const productionResponse = await fetch(request);
  if (!isHtmlResponse(productionResponse)) {
    return productionResponse;
  }
  const productionSanitized = toSameOriginResponse(productionResponse, "GET");
  const sandboxDocument = await fetchSandboxDocument(request);
  const source = sandboxDocument ? "sandbox" : "production";
  const responseToUse = sandboxDocument ?? productionSanitized;
  try {
    return await rewriteDocument(responseToUse, source);
  } catch (error) {
    log("info", "Failed to rewrite document", error);
    return responseToUse;
  }
}
function isHtmlResponse(response) {
  const contentType = response.headers.get("content-type");
  return contentType != null && contentType.includes("text/html");
}
async function fetchFromSandbox(request, url) {
  if (!activeConfig)
    return null;
  const sandboxUrl = buildSandboxUrl(url);
  const headers = new Headers(request.headers);
  headers.set("x-enhance-routing", "sandbox");
  headers.delete("host");
  if (activeConfig.token) {
    headers.set("authorization", `Bearer ${activeConfig.token}`);
  }
  const sandboxRequest = new Request(sandboxUrl.toString(), {
    method: request.method,
    headers,
    credentials: "include",
    redirect: request.redirect,
    cache: "no-store",
    mode: "cors"
  });
  try {
    const response = await fetch(sandboxRequest);
    if (response.type === "opaque") {
      log("info", "Sandbox CORS blocked", sandboxUrl.toString());
      return null;
    }
    if (!response.ok) {
      log("debug", `Sandbox miss ${response.status} for ${sandboxUrl.pathname}`);
      return null;
    }
    return toSameOriginResponse(response, request.method);
  } catch (error) {
    log("info", "Sandbox fetch failed", error);
    return null;
  }
}
async function fetchSandboxDocument(request) {
  if (!activeConfig)
    return null;
  const requestUrl = new URL(request.url);
  const sandboxUrl = buildSandboxUrl(requestUrl);
  const headers = new Headers(request.headers);
  headers.set("x-enhance-routing", "sandbox-document");
  headers.delete("host");
  headers.delete("content-length");
  if (activeConfig.token) {
    headers.set("authorization", `Bearer ${activeConfig.token}`);
  }
  const sandboxRequest = new Request(sandboxUrl.toString(), {
    method: "GET",
    headers,
    credentials: "include",
    redirect: "follow",
    cache: "no-store",
    mode: "cors"
  });
  try {
    const response = await fetch(sandboxRequest);
    if (response.type === "opaque") {
      log("info", "Sandbox document CORS blocked", sandboxUrl.toString());
      return null;
    }
    if (!response.ok) {
      log("debug", `Sandbox document miss ${response.status} for ${sandboxUrl.pathname}`);
      return null;
    }
    if (!isHtmlResponse(response)) {
      return null;
    }
    return toSameOriginResponse(response, "GET");
  } catch (error) {
    log("info", "Sandbox document fetch failed", error);
    return null;
  }
}
function toSameOriginResponse(response, method) {
  const clone = response.clone();
  const headers = new Headers(clone.headers);
  headers.delete("access-control-allow-origin");
  headers.delete("access-control-allow-credentials");
  headers.delete("access-control-expose-headers");
  headers.set("cache-control", "no-store");
  headers.set("x-enhance-sandbox", "hit");
  stripCookies(headers);
  const body = method === "HEAD" ? null : clone.body;
  return new Response(body, {
    status: clone.status,
    statusText: clone.statusText,
    headers
  });
}
async function rewriteDocument(response, source) {
  const clone = response.clone();
  const originalHtml = await clone.text();
  const withoutSri = stripSri(originalHtml);
  const rewritten = injectHmrBridge(injectOverlayBootstrap(rewriteEntryReferences(withoutSri)));
  const headers = new Headers(clone.headers);
  headers.set("cache-control", "no-store");
  headers.set("x-enhance-sandbox", "document");
  headers.set("x-enhance-document-source", source);
  stripCookies(headers);
  if (activeConfig?.securityMode !== "custom") {
    const originalCsp = headers.get("content-security-policy");
    headers.set("content-security-policy", buildPreviewCsp(originalCsp));
    headers.delete("cross-origin-opener-policy");
    headers.delete("cross-origin-embedder-policy");
    headers.delete("cross-origin-resource-policy");
  }
  return new Response(rewritten, {
    status: clone.status,
    statusText: clone.statusText,
    headers
  });
}
function stripSri(html) {
  return html.replace(/\s+integrity="[^"]*"/gi, "");
}
function rewriteEntryReferences(html) {
  if (!activeConfig)
    return html;
  const rewriteScript = (tag) => rewriteScriptTag(tag);
  const rewriteLink = (tag) => rewriteLinkTag(tag);
  return html.replace(/<script\b[^>]*>/gi, rewriteScript).replace(/<link\b[^>]*>/gi, rewriteLink);
}
function rewriteScriptTag(tag) {
  if (!activeConfig)
    return tag;
  const srcAttr = extractAttribute(tag, "src");
  if (!srcAttr)
    return tag;
  const normalized = normalizeAssetReference(srcAttr.value);
  if (!normalized || normalized === srcAttr.value)
    return tag;
  const nextAttr = srcAttr.full.replace(srcAttr.value, normalized);
  return tag.replace(srcAttr.full, nextAttr);
}
function rewriteLinkTag(tag) {
  if (!activeConfig)
    return tag;
  const relMatch = tag.match(/\brel\s*=\s*(['"])([^"']+)\1/i);
  if (!relMatch)
    return tag;
  const relValue = relMatch[2].toLowerCase();
  if (relValue !== "stylesheet" && relValue !== "modulepreload") {
    return tag;
  }
  const hrefAttr = extractAttribute(tag, "href");
  if (!hrefAttr)
    return tag;
  const normalized = normalizeAssetReference(hrefAttr.value);
  if (!normalized || normalized === hrefAttr.value)
    return tag;
  const nextAttr = hrefAttr.full.replace(hrefAttr.value, normalized);
  return tag.replace(hrefAttr.full, nextAttr);
}
function extractAttribute(tag, name) {
  const regex = new RegExp(`${name}\\s*=\\s*(['"])([^"']+)\\1`, "i");
  const match = tag.match(regex);
  if (!match)
    return null;
  return {
    full: match[0],
    value: match[2]
  };
}
function normalizeAssetReference(value) {
  if (!activeConfig)
    return null;
  const parsed = parseDocumentUrl(value);
  if (!parsed)
    return null;
  if (parsed.origin === self.location.origin) {
    return `${parsed.pathname}${parsed.search}`;
  }
  if (activeConfig.assetHostOrigins.has(parsed.origin)) {
    return `${parsed.pathname}${parsed.search}`;
  }
  return null;
}
function parseDocumentUrl(value) {
  try {
    return new URL(value, self.location.origin);
  } catch {
    return null;
  }
}
function injectOverlayBootstrap(html) {
  if (!activeConfig?.overlayBootstrapPath) {
    return html;
  }
  if (html.includes('data-enhance-overlay="1"')) {
    return html;
  }
  const bootstrapPath = normalizeAssetPathForDocument(activeConfig.overlayBootstrapPath);
  if (!bootstrapPath) {
    return html;
  }
  const integrityAttr = activeConfig.overlayBootstrapIntegrity ? ` integrity="${activeConfig.overlayBootstrapIntegrity}"` : "";
  const needsCrossorigin = bootstrapPath.startsWith("http://") || bootstrapPath.startsWith("https://");
  const crossoriginAttr = needsCrossorigin ? ' crossorigin="anonymous"' : "";
  const bootstrap = `<script type="module" src=${JSON.stringify(
    bootstrapPath
  )} data-enhance-overlay="1"${integrityAttr}${crossoriginAttr}></script>`;
  if (/<\/body>/i.test(html)) {
    return html.replace(/<\/body>/i, `${bootstrap}
</body>`);
  }
  return `${html}
${bootstrap}`;
}
function injectHmrBridge(html) {
  if (!activeConfig) {
    return html;
  }
  const script = buildHmrBridgeScript();
  if (!script) {
    return html;
  }
  const headOpenMatch = html.match(/<head[^>]*>/i);
  if (headOpenMatch) {
    const headOpen = headOpenMatch[0];
    return html.replace(headOpen, `${headOpen}
${script}`);
  }
  if (/<\/head>/i.test(html)) {
    return html.replace(/<\/head>/i, `${script}
</head>`);
  }
  if (/<body\b[^>]*>/i.test(html)) {
    return html.replace(/<body\b[^>]*>/i, `$&
${script}`);
  }
  return `${script}
${html}`;
}
function buildHmrBridgeScript() {
  if (!activeConfig) {
    return null;
  }
  const sandboxBase = activeConfig.sandboxBase.toString();
  const protocolList = toLowerCaseUnique(mergeDefaultHmrProtocols(activeConfig.hmr.protocols));
  const pathHintList = toLowerCaseUnique(mergeDefaultHmrPathHints(activeConfig.hmr.pathHints));
  const scriptLines = [
    '<script data-enhance-sandbox="hmr-bridge">',
    "(function(){",
    "  try {",
    `    var sandboxBase = new URL(${JSON.stringify(sandboxBase)});`,
    "    var originalWebSocket = window.WebSocket;",
    "    if (!originalWebSocket || originalWebSocket.__enhanceSandboxPatched) {",
    "      return;",
    "    }",
    `    var knownProtocols = new Set(${JSON.stringify(protocolList)});`,
    `    var knownPathHints = ${JSON.stringify(pathHintList)};`,
    '    var sandboxPath = sandboxBase.pathname || "";',
    "    var sanitizeSegment = function(value, removeTrailing) {",
    "      var result = value;",
    '      while (result.length > 0 && result.charAt(0) === "/") {',
    "        result = result.slice(1);",
    "      }",
    "      if (removeTrailing) {",
    '        while (result.length > 0 && result.charAt(result.length - 1) === "/") {',
    "          result = result.slice(0, -1);",
    "        }",
    "      }",
    "      return result;",
    "    };",
    "    var sandboxSegment = sanitizeSegment(sandboxPath, true);",
    '    var wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";',
    "    var appHost = window.location.host;",
    '    var basePrefix = "/__sbx__";',
    "    var toArray = function(value) {",
    "      if (!value) return [];",
    "      return Array.isArray(value) ? value : [value];",
    "    };",
    "    var shouldProxy = function(url, protocols) {",
    "      if (url.host !== window.location.host) return false;",
    '      var pathname = url.pathname || "/";',
    '      if (pathname === basePrefix || pathname.indexOf(basePrefix + "/") === 0) {',
    "        return false;",
    "      }",
    "      var protoList = toArray(protocols);",
    "      for (var i = 0; i < protoList.length; i++) {",
    "        var proto = protoList[i];",
    '        if (typeof proto === "string" && knownProtocols.has(proto.toLowerCase())) {',
    "          return true;",
    "        }",
    "      }",
    "      var loweredPath = pathname.toLowerCase();",
    "      for (var j = 0; j < knownPathHints.length; j++) {",
    "        if (loweredPath.indexOf(knownPathHints[j]) !== -1) {",
    "          return true;",
    "        }",
    "      }",
    "      return false;",
    "    };",
    "    var buildProxiedPath = function(pathname) {",
    '      var cleanSuffix = sanitizeSegment(pathname || "/", true);',
    '      var keepTrailing = pathname.endsWith("/");',
    "      var path = basePrefix;",
    "      if (sandboxSegment) {",
    '        path += "/" + sandboxSegment;',
    "      }",
    "      if (cleanSuffix) {",
    '        path += "/" + cleanSuffix;',
    "      }",
    "      if (keepTrailing) {",
    '        if (path.charAt(path.length - 1) !== "/") {',
    '          path += "/";',
    "        } else if (!cleanSuffix) {",
    '          path += "/";',
    "        }",
    "      }",
    "      return path;",
    "    };",
    "    var buildProxiedUrl = function(targetUrl) {",
    '      var proxied = new URL(wsProtocol + "//" + appHost + "/");',
    '      proxied.pathname = buildProxiedPath(targetUrl.pathname || "/");',
    "      proxied.search = targetUrl.search;",
    '      proxied.hash = "";',
    "      return proxied;",
    "    };",
    "    var EnhancedWebSocket = function(url, protocols) {",
    "      try {",
    "        var resolved = url instanceof URL ? url : new URL(String(url), window.location.href);",
    "        if (shouldProxy(resolved, protocols)) {",
    "          var rewritten = buildProxiedUrl(resolved);",
    "          return new originalWebSocket(rewritten.toString(), protocols);",
    "        }",
    "      } catch (error) {",
    '        console.debug("[Enhance] websocket bridge fallback", error);',
    "      }",
    "      return new originalWebSocket(url, protocols);",
    "    };",
    "    Object.assign(EnhancedWebSocket, originalWebSocket);",
    "    EnhancedWebSocket.prototype = originalWebSocket.prototype;",
    "    Object.setPrototypeOf(EnhancedWebSocket, originalWebSocket);",
    "    try {",
    '      Object.defineProperty(EnhancedWebSocket.prototype, "constructor", { value: EnhancedWebSocket });',
    "    } catch (error) {",
    "      // ignore if unable to redefine",
    "    }",
    '    Object.defineProperty(EnhancedWebSocket, "__enhanceSandboxPatched", { value: true });',
    "    window.WebSocket = EnhancedWebSocket;",
    "  } catch (error) {",
    '    console.debug("[Enhance] websocket bridge unavailable", error);',
    "  }",
    "})();",
    "</script>"
  ];
  return scriptLines.join("\n");
}
function normalizeAssetPathForDocument(path) {
  if (!path)
    return path;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const stripped = path.replace(/^\.\//, "");
  if (stripped.startsWith("/")) {
    return stripped;
  }
  return `/${stripped}`;
}
function buildPreviewCsp(original) {
  const directives = [
    "default-src 'self' blob: data:",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https: http:",
    "style-src 'self' 'unsafe-inline' blob: data: https: http:",
    "img-src * data: blob:",
    "font-src * data:",
    "connect-src *",
    "media-src * data: blob:",
    "worker-src 'self' blob:",
    "object-src 'none'"
  ];
  const frameAncestors = extractFrameAncestors(original);
  if (frameAncestors) {
    directives.push(frameAncestors);
  }
  return directives.join("; ");
}
function extractFrameAncestors(csp) {
  if (!csp)
    return null;
  const match = csp.match(/frame-ancestors\s+([^;]+)/i);
  if (!match)
    return null;
  return `frame-ancestors ${match[1].trim()}`;
}
function buildSandboxUrl(url) {
  if (!activeConfig)
    return url;
  return appendRequestToSandboxBase(activeConfig.sandboxBase, url);
}
async function broadcastMetrics() {
  const now = Date.now();
  if (now - lastBroadcast < BROADCAST_INTERVAL_MS)
    return;
  lastBroadcast = now;
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  for (const client of clients) {
    client.postMessage({ type: WORKER_MESSAGE_METRICS, metrics });
  }
}
function log(level, message, ...meta) {
  if (!activeConfig)
    return;
  const ranking = { silent: 0, info: 1, debug: 2 };
  if (ranking[level] > ranking[activeConfig.logLevel])
    return;
  const prefix = "[Enhance SW]";
  if (level === "info") {
    console.info(prefix, message, ...meta);
  } else {
    console.debug(prefix, message, ...meta);
  }
  void sendLog(level, message, meta);
}
async function sendLog(level, message, meta) {
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  for (const client of clients) {
    client.postMessage({
      type: WORKER_MESSAGE_LOG,
      level,
      message,
      meta
    });
  }
}
function stripCookies(headers) {
  headers.delete("set-cookie");
  headers.delete("set-cookie2");
}
//# sourceMappingURL=sw.js.map