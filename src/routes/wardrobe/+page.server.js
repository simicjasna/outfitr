import db from '$lib/server/db.js';

export async function load() {
	return {
		clothes: await db.getClothes()
	};
}