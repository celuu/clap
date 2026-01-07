import { supabase } from '../config/supabase';

export const getHighLows = async () => {
  const { data, error } = await supabase.from('high_lows').select();
  if (error) throw error;
  return data;
};

export const createHighLow = async (highLow: { high_content: string; low_content: string, date: string }) => {
  const { data, error } = await supabase.from('high_lows').insert(highLow).select();
  if (error) throw error;
  return data;
};

export const updateHighLow = async (id: string, highLow: { high_content: string; low_content: string }) => {
  const { data, error } = await supabase.from('high_lows').update(highLow).eq('id', id).select();
  if (error) throw error;
  return data;
};

export const deleteHighLow = async (id: string) => {
  const { error } = await supabase.from('high_lows').delete().eq('id', id).select();
  if (error) throw error;
  return 204;
};