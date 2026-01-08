# Supabase Row Level Security (RLS) Setup Guide

## What's Happening?

After adding authentication, your pages are likely empty because Supabase's **Row Level Security (RLS)** is blocking access to your data. RLS policies determine who can read, insert, update, or delete data in your tables.

## How to Debug

### 1. Check Browser Console

Open your browser's developer tools (F12) and check the Console tab. You should see:
- 🔐 Auth check messages (showing if you're logged in)
- 🎯/📅 Data fetching messages
- ❌ Any error messages with details about RLS policy failures

### 2. Common Error Messages

If you see errors like:
- `"new row violates row-level security policy"`
- `"permission denied for table X"`
- `"insufficient permissions"`

These mean your RLS policies need to be configured!

## How to Fix in Supabase Dashboard

### Step 1: Go to Your Supabase Dashboard

1. Visit [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Authentication** → **Policies** (or **Table Editor** → Select a table → **RLS Policies**)

### Step 2: Create Policies for Each Table

You need to create policies for these tables:
- `habits`
- `habit_completions`
- `daily_high_lows`

### Step 3: Example Policies

#### Option A: Simple - Allow all authenticated users

**For SELECT (Read)**
```sql
-- Enable RLS
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read all habits
CREATE POLICY "Allow authenticated users to read habits"
ON habits
FOR SELECT
TO authenticated
USING (true);
```

**For INSERT (Create)**
```sql
CREATE POLICY "Allow authenticated users to create habits"
ON habits
FOR INSERT
TO authenticated
WITH CHECK (true);
```

**For UPDATE (Modify)**
```sql
CREATE POLICY "Allow authenticated users to update habits"
ON habits
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);
```

**For DELETE**
```sql
CREATE POLICY "Allow authenticated users to delete habits"
ON habits
FOR DELETE
TO authenticated
USING (true);
```

#### Option B: Better - User-specific data (recommended)

First, add a `user_id` column to your tables:

```sql
-- Add user_id column to habits table
ALTER TABLE habits ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Make user_id required for new rows
ALTER TABLE habits ALTER COLUMN user_id SET NOT NULL;
```

Then create user-specific policies:

```sql
-- SELECT: Users can only see their own habits
CREATE POLICY "Users can read their own habits"
ON habits
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- INSERT: Users can only create habits for themselves
CREATE POLICY "Users can create their own habits"
ON habits
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- UPDATE: Users can only update their own habits
CREATE POLICY "Users can update their own habits"
ON habits
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- DELETE: Users can only delete their own habits
CREATE POLICY "Users can delete their own habits"
ON habits
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);
```

#### Repeat for Other Tables

**For `habit_completions`:**
```sql
ALTER TABLE habit_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_completions ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Then create the same 4 policies (SELECT, INSERT, UPDATE, DELETE)
-- replacing 'habits' with 'habit_completions' in the policy names
```

**For `daily_high_lows`:**
```sql
ALTER TABLE daily_high_lows ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_high_lows ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Then create the same 4 policies
```

### Step 4: Quick Test in Supabase SQL Editor

Go to **SQL Editor** in Supabase and run:

```sql
-- Check if RLS is enabled on your tables
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';

-- View existing policies
SELECT * FROM pg_policies WHERE schemaname = 'public';
```

## Testing Your App

1. **Clear your browser console** (right-click → Clear console)
2. **Refresh your app** (F5)
3. **Check the console logs:**
   - You should see: ✅ User authenticated: your-email@example.com
   - You should see: ✅ Habits fetched: [...]
   - You should NOT see: ❌ errors

4. **Try creating a habit:**
   - Click "Create Habit"
   - Fill out the form
   - Watch the console for success/error messages

## If You Still Have Issues

### Update your service functions to set user_id

If you added `user_id` columns, update your create functions:

**In `src/services/habitService.ts`:**
```typescript
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
```

**In `src/services/highLowService.ts`:**
```typescript
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
      onConflict: 'date',
      ignoreDuplicates: false 
    })
    .select();
  if (error) throw error;
  return data;
};
```

## Quick Checklist

- [ ] Signed up / logged in to your app
- [ ] Checked browser console for auth messages
- [ ] Enabled RLS on all tables in Supabase
- [ ] Created SELECT, INSERT, UPDATE, DELETE policies for each table
- [ ] (Optional) Added `user_id` columns to tables
- [ ] (Optional) Updated service functions to include `user_id`
- [ ] Tested creating a new habit
- [ ] Tested viewing habits
- [ ] Checked for any remaining errors in console

## Still Stuck?

1. Check the **Supabase Logs** in your dashboard (Logs section)
2. Verify you're actually logged in (check browser console for auth messages)
3. Try the "Simple" policies first (Option A) to get things working, then switch to user-specific (Option B) later
4. Make sure your Supabase URL and anon key are correct in `src/config/supabase.ts`
