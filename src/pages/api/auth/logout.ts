import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", {
    sameSite: "strict",
    path: "/",
    secure: true,
  });
  cookies.delete("sb-refresh-token", {
    sameSite: "strict",
    path: "/",
    secure: true,
  });
  return redirect("/es/auth/login");
};
