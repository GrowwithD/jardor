const CMS_BASE = (process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "")
    .replace(/\/graphql\/?$/, "");

/**
 * Rewrite full CMS storage URL into local Next.js proxy path.
 * Example:
 *   https://cms.jardor.com/storage/menu-categories/foo.pdf
 *     -> /api/cms-file/menu-categories/foo.pdf
 *
 * Non-CMS URLs and falsy values pass through unchanged.
 */
export function proxyCmsUrl(url: string | null | undefined): string {
    if (!url) return "";
    if (!CMS_BASE) return url;

    const prefix = `${CMS_BASE}/storage/`;
    if (url.startsWith(prefix)) {
        return `/api/cms-file/${url.slice(prefix.length)}`;
    }
    return url;
}
