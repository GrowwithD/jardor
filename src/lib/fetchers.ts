'use server';

import { client } from './graphql-client';
import {
	FOOTER_QUERY,
	MAIN_HERO_QUERY,
	ABOUT_JARDOR_QUERY,
	CULINARY_PHILOSOPHY_QUERY,
} from './queries';

const REVALIDATE = 900; // 15 menit caching

// Utility wrapper (optional)
async function fetchGQL(query: any) {
	return client.request(query);
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

export async function getCulinaryPhilosophy() {
	const data = await client.request(CULINARY_PHILOSOPHY_QUERY);
	return data.culinaryPhilosophy;
}
