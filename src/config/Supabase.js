import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnnyafkxjkacqnwkfrzf.supabase.co';
const supabaseKey = process.env.REACT_APP_PORTFOLIO_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

