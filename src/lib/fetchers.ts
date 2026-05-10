'use server';

import { client } from './graphql-client';
import {
	FOOTER_QUERY,
	MAIN_HERO_QUERY,
	ABOUT_JARDOR_QUERY,
	CULINARY_PHILOSOPHY_QUERY,
	LE_GARDEN_QUERY,
	MENU_CATEGORIES_QUERY,
	MENUS_SECTION_QUERY,
	WINE_TASTING_QUERY,
	EVENTS_QUERY,
	EVENT_DETAIL_QUERY,
	EVENTS_SECTION_QUERY,
	GALLERY_CATEGORIES_QUERY,
	GALLERY_IMAGES_QUERY,
	RESERVATION_SECTION_QUERY,
	SUBMIT_RESERVATION_MUTATION,
	INSTAGRAM_IMAGES_QUERY,
	SCRIPT_TAGS_QUERY,
	CAMPAIGNS_QUERY,
	CAMPAIGN_DETAIL_QUERY,
} from './queries';

type GQLVars = Record<string, any>;

async function fetchGQL<T = any>(query: any, variables: GQLVars = {}): Promise<T> {
	return client.request(query, variables);
}

/** =============== TYPES =============== */
export type ScriptTag = {
	id: string;
	name: string;
	location: 'head' | 'footer';
	position: number;
	is_active: boolean;
	code: string;
	created_at?: string | null;
	updated_at?: string | null;
};

export type GalleryCategory = { id: string; name: string };
export type GalleryImage = { id: string; name?: string | null; image: string; category_id?: string | null };

export type ReservationInput = {
	event_id?: string | null;
	name: string;
	phone: string;
	email: string;
	reservation_date: string; // YYYY-MM-DD
	reservation_time: string; // HH:mm
	guests: number;
	notes?: string | null;
};

/** =============== FOOTER =============== */
export async function getSiteInfo() {
	try {
		const data = await fetchGQL<{ siteInfo: any }>(FOOTER_QUERY);
		return data.siteInfo;
	} catch {
		return {};
	}
}

/** =============== MAIN HERO =============== */
export async function getMainHero() {
	try {
		const data = await fetchGQL<{ mainHero: any }>(MAIN_HERO_QUERY);
		return data.mainHero;
	} catch { return null; }
}

/** =============== ABOUT JARDOR =============== */
export async function getAboutJardor() {
	try {
		const data = await fetchGQL<{ aboutJardor: any }>(ABOUT_JARDOR_QUERY);
		return data.aboutJardor;
	} catch { return null; }
}

/** =============== CULINARY PHILOSOPHY =============== */
export async function getCulinaryPhilosophy() {
	try {
		const data = await fetchGQL<{ culinaryPhilosophy: any }>(CULINARY_PHILOSOPHY_QUERY);
		return data.culinaryPhilosophy;
	} catch { return null; }
}

/** =============== LE GARDEN =============== */
export async function getLeGarden() {
	try {
		const data = await fetchGQL<{ leGarden: any }>(LE_GARDEN_QUERY);
		return data.leGarden;
	} catch { return null; }
}

/** =============== MENU SECTION HEADER =============== */
export async function getMenusSection() {
	try {
		const data = await fetchGQL<{ menusSection: any }>(MENUS_SECTION_QUERY);
		return data.menusSection;
	} catch { return null; }
}

/** =============== MENU CATEGORIES =============== */
export async function getMenuCategories() {
	try {
		const data = await fetchGQL<{ menuCategories: any[] }>(MENU_CATEGORIES_QUERY);
		return data.menuCategories;
	} catch { return []; }
}

/** =============== WINE TASTING SECTION =============== */
export async function getWineTasting() {
	try {
		const data = await fetchGQL<{ wineTasting: any }>(WINE_TASTING_QUERY);
		return data.wineTasting;
	} catch { return null; }
}

/** =============== EVENTS LIST =============== */
export async function getEvents() {
	try {
		const data = await fetchGQL<{ events: any[] }>(EVENTS_QUERY);
		return data.events;
	} catch { return []; }
}

/** =============== EVENT DETAIL =============== */
export async function getEvent(id: string) {
	try {
		const data = await fetchGQL<{ event: any }>(EVENT_DETAIL_QUERY, { id });
		return data.event;
	} catch { return null; }
}

/** =============== EVENTS SECTION =============== */
export async function getEventsSection() {
	try {
		const data = await fetchGQL<{ eventsSection: any }>(EVENTS_SECTION_QUERY);
		return data.eventsSection;
	} catch { return null; }
}

/** =============== GALLERY CATEGORIES =============== */
export async function getGalleryCategories(): Promise<GalleryCategory[]> {
	try {
		const data = await fetchGQL<{ galleryCategories: GalleryCategory[] }>(GALLERY_CATEGORIES_QUERY);
		return data.galleryCategories ?? [];
	} catch { return []; }
}

/** =============== GALLERY IMAGES BY CATEGORY =============== */
export async function getGalleryImages(category_id?: string): Promise<GalleryImage[]> {
	try {
		const variables: GQLVars = {};
		if (category_id) variables.category_id = category_id;

		const data = await fetchGQL<{ galleryImages: any[] }>(GALLERY_IMAGES_QUERY, variables);
		return (data.galleryImages ?? []).map((x: any) => ({
			id: String(x.id),
			name: x.name ?? null,
			image: x.image,
			category_id: x.category?.id ? String(x.category.id) : null,
		}));
	} catch { return []; }
}

/** =============== RESERVATION SECTION =============== */
export async function getReservationSection() {
	try {
		const data = await fetchGQL<{ reservationSection: any }>(RESERVATION_SECTION_QUERY);
		return data.reservationSection;
	} catch { return null; }
}

/** =============== INSTAGRAM IMAGES =============== */
export async function getInstagramImages(activeOnly: boolean = true) {
	try {
		const data = await fetchGQL<{ instagramImages: any[] }>(INSTAGRAM_IMAGES_QUERY, { activeOnly });
		return data.instagramImages;
	} catch { return []; }
}

/** =============== SCRIPT TAGS =============== */
/**
 * location: 'head' | 'footer' | undefined (ambil semua)
 * activeOnly: true untuk hanya active
 */
export async function getScriptTags(
	activeOnly: boolean = true,
	location?: 'head' | 'footer'
): Promise<ScriptTag[]> {
	try {
		const variables: GQLVars = { activeOnly };
		if (location) variables.location = location;

		const data = await fetchGQL<{ scriptTags: ScriptTag[] }>(SCRIPT_TAGS_QUERY, variables);

		return (data.scriptTags ?? []).map((t: any) => ({
			id: String(t.id),
			name: t.name,
			location: t.location,
			position: Number(t.position ?? 0),
			is_active: Boolean(t.is_active),
			code: t.code ?? '',
			created_at: t.created_at ?? null,
			updated_at: t.updated_at ?? null,
		}));
	} catch {
		return [];
	}
}

/** =============== RESERVATION MUTATION =============== */
export async function submitReservation(input: ReservationInput) {
	const data = await fetchGQL<{ submitReservation: any }>(SUBMIT_RESERVATION_MUTATION, {
		input,
	});
	return data.submitReservation;
}
/** =============== CAMPAIGNS =============== */
export async function getCampaigns(activeOnly = true) {
	const data = await fetchGQL<{ campaigns: any[] }>(CAMPAIGNS_QUERY, { activeOnly });
	return data.campaigns ?? [];
}

export async function getCampaign(slug: string) {
	const data = await fetchGQL<{ campaign: any }>(CAMPAIGN_DETAIL_QUERY, { slug });
	return data.campaign ?? null;
}
