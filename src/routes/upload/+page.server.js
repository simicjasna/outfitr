import db from "$lib/server/db.js";
import { redirect, fail } from "@sveltejs/kit";
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

    if (!name || !category || !color || !style) {
      return fail(400, {
        message: "Bitte alle Pflichtfelder ausfüllen.",
      });
    }

    let imagePath = "/images/placeholder.png";

    if (image && image.size > 0) {
      const extension = image.name.split(".").pop();
      const fileName = `${Date.now()}-${image.name}`;
      const uploadPath = path.join("static", "uploads", fileName);

      const buffer = Buffer.from(await image.arrayBuffer());
      await writeFile(uploadPath, buffer);

      imagePath = `/uploads/${fileName}`;
    }

    await db.createClothingItem({
      name,
      category,
      color,
      style,
      image: imagePath,
    });

    redirect(303, `/wardrobe?created=${encodeURIComponent(name)}`);
  },
};
