interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_STAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}