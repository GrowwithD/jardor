import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://jardor.com';

	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: [
					'/admin',
					'/dashboard',
					'/cms',
					'/api',
					'/_next',
					'/private',
					'/server',
					'/draft',
				],
			},
			{
				// Google Image friendly
				userAgent: 'Googlebot-Image',
				allow: ['/', '/images'],
			},
			{
				// Instagram / Meta crawler
				userAgent: 'facebookexternalhit',
				allow: '/',
			},
			{
				// Pinterest SEO ready if someday restoran mau aktif IG/Pinterest
				userAgent: 'Pinterestbot',
				allow: '/',
			},
		],

		sitemap: `${baseUrl}/sitemap.xml`,

		host: baseUrl,
	};
}
