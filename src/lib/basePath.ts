const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prepend basePath to a local asset path (for raw `<img>` tags). */
export const bp = (path: string) => `${BASE}${path}`;
