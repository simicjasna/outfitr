import db from "$lib/server/db.js";
import { fail, redirect } from "@sveltejs/kit";
import { writeFile } from "fs/promises";
import path from "path";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    const name = data.get("name");
    const category = data.get("category");
    const color = data.get("color");
    const style = data.get("style");
    const image = data.get("image");

    const missingFields = [];

    if (!image || image.size === 0) missingFields.push("image");
    if (!name) missingFields.push("name");
    if (!category) missingFields.push("category");
    if (!color) missingFields.push("color");
    if (!style) missingFields.push("style");

    if (missingFields.length > 0) {
      return fail(400, {
        message: "Bitte alle Pflichtfelder ausfüllen.",
        missingFields,
        values: {
          name,
          category,
          color,
          style,
        },
      });
    }

    const fileName = `${Date.now()}-${image.name}`;
    const uploadPath = path.join("static", "uploads", fileName);

    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(uploadPath, buffer);

    await db.createClothingItem({
      name,
      category,
      color,
      style,
      image: `/uploads/${fileName}`,
    });

    redirect(303, `/wardrobe?created=${encodeURIComponent(name)}`);
  },
};
