# Changelog

All notable changes to `@enhance-eng/sandbox` will be documented here.

## 0.3.0

- Added opt-in `enhance.config.json` support plus a package `postinstall` hook that automatically copies `sw-enhance.js` and `assets/overlay.js` into the configured public directory.
- Made `enhance-sandbox prepare-sw` idempotent and shared the copy logic so installs skip rewriting unchanged assets.
- Bundled a sample config file and refreshed docs to guide teams through the zero-touch install flow.

## 0.2.0

- Revamped inspect mode with magnetic morphing hover box, buttery-smooth transitions, and keyboard navigation support.
- Refined info tag presentation with updated typography, spacing, dampened motion, and clearer hover feedback.
- Simplified color swatches and viewport accents for consistent styling during inspections.
- Fixed build caching issues and refreshed documentation ahead of the obfuscated release flow.

## 0.1.0

- Initial public publish with obfuscated runtime, service worker, overlay bundles, and CLI.
