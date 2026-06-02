/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_THEME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
