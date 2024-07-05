import { defineMiddleware } from "astro:middleware";
import { supabase } from "../lib/supabase";
import micromatch from "micromatch";

const protectedRoutes = ["/es/shop(|/)"];
const redirectRoutes = ["/es/auth/login(|/)", "/es/auth/register(|/)"];
const protectedAPIRoutes = ["/api/products(|/)"];

export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    // Check if the route matches protected routes
    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      // If no tokens, redirect to login page
      if (!accessToken || !refreshToken) {
        return redirect("/es/auth/login");
      }

      // Attempt to set session with Supabase
      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });

      // If error, delete cookies and redirect to login page
      if (error) {
        cookies.delete("sb-access-token", { path: "/" });
        cookies.delete("sb-refresh-token", { path: "/" });
        return redirect("/es/auth/login");
      }

      // Store user email in locals and update cookies
      locals.email = data.user?.email!;
      cookies.set("sb-access-token", data?.session?.access_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
      cookies.set("sb-refresh-token", data?.session?.refresh_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
    }

    // Check if the route matches redirect routes
    if (micromatch.isMatch(url.pathname, redirectRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      // If tokens exist, redirect to shop page
      if (accessToken && refreshToken) {
        return redirect("/es/shop");
      }
    }

    // Check if the route matches protected API routes
    if (micromatch.isMatch(url.pathname, protectedAPIRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      // If no tokens, respond with 401 Unauthorized
      if (!accessToken || !refreshToken) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
        });
      }

      // Attempt to set session with Supabase
      const { error } = await supabase.auth.setSession({
        access_token: accessToken.value,
        refresh_token: refreshToken.value,
      });

      // If error, respond with 401 Unauthorized
      if (error) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
        });
      }
    }

    // Proceed to the next middleware
    return next();
  }
);
