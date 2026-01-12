import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "../../routes/$types";

const users = [
  { id: 124, email: "panchalnirmal210@gmail.com", password: "123456" },
];

export function authenticate(email: string, password: string) {
  return users.find((u) => u.email === email && u.password === password);
}

export function setSessionCookie(event: RequestEvent, userId: string) {
  event.cookies.set("session_id", userId, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: false,
    maxAge: 60 * 60 * 24,
  });
}

export function requireAuth(event: RequestEvent) {
  const session = event.cookies.get("session_id");
  if (!session) throw redirect(302, "/login");
  return session;
}

export function clearSession(event: RequestEvent) {
  event.cookies.delete("session_id", { path: "/" });
}
