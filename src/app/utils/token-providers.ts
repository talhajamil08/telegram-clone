import { supabase } from "../lib/supabase";

export const tokenProvider = async () => {
  const { data } = await supabase.functions.invoke("streamToken");
  return data.token;
};
