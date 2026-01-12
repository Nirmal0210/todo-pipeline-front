import { authenticate, setSessionCookie } from "$lib/auth/auth";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString() || "";
    const password = data.get("password")?.toString() || "";

    const user = authenticate(email, password);
    if (!user) {
      return fail(400, { error: "Invalid Email or Password!" });
    }
    setSessionCookie({ cookies } as any, user.id?.toString());
    throw redirect(302, "/dashboard");
  },
};
