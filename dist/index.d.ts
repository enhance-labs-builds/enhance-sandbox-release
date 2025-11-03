import * as _enhance_sandbox_runtime from '@enhance-sandbox/runtime';
import { Enhance as Enhance$1 } from '@enhance-sandbox/runtime';
export { EnhanceController, EnhanceOptions, EnhanceStatus } from '@enhance-sandbox/runtime';

interface EnhanceAssetManifest {
    serviceWorker: string;
    overlay: string;
    overlayBootstrap: string;
    overlayBootstrapIntegrity: string | null;
    version: string;
}
declare const Enhance: {
    init(options: Parameters<typeof Enhance$1.init>[0]): _enhance_sandbox_runtime.EnhanceController;
    serviceWorkerURL(): string;
    overlayURL(): string;
    overlayBootstrapURL(): string;
    assetManifest(): EnhanceAssetManifest;
};
declare function getAssetManifest(): EnhanceAssetManifest;
declare function resolveServiceWorkerPath(): string;
declare function resolveOverlayPath(): string;
declare function serviceWorkerURL(): string;
declare function overlayURL(): string;
declare function overlayBootstrapURL(): string;

export { Enhance, type EnhanceAssetManifest, getAssetManifest, overlayBootstrapURL, overlayURL, resolveOverlayPath, resolveServiceWorkerPath, serviceWorkerURL };
