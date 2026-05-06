import db from "$lib/server/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ url }) {
  let feedback = null;

  const saved = url.searchParams.get("saved");
  const removed = url.searchParams.get("removed");
  const duplicate = url.searchParams.get("duplicate");
  const existing = url.searchParams.get("existing");

  if (saved) {
    feedback = {
      type: "success",
      message: `${saved} wurde gespeichert.`,
    };
  }

  if (removed) {
    feedback = {
      type: "danger",
      message: `${removed} wurde aus deinen Outfits entfernt.`,
    };
  }

  if (duplicate) {
    feedback = {
      type: "warning",
      message: `${duplicate} wurde bereits gespeichert und ist dasselbe wie ${existing}.`,
    };
  }

  return {
    outfits: await db.getOutfits(),
    feedback,
  };
}

export const actions = {
  remove: async ({ request }) => {
    const data = await request.formData();

    const id = data.get("id");
    const name = data.get("name");

    await db.deleteOutfit(id);

    redirect(303, `/outfits?removed=${encodeURIComponent(name)}`);
  },
};
