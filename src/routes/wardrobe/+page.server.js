import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
  const category = url.searchParams.get("category") || "";
  const color = url.searchParams.get("color") || "";
  const style = url.searchParams.get("style") || "";

  let feedback = null;

  const created = url.searchParams.get("created");
  const removed = url.searchParams.get("removed");
  const edited = url.searchParams.get("edited");

  if (created) {
    feedback = {
      type: "success",
      message: `"${created}" wurde erfolgreich hinzugefügt.`,
    };
  }

  if (removed) {
    feedback = {
      type: "danger",
      message: `"${removed}" wurde ausgemistet.`,
    };
  }

  if (edited) {
    feedback = {
      type: "success",
      message: `"${edited}" wurde erfolgreich aktualisiert.`,
    };
  }

  return {
    clothes: await db.getClothes({
      category,
      color,
      style,
    }),
    filters: {
      category,
      color,
      style,
    },
    feedback,
  };
}

export const actions = {
  remove: async ({ request }) => {
    const data = await request.formData();

    const id = data.get("id");
    const name = data.get("name");

    await db.deleteClothingItem(id);

    redirect(303, `/wardrobe?removed=${encodeURIComponent(name)}`);
  },
};
