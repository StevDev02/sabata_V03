/// <reference path="../.astro/actions.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FIREBASE_SERVICE_ACCOUNT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
