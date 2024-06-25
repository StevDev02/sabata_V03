import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);

  /* Get form data */
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    console.error("Missing form Data");
    return new Response("Missing form data", { status: 400 });
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error: any) {
    console.error("Something went wrong: ", error);
    return new Response("Something went wrong", { status: 400 });
  }

  console.log("User Created Succesfully");
  return redirect("/login", 302);
};
