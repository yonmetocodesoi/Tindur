import { createClient } from '@supabase/supabase-js';

// Ensure environment variables are defined with default values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase credentials not found. Please click "Connect to Supabase" to set up your database.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);