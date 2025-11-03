const bootstrapOverlay = async () => {
  if (typeof window === "undefined") return;
  if (window.__enhanceOverlay) return;
  try {
    const mod = await import('./overlay.6052f073b813.js');
    if (!mod || typeof mod.createOverlay !== "function") return;
    if (window.__enhanceOverlay) return;
    window.__enhanceOverlay = mod.createOverlay();
  } catch (error) {
    console.warn("[Enhance] overlay bootstrap failed", error);
  }
};

bootstrapOverlay();
