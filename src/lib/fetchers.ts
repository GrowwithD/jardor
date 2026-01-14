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
export type GalleryImage = { id: string; name?: string | null; image: string };

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
	const data = await fetchGQL<{ siteInfo: any }>(FOOTER_QUERY);
	return data.siteInfo;
}

/** =============== MAIN HERO =============== */
export async function getMainHero() {
	const data = await fetchGQL<{ mainHero: any }>(MAIN_HERO_QUERY);
	return data.mainHero;
}

/** =============== ABOUT JARDOR =============== */
export async function getAboutJardor() {
	const data = await fetchGQL<{ aboutJardor: any }>(ABOUT_JARDOR_QUERY);
	return data.aboutJardor;
}

/** =============== CULINARY PHILOSOPHY =============== */
export async function getCulinaryPhilosophy() {
	const data = await fetchGQL<{ culinaryPhilosophy: any }>(CULINARY_PHILOSOPHY_QUERY);
	return data.culinaryPhilosophy;
}

/** =============== LE GARDEN =============== */
export async function getLeGarden() {
	const data = await fetchGQL<{ leGarden: any }>(LE_GARDEN_QUERY);
	return data.leGarden;
}

/** =============== MENU SECTION HEADER =============== */
export async function getMenusSection() {
	const data = await fetchGQL<{ menusSection: any }>(MENUS_SECTION_QUERY);
	return data.menusSection;
}

/** =============== MENU CATEGORIES =============== */
export async function getMenuCategories() {
	const data = await fetchGQL<{ menuCategories: any[] }>(MENU_CATEGORIES_QUERY);
	return data.menuCategories;
}

/** =============== WINE TASTING SECTION =============== */
export async function getWineTasting() {
	const data = await fetchGQL<{ wineTasting: any }>(WINE_TASTING_QUERY);
	return data.wineTasting;
}

/** =============== EVENTS LIST =============== */
export async function getEvents() {
	const data = await fetchGQL<{ events: any[] }>(EVENTS_QUERY);
	return data.events;
}

/** =============== EVENT DETAIL =============== */
export async function getEvent(id: string) {
	const data = await fetchGQL<{ event: any }>(EVENT_DETAIL_QUERY, { id });
	return data.event;
}

/** =============== EVENTS SECTION =============== */
export async function getEventsSection() {
	const data = await fetchGQL<{ eventsSection: any }>(EVENTS_SECTION_QUERY);
	return data.eventsSection;
}

/** =============== GALLERY CATEGORIES =============== */
export async function getGalleryCategories(): Promise<GalleryCategory[]> {
	const data = await fetchGQL<{ galleryCategories: GalleryCategory[] }>(
		GALLERY_CATEGORIES_QUERY
	);
	return data.galleryCategories ?? [];
}

/** =============== GALLERY IMAGES BY CATEGORY =============== */
export async function getGalleryImages(category_id?: string): Promise<GalleryImage[]> {
	const variables: GQLVars = {};
	if (category_id) variables.category_id = category_id;

	const data = await fetchGQL<{ galleryImages: any[] }>(GALLERY_IMAGES_QUERY, variables);

	// Normalisasi supaya Client gampang pakai: { id, image, name? }
	return (data.galleryImages ?? []).map((x: any) => ({
		id: String(x.id),
		name: x.name ?? null,
		image: x.image,
	}));
}

/** =============== RESERVATION SECTION =============== */
export async function getReservationSection() {
	const data = await fetchGQL<{ reservationSection: any }>(RESERVATION_SECTION_QUERY);
	return data.reservationSection;
}

/** =============== INSTAGRAM IMAGES =============== */
export async function getInstagramImages(activeOnly: boolean = true) {
	const data = await fetchGQL<{ instagramImages: any[] }>(INSTAGRAM_IMAGES_QUERY, {
		activeOnly,
	});
	return data.instagramImages;
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
}

/** =============== RESERVATION MUTATION =============== */
export async function submitReservation(input: ReservationInput) {
	const data = await fetchGQL<{ submitReservation: any }>(SUBMIT_RESERVATION_MUTATION, {
		input,
	});
	return data.submitReservation;
}