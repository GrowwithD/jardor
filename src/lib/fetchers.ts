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
} from './queries';

async function fetchGQL(query: any, variables: any = {}) {
	return client.request(query, variables);
}

// =======================
// FOOTER
// =======================
export async function getSiteInfo() {
	const data = await fetchGQL(FOOTER_QUERY);
	return data.siteInfo;
}

// =======================
// MAIN HERO
// =======================
export async function getMainHero() {
	const data = await fetchGQL(MAIN_HERO_QUERY);
	return data.mainHero;
}

// =======================
// ABOUT JARDOR
// =======================
export async function getAboutJardor() {
	const data = await fetchGQL(ABOUT_JARDOR_QUERY);
	return data.aboutJardor;
}

// =======================
// CULINARY PHILOSOPHY
// =======================
export async function getCulinaryPhilosophy() {
	const data = await fetchGQL(CULINARY_PHILOSOPHY_QUERY);
	return data.culinaryPhilosophy;
}

// =======================
// LE GARDEN
// =======================
export async function getLeGarden() {
	const data = await fetchGQL(LE_GARDEN_QUERY);
	return data.leGarden;
}

// =======================
// MENU SECTION HEADER
// =======================
export async function getMenusSection() {
	const data = await fetchGQL(MENUS_SECTION_QUERY);
	return data.menusSection;
}

// =======================
// MENU CATEGORIES
// =======================
export async function getMenuCategories() {
	const data = await fetchGQL(MENU_CATEGORIES_QUERY);
	return data.menuCategories;
}

// =======================
// WINE TASTING SECTION
// =======================
export async function getWineTasting() {
	const data = await fetchGQL(WINE_TASTING_QUERY);
	return data.wineTasting;
}

// =======================
// EVENTS LIST
// =======================
export async function getEvents() {
	const data = await fetchGQL(EVENTS_QUERY);
	return data.events;
}

// =======================
// EVENT DETAIL
// =======================
export async function getEvent(id: string) {
	const data = await fetchGQL(EVENT_DETAIL_QUERY, { id });
	return data.event;
}

// =======================
// EVENTS SECTION
// =======================
export async function getEventsSection() {
	const data = await fetchGQL(EVENTS_SECTION_QUERY);
	return data.eventsSection;
}

// =======================
// GALLERY CATEGORIES
// =======================
export async function getGalleryCategories() {
	const data = await fetchGQL(GALLERY_CATEGORIES_QUERY);
	return data.galleryCategories;
}

// =======================
// GALLERY IMAGES BY CATEGORY
// =======================
export async function getGalleryImages(category_id?: string) {
	const data = await fetchGQL(GALLERY_IMAGES_QUERY, { category_id });
	return data.galleryImages;
}

// =======================
// RESERVATION SECTION
// =======================
export async function getReservationSection() {
	const data = await fetchGQL(RESERVATION_SECTION_QUERY);
	return data.reservationSection;
}

// =======================
// INSTAGRAM IMAGES
// =======================
export async function getInstagramImages(activeOnly: boolean = true) {
	const data = await fetchGQL(INSTAGRAM_IMAGES_QUERY, { activeOnly });
	return data.instagramImages;
}

// =======================
// RESERVATION MUTATION
// =======================
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

export async function submitReservation(input: ReservationInput) {
	const data = await fetchGQL(SUBMIT_RESERVATION_MUTATION, { input });
	return data.submitReservation;
}
