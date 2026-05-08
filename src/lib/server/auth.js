import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function hashPassword(password) {
  return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}

export function createSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}

export const sessionCookieName = "outfitr_session";

export const sessionCookieOptions = {
  path: "/",
  httpOnly: true,
  sameSite: "strict",
  secure: false,
  maxAge: 60 * 60 * 24 * 7,
};
