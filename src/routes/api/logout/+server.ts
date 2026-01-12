import { clearSession } from "$lib/auth/auth";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ cookies }) => {
  clearSession({ cookies } as any);
  return new Response(null, { status: 200 });
};
