import { createClient } from '@supabase/supabase-js'

export const db = createClient(process.env.SUPABASE_LINK as string, process.env.SUPABASE_API_KEY_PUBLIC as string)