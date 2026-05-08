import db from "$lib/server/db.js";
import { sessionCookieName } from "$lib/server/auth.js";

export async function handle({ event, resolve }) {
  const sessionToken = event.cookies.get(sessionCookieName);

  if (sessionToken) {
    const user = await db.getUserBySession(sessionToken);
    event.locals.user = user;
  } else {
    event.locals.user = null;
  }

  return resolve(event);
}
