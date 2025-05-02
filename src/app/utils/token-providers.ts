import { supabase } from "../lib/supabase";

export const tokenProvider = async () => {
  const { data } = await supabase.functions.invoke("streamToken");
  console.log("tokenProvider", data);
  return data.token;
};
