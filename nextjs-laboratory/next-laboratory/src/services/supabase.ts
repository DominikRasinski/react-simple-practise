import "@/settings/envConfig";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://snpoauzfudpkvqxrksnx.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

if (!supabase) {
  throw new Error("supabase is not initialized");
}

console.log("supabase is initialized");

export default supabase;
