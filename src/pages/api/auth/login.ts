import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);

  /* Get token from request headers */
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response("No token found", { status: 401 });
  }

  /* Verify id token */
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response("Invalid token", { status: 401 });
  }

  let sessionCookie;
  try {
    /* Verify the ID token */
    await auth.verifyIdToken(idToken);
    const fiveDays = 60 * 60 * 24 * 5 * 1000;
    sessionCookie = await auth
      .createSessionCookie(idToken, { expiresIn: fiveDays })
      .catch((error) => {
        return new Response(
          JSON.stringify({
            message: error.message,
          }),
          { status: 401 }
        );
      });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "The server is on fire",
      }),
      { status: 401 }
    );
  }

  cookies.set("__session", sessionCookie, {
    path: "/",
    httpOnly: true,
    secure: true,
  });

  console.log("User Logged Succesfully");
  return redirect("/es/shop", 302);
};
