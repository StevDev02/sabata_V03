import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect, cookies }) => {
  cookies.delete("__session", {
    path: "/",
    httpOnly: true,
    secure: true,
  });
  return redirect("/login", 302);
};
