//signup

import { supabase } from "@/config/supabase";

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'valid.email@supabase.io',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
}
// get user
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
