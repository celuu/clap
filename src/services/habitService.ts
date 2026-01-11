import { supabase } from '../config/supabase';

// Habit
export const getHabits = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');
  
  const { data, error } = await supabase
    .from('habits')
    .select()
    .eq('user_id', user.id);
  if (error) throw error;
  return data;
};

export const createHabit = async (habit: { label: string; weekly_target: number }) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');
  
  const { data, error } = await supabase
    .from('habits')
    .insert({ ...habit, user_id: user.id })
    .select();

  if (error) throw error;
  return data;
};

export const deleteHabit = async (id: string) => {
  const {error } = await supabase.from('habits').delete().eq('id', id).select();
  if (!error) await getHabits();
  if (error) throw error;
  return 204;
};


// Habit Completion
export const createHabitCompletion = async (habitCompletion: { habit_id: string; completed_at: string | null }) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) throw new Error('Not authenticated');
  
  const { data, error } = await supabase
    .from('habit_completions')
    .insert({ ...habitCompletion, user_id: user.id })
    .select();

  if (error) throw error;
  return data;
};

export const deleteHabitCompletion = async (id: string) => {
  const { data, error } = await supabase.from('habit_completions').delete().eq('id', id);

  if (error) throw error;
  return data;
};