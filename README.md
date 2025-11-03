# @enhance/sandbox

`@enhance/sandbox` delivers the Enhance permissive preview runtime, service worker, and overlay. Install it in a production app to opt-in to sandboxed front-end previews without touching your routing or deploy process.

## Install

```bash
npm install @enhance/sandbox
# or pnpm add @enhance/sandbox
```

After installing, copy the runtime assets into your web root:

```bash
npx enhance-sandbox prepare-sw --public-dir ./public --filename sw-enhance.js
```

The command writes a service worker (`sw-enhance.<hash>.js`) and overlay bundles (`overlay-bootstrap.<hash>.js`, `overlay.<hash>.js`) into `./public/assets`.

## Initialise

Load the runtime at the top of your client entry point:

```ts
import { Enhance } from '@enhance/sandbox';

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
- `asset-manifest` – print the hashed filenames for templating or deploy verification.

Run `npx enhance-sandbox --help` to view all commands and options.

## License

Released under the [MIT License](./LICENSE).
