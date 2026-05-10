import db from "$lib/server/db.js";
import { fail } from "@sveltejs/kit";
import { hashPassword, verifyPassword } from "$lib/server/auth.js";

function getMostUsedStyle(clothes) {
  const styleCounts = {};

  for (const item of clothes) {
    if (!item.style) continue;

    if (!styleCounts[item.style]) {
      styleCounts[item.style] = 0;
    }

    styleCounts[item.style]++;
  }

  const styles = Object.entries(styleCounts);

  if (styles.length === 0) {
    return "Noch keiner";
  }

  styles.sort((a, b) => b[1] - a[1]);

  return styles[0][0] || "Noch keiner";
}

export async function load({ locals }) {
  const userId = locals.user._id;

  const user = await db.getUserById(userId);
  const clothes = await db.getClothes({}, userId);
  const outfits = await db.getOutfits(userId);

  return {
    profile: {
      name: user.name,
      email: user.email,
      vinted: user.resalePlatforms?.vinted || "",
      ricardo: user.resalePlatforms?.ricardo || "",
      depop: user.resalePlatforms?.depop || "",
    },
    stats: {
      clothesCount: clothes.length,
      outfitsCount: outfits.length,
      mostUsedStyle: getMostUsedStyle(clothes),
    },
  };
}

export const actions = {
  updateProfile: async ({ request, locals }) => {
    const userId = locals.user._id;
    const data = await request.formData();

    const name = data.get("name")?.toString().trim();
    const vinted = data.get("vinted")?.toString().trim();
    const ricardo = data.get("ricardo")?.toString().trim();
    const depop = data.get("depop")?.toString().trim();

    if (!name) {
      return fail(400, {
        type: "profile",
        message: "Bitte gib einen Namen ein.",
        values: {
          name,
          vinted,
          ricardo,
          depop,
        },
      });
    }

    await db.updateUserProfile(userId, {
      name,
      resalePlatforms: {
        vinted,
        ricardo,
        depop,
      },
    });

    return {
      type: "profile",
      success: true,
      message: "Profil wurde erfolgreich aktualisiert.",
    };
  },

  changePassword: async ({ request, locals }) => {
    const userId = locals.user._id;
    const data = await request.formData();

    const currentPassword = data.get("currentPassword")?.toString();
    const newPassword = data.get("newPassword")?.toString();

    if (!currentPassword || !newPassword) {
      return fail(400, {
        type: "password",
        message: "Bitte beide Passwortfelder ausfüllen.",
      });
    }

    if (newPassword.length < 6) {
      return fail(400, {
        type: "password",
        message: "Das neue Passwort muss mindestens 6 Zeichen lang sein.",
      });
    }

    const user = await db.getUserById(userId);

    const validPassword = await verifyPassword(
      currentPassword,
      user.passwordHash,
    );

    if (!validPassword) {
      return fail(400, {
        type: "password",
        message: "Das aktuelle Passwort ist falsch.",
      });
    }

    const passwordHash = await hashPassword(newPassword);

    await db.updateUserPassword(userId, passwordHash);

    return {
      type: "password",
      success: true,
      message: "Passwort wurde erfolgreich geändert.",
    };
  },
};
