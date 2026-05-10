"use server";

import { getMenuCategories, getMenusSection } from "@/lib/fetchers";
import MenusListClient from "@/components/sections/menu/Client";
import { proxyCmsUrl } from "@/lib/proxy-url";

export default async function MenusListSection() {
    const rawHeader = await getMenusSection();
    const categories = await getMenuCategories();

    const header = {
        eyebrow: rawHeader?.eyebrow ?? "",
        title: rawHeader?.title ?? "",
        subtitle: rawHeader?.subtitle ?? "",
    };

    const safeCategories = Array.isArray(categories)
        ? categories.map((cat) => ({ ...cat, pdf: proxyCmsUrl(cat.pdf) }))
        : [];

    return <MenusListClient categories={safeCategories} header={header} />;
}