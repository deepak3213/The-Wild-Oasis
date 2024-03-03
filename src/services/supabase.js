import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://stngepvjwdpybmrxuyan.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0bmdlcHZqd2RweWJtcnh1eWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2MjI2MTEsImV4cCI6MjAwOTE5ODYxMX0.5WYp4fQUta7o-wj_saSoXIFGk_6ZZN8RyyMyO1GVh4U");
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
