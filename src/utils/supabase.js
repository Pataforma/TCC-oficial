// src/utils/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kveiaruikeyrkglanzta.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZWlhcnVpa2V5cmtnbGFuenRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjYxMTksImV4cCI6MjA2NDE0MjExOX0.3S6O_dsx4Xj1rl4RpNg6F59IV0SD4cG03c2nnvlH_G0'

export const supabase = createClient(supabaseUrl, supabaseKey)
