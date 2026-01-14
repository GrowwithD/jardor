import { NextResponse } from "next/server";
import { getGalleryImages } from "@/lib/fetchers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category_id = searchParams.get("category_id") ?? undefined;

    const images = await getGalleryImages(category_id);

    // Pastikan balikannya JSON array yang dipakai client
    return NextResponse.json(images ?? [], { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Failed to load gallery images", error: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}