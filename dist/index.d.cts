import { z } from 'zod';

interface WorkerHmrConfiguration {
    protocols?: string[];
    pathHints?: string[];
}

declare const optionsSchema: z.ZodObject<{
    sandboxBaseURL: z.ZodOptional<z.ZodString>;
    callbackBypass: z.ZodArray<z.ZodString, "many">;
    assetHosts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    overlay: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        position: z.ZodOptional<z.ZodEnum<["top-left", "top-right", "bottom-left", "bottom-right"]>>;
        enableViteHmr: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean | undefined;
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
        enableViteHmr?: boolean | undefined;
    }, {
        enabled?: boolean | undefined;
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
        enableViteHmr?: boolean | undefined;
    }>>;
    hmr: z.ZodOptional<z.ZodObject<{
        protocols: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        pathHints: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        protocols?: string[] | undefined;
        pathHints?: string[] | undefined;
    }, {
        protocols?: string[] | undefined;
        pathHints?: string[] | undefined;
    }>>;
    logLevel: z.ZodOptional<z.ZodEnum<["silent", "info", "debug"]>>;
    swPath: z.ZodOptional<z.ZodString>;
    overlayPath: z.ZodOptional<z.ZodString>;
    runtimeScriptPath: z.ZodOptional<z.ZodString>;
    storageKeysOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    security: z.ZodOptional<z.ZodEnum<["permissive", "custom"]>>;
}, "strip", z.ZodTypeAny, {
    callbackBypass: string[];
    sandboxBaseURL?: string | undefined;
    assetHosts?: string[] | undefined;
    overlay?: {
        enabled?: boolean | undefined;
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
        enableViteHmr?: boolean | undefined;
    } | undefined;
    hmr?: {
        protocols?: string[] | undefined;
        pathHints?: string[] | undefined;
    } | undefined;
    logLevel?: "silent" | "info" | "debug" | undefined;
    swPath?: string | undefined;
    overlayPath?: string | undefined;
    runtimeScriptPath?: string | undefined;
    storageKeysOverride?: Record<string, string> | undefined;
    security?: "custom" | "permissive" | undefined;
}, {
    callbackBypass: string[];
    sandboxBaseURL?: string | undefined;
    assetHosts?: string[] | undefined;
    overlay?: {
        enabled?: boolean | undefined;
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined;
        enableViteHmr?: boolean | undefined;
    } | undefined;
    hmr?: {
        protocols?: string[] | undefined;
        pathHints?: string[] | undefined;
    } | undefined;
    logLevel?: "silent" | "info" | "debug" | undefined;
    swPath?: string | undefined;
    overlayPath?: string | undefined;
    runtimeScriptPath?: string | undefined;
    storageKeysOverride?: Record<string, string> | undefined;
    security?: "custom" | "permissive" | undefined;
}>;
type RawOptions = z.input<typeof optionsSchema>;
declare global {
    interface Window {
        __enhanceSandboxHmr?: WorkerHmrConfiguration | (() => WorkerHmrConfiguration | undefined);
    }
}

interface EnhanceInitOptions extends RawOptions {
}
interface EnhanceStatus {
    enabled: boolean;
    controlled: boolean;
    version: string;
    sandboxHits: number;
    sandboxFallbacks: number;
}
interface EnhanceController {
    enable(token?: string): void;
    disable(): void;
    status(): EnhanceStatus;
}

type EnhanceOptions = EnhanceInitOptions;
interface EnhanceAssetManifest {
    serviceWorker: string;
    runtime: string;
    version: string;
    serviceWorkerDigest: string | null;
    runtimeDigest: string | null;
}
declare const Enhance: {
    init(options: EnhanceInitOptions): EnhanceController;
    serviceWorkerURL(): string;
    runtimeURL(): string;
    assetManifest(): EnhanceAssetManifest;
};
declare function getAssetManifest(): EnhanceAssetManifest;
declare function resolveServiceWorkerPath(): string;
declare function serviceWorkerURL(): string;
declare function runtimeURL(): string;

export { Enhance, type EnhanceAssetManifest, type EnhanceController, type EnhanceOptions, type EnhanceStatus, getAssetManifest, resolveServiceWorkerPath, runtimeURL, serviceWorkerURL };
