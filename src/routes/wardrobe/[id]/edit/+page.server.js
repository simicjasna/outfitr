import db from "$lib/server/db.js";
import { redirect, fail } from "@sveltejs/kit";

export async function load({ params, locals }) {
  const userId = locals.user._id;

  const item = await db.getClothingItem(params.id, userId);

  if (!item) {
    redirect(303, "/wardrobe");
  }

  return {
    item,
  };
}

export const actions = {
  update: async ({ request, params, locals }) => {
    const userId = locals.user._id;

    const data = await request.formData();

    const name = data.get("name")?.toString().trim();
    const category = data.get("category")?.toString();
    const color = data.get("color")?.toString();
    const style = data.get("style")?.toString();

    if (!name || !category || !color || !style) {
      return fail(400, {
        message: "Bitte alle Pflichtfelder ausfüllen.",
      });
    }

    await db.updateClothingItem(
      params.id,
      {
        name,
        category,
        color,
        style,
      },
      userId,
    );

    redirect(303, `/wardrobe?edited=${encodeURIComponent(name)}`);
  },
};
