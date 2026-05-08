import db from "$lib/server/db.js";
import { hashPassword } from "$lib/server/auth.js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim().toLowerCase();
    const password = data.get("password")?.toString();

    if (!name || !email || !password) {
      return fail(400, {
        message: "Bitte alle Felder ausfüllen.",
        values: {
          name,
          email,
        },
      });
    }

    if (password.length < 6) {
      return fail(400, {
        message: "Das Passwort muss mindestens 6 Zeichen lang sein.",
        values: {
          name,
          email,
        },
      });
    }

    const existingUser = await db.getUserByEmail(email);

    if (existingUser) {
      return fail(400, {
        message: "Für diese E-Mail existiert bereits ein Account.",
        values: {
          name,
          email,
        },
      });
    }

    const passwordHash = await hashPassword(password);

    await db.createUser({
      name,
      email,
      passwordHash,
    });

    redirect(303, `/login?registered=${encodeURIComponent(name)}`);
  },
};
