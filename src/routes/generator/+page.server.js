import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  generate: async ({ request }) => {
    const data = await request.formData();

    const filters = {
      color: data.get("color"),
      style: data.get("style"),
    };

    const result = await db.generateOutfit(filters);

    if (result.error) {
      return {
        error: true,
        message: result.message,
        filters,
      };
    }

    return {
      outfit: result.outfit,
      filters,
    };
  },

  save: async ({ request }) => {
    const data = await request.formData();

    const outfit = JSON.parse(data.get("outfit"));
    const name = data.get("name");

    outfit.name = name;

    const result = await db.createOutfit(outfit);

    if (result.alreadyExists) {
      redirect(
        303,
        `/outfits?duplicate=${encodeURIComponent(outfit.name)}&existing=${encodeURIComponent(result.existingName)}`,
      );
    }

    redirect(303, `/outfits?saved=${encodeURIComponent(outfit.name)}`);
  },
};
