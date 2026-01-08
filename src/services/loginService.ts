import { supabase } from "../config/supabase";

export async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) {
    throw error;
  }
  
  return data;
}

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    throw error;
  }
  
  return data;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    throw error;
  }
}
