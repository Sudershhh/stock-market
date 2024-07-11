// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "./authStore";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  useAuthStore.getState().setUser(session?.user || null);
});
