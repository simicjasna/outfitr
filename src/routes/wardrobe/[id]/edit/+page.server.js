import db from "$lib/server/db.js";
import { redirect, fail } from "@sveltejs/kit";

export async function load({ params }) {
  const item = await db.getClothingItem(params.id);

  if (!item) {
    redirect(303, "/wardrobe");
  }

  return {
    item,
  };
}

export const actions = {
  update: async ({ request, params }) => {
    const data = await request.formData();

    const name = data.get("name");
    const category = data.get("category");
    const color = data.get("color");
    const style = data.get("style");

    if (!name || !category || !color || !style) {
      return fail(400, {
        message: "Bitte alle Pflichtfelder ausfüllen.",
      });
    }

    await db.updateClothingItem(params.id, {
      name,
      category,
      color,
      style,
    });

    redirect(303, `/wardrobe?edited=${encodeURIComponent(name)}`);
  },
};
