import db from "$lib/server/db.js";
import { sessionCookieName } from "$lib/server/auth.js";
import { redirect } from "@sveltejs/kit";

const publicRoutes = ["/", "/login", "/register"];

export async function handle({ event, resolve }) {
  const sessionToken = event.cookies.get(sessionCookieName);

  if (sessionToken) {
    const user = await db.getUserBySession(sessionToken);
    event.locals.user = user;
  } else {
    event.locals.user = null;
  }

  const isPublicRoute = publicRoutes.includes(event.url.pathname);

  if (!event.locals.user && !isPublicRoute) {
    redirect(303, "/login");
  }

  return resolve(event);
}
