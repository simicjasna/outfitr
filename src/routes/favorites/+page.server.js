import db from "$lib/server/db.js";

export async function load({ locals }) {
  const userId = locals.user._id;

  return {
    outfits: await db.getFavoriteOutfits(userId),
  };
}

export const actions = {
  toggleFavorite: async ({ request, locals }) => {
    const userId = locals.user._id;
    const data = await request.formData();

    const id = data.get("id");

    await db.toggleOutfitFavorite(id, userId);

    return {
      success: true,
    };
  },

  remove: async ({ request, locals }) => {
    const userId = locals.user._id;
    const data = await request.formData();

    const id = data.get("id");

    await db.deleteOutfit(id, userId);

    return {
      success: true,
    };
  },
};
