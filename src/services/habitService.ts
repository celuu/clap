import { supabase } from '../config/supabase';

export const getHabits = async () => {
  const { data, error } = await supabase
    .from('habit')
    .select();
  if (error) throw error;
  return data;
};

export const createHabit = async (habit: { label: string; weekly_target: number }) => {
  const { data, error } = await supabase.from('habit').insert(habit).select();

  if (error) throw error;
  return data;
};

export const createHabitCompletion = async (habitCompletion: { habit_id: string; completed_at: string | null }) => {
  const { data, error } = await supabase.from('habit_completion').insert(habitCompletion).select();

  if (error) throw error;
  return data;
};

export const deleteHabitCompletion = async (id: string) => {
  const { data, error } = await supabase.from('habit_completion').delete().eq('id', id);

  if (error) throw error;
  return data;
};