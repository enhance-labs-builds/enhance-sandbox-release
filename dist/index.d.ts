type SecurityMode$1 = "permissive" | "custom";

type RawOptions = {
    callbackBypass: string[];
    __development?: {
        enableOverlayHmr?: boolean;
        overlayPath?: string;
        security?: 'permissive' | 'custom';
        backendUrl?: string;
    };
};
type NormalizedOptions = {
    callbackBypass: string[];
    overlay: {
        enabled: true;
        position: 'bottom-right';
        enableViteHmr: boolean;
    };
    logLevel: 'info';
    swPath: '/sw-enhance.js';
    overlayPath: string;
    runtimeScriptPath: '/assets/enhance-runtime.js';
    security: SecurityMode$1;
    backendUrl: string;
};

type OverlayPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
type SecurityMode = 'permissive' | 'custom';
interface OverlayState {
    enhancementUrl: string;
    enabled: boolean;
    controlled: boolean;
    overlayPosition: OverlayPosition;
    securityMode: SecurityMode;
    backendBaseUrl?: string;
    appError: {
        message: string;
    } | null;
    /** Debug flag to force "Working" state */
    forceWorking?: boolean;
}
interface OverlayController {
    update(state: OverlayState): void;
    onToggle(handler: () => void): void;
    destroy(): void;
    open(): void;
    close(): void;
    isOpen(): boolean;
}
interface EnhanceStatus {
    enabled: boolean;
    controlled: boolean;
}
interface EnhanceController {
    enable(): void;
    disable(): void;
    status(): EnhanceStatus;
}
declare global {
    interface Window {
        __enhanceOverlay?: OverlayController;
        __viteHMRLoaded?: Set<string>;
        __enhanceReactRefreshInstalledOrigins?: Set<string>;
        __vite_plugin_react_preamble_installed__?: boolean;
        $RefreshReg$?: (type: unknown, id?: string) => void;
        $RefreshSig$?: () => (type: unknown) => unknown;
        enhancePreview?: EnhanceController;
    }
}

declare global {
    interface Window {
        __enhanceInitialized?: boolean;
        __enhanceOptions?: NormalizedOptions;
        __enhanceController?: EnhanceController;
    }
}
/**
 * Main entry point - the only public API.
 */
declare const Enhance$1: {
    init(rawOptions: RawOptions): EnhanceController;
};

interface EnhanceAssetManifest {
    serviceWorker: string;
    runtime: string;
    version: string;
    serviceWorkerDigest: string | null;
    runtimeDigest: string | null;
}
declare const Enhance: {
    init(options: Parameters<typeof Enhance$1.init>[0]): EnhanceController;
    serviceWorkerURL(): string;
    runtimeURL(): string;
    assetManifest(): EnhanceAssetManifest;
};
declare function getAssetManifest(): EnhanceAssetManifest;
declare function resolveServiceWorkerPath(): string;
declare function serviceWorkerURL(): string;
declare function runtimeURL(): string;

export { Enhance, type EnhanceAssetManifest, type EnhanceController, type RawOptions as EnhanceOptions, type EnhanceStatus, getAssetManifest, resolveServiceWorkerPath, runtimeURL, serviceWorkerURL };
