// Global TypeScript type definitions

export interface User {
  id: string;
  email: string;
  // Add more fields as needed
}

// Add more types as your application grows

export interface Weather {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
}

export interface Habit {
  id: string;
  label: string;
  weekly_target: number;
}
export interface HabitCompletion {
  id: string;
  habit_id: string;
  completed_at: string | null;
}