import { GraphQLClient } from 'graphql-request';

// ==============================
// Resolve GraphQL endpoint
// ==============================
let endpoint = process.env.NEXT_PUBLIC_GRAPHQL_URL;


// Fallback otomatis saat dev (opsional, bisa kamu hapus)
if (!endpoint) {


	if (process.env.NODE_ENV === 'development') {
		endpoint = 'http://jardorcms.test/graphql';
		console.warn('⚠️ Using fallback GraphQL URL:', endpoint);
	} else {
		throw new Error('❌ Missing NEXT_PUBLIC_GRAPHQL_URL in production');
	}
}


// ==============================
// Buat GraphQL Client
// ==============================
export const client = new GraphQLClient(endpoint, {
	headers: {
		'Content-Type': 'application/json',
		// Authorization: `Bearer ${process.env.API_TOKEN ?? ""}`, // kalau pakai token
	},
});

// Debugging (opsional)
console.log('🚀 GraphQL Client Ready →', endpoint);
