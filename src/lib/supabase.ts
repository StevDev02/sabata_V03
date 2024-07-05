import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bkaoishfamuishxonwhw.supabase.co";

export const supabase = createClient(
  SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY,
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: true,
    },
  }
);
