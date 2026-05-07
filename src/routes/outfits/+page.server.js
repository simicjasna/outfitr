import db from "$lib/server/db.js";

export async function load({ url }) {
  let feedback = null;

  const saved = url.searchParams.get("saved");
  const duplicate = url.searchParams.get("duplicate");
  const existing = url.searchParams.get("existing");

  if (saved) {
    feedback = {
      type: "success",
      message: `"${saved}" wurde gespeichert.`,
    };
  }

  if (duplicate) {
    feedback = {
      type: "warning",
      message: `"${duplicate}" wurde bereits gespeichert und ist dasselbe wie "${existing}".`,
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

    await db.deleteOutfit(id);

    return {
      success: true,
    };
  },

  restore: async ({ request }) => {
    const data = await request.formData();

    const outfit = JSON.parse(data.get("outfit"));
    delete outfit._id;

    await db.createOutfit(outfit);

    return {
      success: true,
    };
  },
};
