import db from "$lib/server/db.js";
import { sessionCookieName, sessionCookieOptions } from "$lib/server/auth.js";
import { redirect } from "@sveltejs/kit";

export async function GET({ cookies }) {
  const sessionToken = cookies.get(sessionCookieName);

  if (sessionToken) {
    await db.deleteSession(sessionToken);
  }

  cookies.delete(sessionCookieName, sessionCookieOptions);

  redirect(303, "/");
}
