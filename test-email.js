// Test Supabase email functionality
const { createClient } = require('@supabase/supabase-js')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('=== Supabase Email Test ===')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseAnonKey ? 'Present' : 'Missing')

// Test URL format
try {
  new URL(supabaseUrl)
  console.log('✅ URL format is valid')
} catch (error) {
  console.log('❌ URL format is invalid:', error.message)
  process.exit(1)
}

// Test Supabase connection
if (supabaseUrl && supabaseAnonKey) {
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('✅ Supabase client created successfully')
    
    // Test email sign up
    const testEmail = 'test@example.com'
    console.log(`Testing email sign up with: ${testEmail}`)
    
    supabase.auth.signInWithOtp({
      email: testEmail,
      options: {
        emailRedirectTo: 'http://localhost:3000/bookmarks',
      },
    }).then(({ data, error }) => {
      if (error) {
        console.log('❌ Email sign up failed:', error.message)
        console.log('Possible causes:')
        console.log('1. Email provider not configured in Supabase')
        console.log('2. Invalid anon key')
        console.log('3. Supabase project settings issue')
      } else {
        console.log('✅ Email sign up initiated successfully!')
        console.log('Check your email for the magic link.')
      }
    })
    
  } catch (error) {
    console.log('❌ Supabase client creation failed:', error.message)
  }
} else {
  console.log('❌ Missing environment variables')
  console.log('Please check your .env.local file')
}
