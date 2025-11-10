import * as _enhance_sandbox_runtime from '@enhance-sandbox/runtime';
import { Enhance as Enhance$1 } from '@enhance-sandbox/runtime';
export { EnhanceController, EnhanceOptions, EnhanceStatus } from '@enhance-sandbox/runtime';

interface EnhanceAssetManifest {
    serviceWorker: string;
    overlay: string;
    runtime: string;
    version: string;
    serviceWorkerDigest: string | null;
    overlayDigest: string | null;
    runtimeDigest: string | null;
}
declare const Enhance: {
    init(options: Parameters<typeof Enhance$1.init>[0]): _enhance_sandbox_runtime.EnhanceController;
    serviceWorkerURL(): string;
    overlayURL(): string;
    runtimeURL(): string;
    assetManifest(): EnhanceAssetManifest;
};
declare function getAssetManifest(): EnhanceAssetManifest;
declare function resolveServiceWorkerPath(): string;
declare function resolveOverlayPath(): string;
declare function serviceWorkerURL(): string;
declare function overlayURL(): string;
declare function runtimeURL(): string;

export { Enhance, type EnhanceAssetManifest, getAssetManifest, overlayURL, resolveOverlayPath, resolveServiceWorkerPath, runtimeURL, serviceWorkerURL };
