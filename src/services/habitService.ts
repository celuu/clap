import { supabase } from '../config/supabase';

export const getHabits = async () => {
  const { data, error } = await supabase
    .from('habit_item')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const createHabit = async (habit: { label: string; completed: boolean }) => {
  const { data, error } = await supabase.from('habit_item').insert(habit).select();

  if (error) throw error;
  return data;
};
