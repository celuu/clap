import { supabase } from '../config/supabase';

export const getHighLows = async () => {
  const { data, error } = await supabase
    .from('daily_high_lows')
    .select()
    .order('date', { ascending: false });
  if (error) throw error;
  return data;
};

export const getHighLowByDate = async (date: string) => {
  const { data, error } = await supabase
    .from('daily_high_lows')
    .select()
    .eq('date', date)
    .single();
  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows returned
  return data;
};

export const upsertHighLow = async (highLow: { 
  high_content: string; 
  low_content: string; 
  date: string 
}) => {
  const { data, error } = await supabase
    .from('daily_high_lows')
    .upsert(highLow, { 
      onConflict: 'date',
      ignoreDuplicates: false 
    })
    .select();
  if (error) throw error;
  return data;
};

export const createHighLow = async (highLow: { high_content: string; low_content: string, date: string }) => {
  const { data, error } = await supabase.from('daily_high_lows').insert(highLow).select();
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