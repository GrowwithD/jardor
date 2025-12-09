"use server";

import { getMenuCategories, getMenusSection } from "@/lib/fetchers";
import MenusListClient from "@/components/sections/menu/Client";

export default async function MenusListSection() {
    const header = await getMenusSection();
    const categories = await getMenuCategories();

    const safeCategories = Array.isArray(categories) ? categories : [];

    return <MenusListClient categories={safeCategories} header={header} />;
}