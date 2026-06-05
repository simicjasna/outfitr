import db from "$lib/server/db.js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  create: async ({ request, locals }) => {
    const userId = locals.user._id;

    const data = await request.formData();

    const name = data.get("name")?.toString().trim();
    const category = data.get("category")?.toString();
    const accessoryType = data.get("accessoryType")?.toString();
    const color = data.get("color")?.toString();
    const style = data.get("style")?.toString();
    const image = data.get("image");
    const compressedImage = data.get("compressedImage")?.toString();

    const missingFields = [];

    if ((!image || image.size === 0) && !compressedImage) {
      missingFields.push("image");
    }

    if (!name) missingFields.push("name");
    if (!category) missingFields.push("category");

    if (category === "Accessoire" && !accessoryType) {
      missingFields.push("accessoryType");
    }

    if (!color) missingFields.push("color");
    if (!style) missingFields.push("style");

    if (missingFields.length > 0) {
      return fail(400, {
        message: "Bitte alle Pflichtfelder ausfüllen.",
        missingFields,
        values: {
          name,
          category,
          accessoryType,
          color,
          style,
        },
      });
    }

    let imageToSave = compressedImage;

    if (!imageToSave && image && image.size > 0) {
      const buffer = Buffer.from(await image.arrayBuffer());
      imageToSave = `data:${image.type};base64,${buffer.toString("base64")}`;
    }

    await db.createClothingItem(
      {
        name,
        category,
        accessoryType,
        color,
        style,
        image: imageToSave,
      },
      userId,
    );

    redirect(303, `/wardrobe?created=${encodeURIComponent(name)}`);
  },
};
