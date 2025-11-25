type RawOptions = {
    callbackBypass: string[];
    __development?: {
        enableOverlayHmr?: boolean;
        overlayPath?: string;
        security?: 'permissive' | 'custom';
        backendUrl?: string;
    };
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
}
interface OverlayController {
    update(state: OverlayState): void;
    onToggle(handler: () => void): void;
    destroy(): void;
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
