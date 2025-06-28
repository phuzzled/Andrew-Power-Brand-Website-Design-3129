import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://oehoxaigdqdggkxbiqrx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laG94YWlnZHFkZ2dreGJpcXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwODk4NjQsImV4cCI6MjA2NjY2NTg2NH0.1mLznrZDQ0hAR_ZPS3veT6rKhq4vTyvu3rPMd3nVisw'

if(SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>') {
  throw new Error('Missing Supabase variables');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})

export default supabase