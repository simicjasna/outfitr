import db from "$lib/server/db.js";
import {
  verifyPassword,
  createSessionToken,
  sessionCookieName,
  sessionCookieOptions,
} from "$lib/server/auth.js";
import { fail, redirect } from "@sveltejs/kit";

export function load({ url }) {
  const registered = url.searchParams.get("registered");

  return {
    registered,
  };
}

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();

    const email = data.get("email")?.toString().trim().toLowerCase();
    const password = data.get("password")?.toString();

    if (!email || !password) {
      return fail(400, {
        message: "Bitte E-Mail und Passwort ausfüllen.",
        values: {
          email,
        },
      });
    }

    const user = await db.getUserByEmail(email);

    if (!user) {
      return fail(400, {
        message: "E-Mail oder Passwort ist falsch.",
        values: {
          email,
        },
      });
    }

    const validPassword = await verifyPassword(password, user.passwordHash);

    if (!validPassword) {
      return fail(400, {
        message: "E-Mail oder Passwort ist falsch.",
        values: {
          email,
        },
      });
    }

    const sessionToken = createSessionToken();

    await db.createSession({
      token: sessionToken,
      userId: user._id,
    });

    cookies.set(sessionCookieName, sessionToken, sessionCookieOptions);

    redirect(303, "/");
  },
};
