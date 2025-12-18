import { GraphQLClient } from "graphql-request";

// ==============================
// Resolve GraphQL endpoint
// ==============================
let endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL;

// Fallback otomatis saat dev (opsional, bisa kamu hapus)
if (!endpoint) {
  if (process.env.NODE_ENV === "development") {
    endpoint = "http://jardorcms.test/graphql";
    console.warn("⚠️ Using fallback GraphQL URL:", endpoint);
  } else {
    throw new Error("❌ Missing NEXT_PUBLIC_GRAPHQL_URL in production");
  }
}

// ==============================
// Buat GraphQL Client (NO CACHE)
// ==============================
export const client = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.API_TOKEN ?? ""}`, // kalau pakai token
  },

  // ✅ INI KUNCINYA: paksa semua request jadi realtime (no Next cache)
  fetch: (input, init) =>
    fetch(input, {
      ...init,
      cache: "no-store",
      // optional: kalau ada layer CDN/proxy bandel
      headers: {
        ...(init?.headers || {}),
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
      },
    }),
});

// Debugging (opsional) — biar gak spam terlalu sering
if (process.env.NODE_ENV !== "production") {
  console.log("🚀 GraphQL Client Ready →", endpoint);
}