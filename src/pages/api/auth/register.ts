import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response("Email, password & name are required", {
      status: 400,
    });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name,
      },
      // Optional for Captcha
      //captchaToken: "",
    },
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/es/auth/login");
};
