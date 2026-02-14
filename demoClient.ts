// Demo client for when Supabase is not configured
export const demoUser = {
  id: 'demo-user-id',
  email: 'demo@example.com'
}

export const demoBookmarks = [
  {
    id: '1',
    title: 'Google',
    url: 'https://google.com',
    category: 'Search',
    tags: ['search', 'utility'],
    user_id: demoUser.id,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'GitHub',
    url: 'https://github.com',
    category: 'Development',
    tags: ['code', 'repository'],
    user_id: demoUser.id,
    created_at: new Date().toISOString()
  }
]

export const demoClient = {
  auth: {
    getUser: () => Promise.resolve({ data: { user: demoUser } }),
    signInWithOtp: () => Promise.resolve({ data: {}, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        order: () => Promise.resolve({ data: demoBookmarks, error: null })
      })
    }),
    insert: (data: any) => Promise.resolve({ data: [{ ...data[0], id: Date.now().toString() }], error: null }),
    delete: () => ({
      eq: () => Promise.resolve({ error: null })
    })
  })
}
