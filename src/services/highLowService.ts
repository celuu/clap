import { supabase } from '../config/supabase';

export const getHighLows = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');
  
  const { data, error } = await supabase
    .from('daily_high_lows')
    .select()
    .eq('user_id', user.id)
    .order('date', { ascending: false });
  if (error) throw error;
  return data;
};

export const getHighLowByDate = async (date: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');
  
  const { data, error } = await supabase
    .from('daily_high_lows')
    .select()
    .eq('date', date)
    .eq('user_id', user.id)
    .maybeSingle();
  if (error && error.code !== 'PGRST116') throw error;
  return data;
};

export const upsertHighLow = async (highLow: { 
  high_content: string; 
  low_content: string; 
  date: string 
}) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');
  
  const { data, error } = await supabase
    .from('daily_high_lows')
    .upsert({ ...highLow, user_id: user.id }, { 
      onConflict: 'date,user_id',
      ignoreDuplicates: false 
    })
    .select();
  if (error) throw error;
  return data;
};

export const createHighLow = async (highLow: { high_content: string; low_content: string, date: string }) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');
  
  const { data, error } = await supabase
    .from('daily_high_lows')
    .insert({ ...highLow, user_id: user.id })
    .select();
  if (error) throw error;
  return data;
};

export const updateHighLow = async (id: string, highLow: { high_content: string; low_content: string }) => {
  const { data, error } = await supabase.from('daily_high_lows').update(highLow).eq('id', id).select();
  if (error) throw error;
  return data;
};

export const deleteHighLow = async (id: string) => {
  const { error } = await supabase.from('daily_high_lows').delete().eq('id', id).select();
  if (error) throw error;
  return 204;
};