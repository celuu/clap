import { Profile } from "@/types";
import { supabase } from "../config/supabase";
import { UserFormData } from "@/pages/Login/UserModal";


export async function getProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');
  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
  if (error) throw error;
  return data;
}

export async function createProfile(profile: UserFormData) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');
  const { error } = await supabase
    .from('profiles')
    .insert({ id: user.id, ...profile})

  if(error) throw error;  

}

export async function updateProfile(profile: { name: string; email: string }) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');
  const { data, error } = await supabase.from('profiles').update(profile).eq('id', user.id).select().single();
  if (error) throw error;
  return data;
}