import { gql } from 'graphql-request';

// =======================
// FOOTER
// =======================
export const FOOTER_QUERY = gql`
	query GetFooter {
		siteInfo {
			phone
			whatsapp
			instagram
			facebook
			address
			hours
			footer_text
		}
	}
`;

// =======================
// MAIN HERO
// =======================
export const MAIN_HERO_QUERY = gql`
	query GetMainHero {
		mainHero {
			eyebrow
			title
			subtitle
			button_text
			button_url
			images
		}
	}
`;

// =======================
// ABOUT JARDOR
// =======================
export const ABOUT_JARDOR_QUERY = gql`
	query GetAboutJardor {
		aboutJardor {
			eyebrow
			title
			subtitle
			content
			images
		}
	}
`;

// =======================
// CULINARY PHILOSOPHY
// =======================
export const CULINARY_PHILOSOPHY_QUERY = gql`
	query GetCulinaryPhilosophy {
		culinaryPhilosophy {
			eyebrow
			title
			subtitle
			content
			images
		}
	}
`;

// =======================
// LE GARDEN
// =======================
export const LE_GARDEN_QUERY = gql`
	query GetLeGarden {
		leGarden {
			eyebrow
			title
			subtitle
			content
			images
		}
	}
`;

// =======================
// MENU SECTION HEADER (NEW)
// =======================
export const MENUS_SECTION_QUERY = gql`
    query GetMenusSection {
        menusSection {
            eyebrow
            title
            subtitle
        }
    }
`;

// =======================
// MENU CATEGORIES
// =======================
export const MENU_CATEGORIES_QUERY = gql`
	query GetMenuCategories {
		menuCategories {
			id
			name
			slug
			image
			sort_order
			is_active
			description
			pdf
			items {
				id
				name
				description
				price
				order
				image
			}
		}
	}
`;

// =======================
// WINE TASTING SECTION
// =======================
export const WINE_TASTING_QUERY = gql`
	query GetWineTasting {
		wineTasting {
			eyebrow
			title
			subtitle
			content
			images
		}
	}
`;

// =======================
// EVENTS LIST
// =======================
export const EVENTS_QUERY = gql`
	query GetEvents {
		events {
			id
			title
			short_description
			description
			main_image
			gallery_images {
				id
				image
			}
		}
	}
`;

// =======================
// EVENT DETAIL
// =======================
export const EVENT_DETAIL_QUERY = gql`
	query GetEvent($id: ID!) {
		event(id: $id) {
			id
			title
			short_description
			description
			main_image
			gallery_images {
				id
				image
			}
		}
	}
`;

// =======================
// EVENTS SECTION
// =======================
export const EVENTS_SECTION_QUERY = gql`
    query GetEventsSection {
        eventsSection {
            eyebrow
            title
            subtitle
            content
            button_text
        }
    }
`;

// =======================
// GALLERY CATEGORIES
// =======================
export const GALLERY_CATEGORIES_QUERY = gql`
    query GetGalleryCategories {
        galleryCategories {
            id
            name
        }
    }
`;

// =======================
// GALLERY IMAGES BY CATEGORY
// =======================
export const GALLERY_IMAGES_QUERY = gql`
    query GetGalleryImages($category_id: ID) {
        galleryImages(category_id: $category_id) {
            id
            name
            image
            category {
                id
                name
            }
        }
    }
`;

// =======================
// RESERVATION SECTION (NEW)
// =======================
export const RESERVATION_SECTION_QUERY = gql`
    query GetReservationSection {
        reservationSection {
            eyebrow_form
            title_form
            privacy_notice
            right_title
            right_description
            button_text
        }
    }
`;