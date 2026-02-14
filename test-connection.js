// Test Supabase connection
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key:', supabaseAnonKey ? 'Present' : 'Missing')

// Test URL format
try {
  new URL(supabaseUrl)
  console.log('✅ URL format is valid')
} catch (error) {
  console.log('❌ URL format is invalid:', error.message)
}

// Test Supabase connection
if (supabaseUrl && supabaseAnonKey) {
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('✅ Supabase client created successfully')
  } catch (error) {
    console.log('❌ Supabase client creation failed:', error.message)
  }
} else {
  console.log('❌ Missing environment variables')
}
