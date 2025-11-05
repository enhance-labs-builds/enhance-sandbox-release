# @enhance-eng/sandbox

`@enhance-eng/sandbox` delivers the Enhance permissive preview runtime, service worker, and overlay. Install it in a production app to opt-in to sandboxed front-end previews without touching your routing or deploy process.

## Install

```bash
npm install @enhance-eng/sandbox
# or pnpm add @enhance-eng/sandbox
```

To keep the bundled assets current automatically, add an `enhance.config.json` at your project root and reinstall:

```json
{
  "publicDir": "./public",
  "swFilename": "sw-enhance.js"
}
```

The postinstall hook reads this file and copies the service worker (`sw-enhance.js`) plus overlay bundle (`assets/overlay.js`) into the configured directory. Rerunning `npm install` or bumping `@enhance-eng/sandbox` keeps both files up to date without any extra steps.

Prefer to run the sync manually? You can still call the CLI directly:

```bash
npx enhance-sandbox prepare-sw --public-dir ./public --filename sw-enhance.js
```

Both paths write the service worker and overlay bundle into your public directory.

## Initialise

Load the runtime at the top of your client entry point:

```ts
import { Enhance } from '@enhance-eng/sandbox';

Enhance.init({
  sandboxBaseURL: 'https://sandbox.example.com/project/branch',
  projectId: 'project',
  branchId: 'branch',
  callbackBypass: ['/auth/callback']
});
```

When the page loads with `?enhance=1`, the runtime registers the service worker, triggers a one-time reload, and swaps document and asset requests to the sandbox host. OAuth callbacks, APIs, and third-party origins bypass the worker untouched.

## CLI

The package exposes an `enhance-sandbox` binary:

- `prepare-sw` – copy bundled assets into a public directory.
- `manifest` – print the packaged asset metadata for templating or deploy verification.

Run `npx enhance-sandbox --help` to view all commands and options.

## License

Released under the [MIT License](./LICENSE).
