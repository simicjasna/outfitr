import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  generate: async ({ request, locals }) => {
    const userId = locals.user._id;

    const data = await request.formData();

    const style = data.get("style")?.toString();
    const color = data.get("color")?.toString();

    const result = await db.generateOutfit(
      {
        style,
        color,
      },
      userId,
    );

    if (result.error) {
      return {
        error: true,
        message: result.message,
        filters: {
          style,
          color,
        },
      };
    }

    return {
      outfit: result.outfit,
      filters: {
        style,
        color,
      },
    };
  },

  save: async ({ request, locals }) => {
    const userId = locals.user._id;

    const data = await request.formData();

    const outfit = JSON.parse(data.get("outfit"));
    const name = data.get("name")?.toString().trim();

    outfit.name = name || outfit.name;

    const result = await db.createOutfit(outfit, userId);

    if (result.alreadyExists) {
      redirect(
        303,
        `/outfits?duplicate=${encodeURIComponent(outfit.name)}&existing=${encodeURIComponent(result.existingName)}`,
      );
    }

    redirect(303, `/outfits?saved=${encodeURIComponent(outfit.name)}`);
  },
};
