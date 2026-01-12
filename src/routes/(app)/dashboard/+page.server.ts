import type { PageServerLoad } from "./$types";
import { requireAuth } from "$lib/auth/auth";

export const load: PageServerLoad = async ({ cookies, fetch, depends }) => {
  requireAuth({ cookies } as any);
  depends("todos:list"); // Register dependency

  const res = await fetch("/api/todos");
  const todos = await res.json();

  return { todos };
};
