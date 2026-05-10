import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const CMS_BASE = (process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "")
    .replace(/\/graphql\/?$/, "");

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path } = await params;

    if (!CMS_BASE) {
        return new Response("CMS base URL not configured", { status: 500 });
    }

    const segments = (path ?? []).map((s) => encodeURIComponent(s)).join("/");
    const target = `${CMS_BASE}/storage/${segments}`;

    const upstream = await fetch(target, {
        headers: { "User-Agent": "jardor-web-proxy" },
    });

    if (!upstream.ok || !upstream.body) {
        return new Response(`Upstream error: ${upstream.status}`, {
            status: upstream.status,
        });
    }

    const headers = new Headers();
    const contentType = upstream.headers.get("content-type");
    const contentLength = upstream.headers.get("content-length");
    const lastModified = upstream.headers.get("last-modified");
    const etag = upstream.headers.get("etag");

    if (contentType) headers.set("content-type", contentType);
    if (contentLength) headers.set("content-length", contentLength);
    if (lastModified) headers.set("last-modified", lastModified);
    if (etag) headers.set("etag", etag);
    headers.set("cache-control", "public, max-age=3600, s-maxage=86400");

    const filename = segments.split("/").pop() ?? "file";
    headers.set("content-disposition", `inline; filename="${filename}"`);

    return new Response(upstream.body, { status: 200, headers });
}
