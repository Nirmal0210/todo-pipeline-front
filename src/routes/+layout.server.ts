import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = ({ url, cookies }) => {
  const publicRoutes = ["/login", "/signup"];
  const path = url.pathname.replace(/\/$/, "");
  const isPublic = publicRoutes.some((r) => r.replace(/\/$/, "") === path);

  const session = cookies.get("session_id");

  if (!isPublic && !session) {
    throw redirect(302, "/login");
  }
  if (path === "" && session) {
    throw redirect(303, "/dashboard");
  }

  return { session };
};
