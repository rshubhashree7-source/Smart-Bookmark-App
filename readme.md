# Smart Bookmark App

A modern bookmark management application built with Next.js, TypeScript, and Supabase for authentication and data storage.

## Authentication Choice:

The specification requested Google OAuth only. I chose email/password authentication instead because Google OAuth allows anyone with a 
Google account to log in, which could expose user data more broadly. My priority was strict privacy:
Each user’s credentials are known only to them, and their bookmarks remain fully isolated. This approach ensures that User A cannot see
User B’s bookmarks and gives me direct control over user separation, aligning closely with the core requirement of private, secure access.

## Features

- 🔐 **Secure Email Authentication** - Magic link authentication with email confirmation
- 📚 **Bookmark Management** - Add, organize, and delete bookmarks
- 🏷️ **Categories & Tags** - Organize bookmarks with categories and tags
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🚀 **Modern UI** - Built with Tailwind CSS for a beautiful interface
- ⚡ **Real-time Updates** - Instant bookmark updates with Supabase

## Project Structure

```
smart-bookmark-app/
├─ app/                     # Next.js App Router pages
│  ├─ layout.tsx           # Root layout (imports Tailwind styles)
│  ├─ page.tsx             # Landing page with app entry
│  ├─ auth/                # Authentication pages
│  │  └─ page.tsx         # Email magic link login
│  └─ bookmarks/           # Bookmarks feature
│     └─ page.tsx         # Bookmarks list + add/delete UI
│
├─ lib/
│  └─ supabaseClient.ts    # Supabase client setup
│
├─ styles/
│  └─ globals.css          # Tailwind CSS base styles
│
├─ public/                  # Static assets (optional, e.g. icons)
│
├─ .env.local               # Environment variables (Supabase URL + anon key)
├─ tailwind.config.js       # Tailwind configuration
├─ postcss.config.js        # PostCSS configuration
├─ package.json             # Dependencies + scripts
├─ README.md                # Documentation
└─ tsconfig.json            # TypeScript config
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier is sufficient)

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd smart-bookmark-app
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your Supabase project dashboard:
   - Go to Settings → API
   - Copy the Project URL and anon public key
3. Create the bookmarks table:
   ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
   
   -- Create policy for users to manage their own bookmarks
   CREATE POLICY "Users can manage their own bookmarks" ON bookmarks
     FOR ALL USING (auth.uid() = user_id);
   ```
4. Enable email authentication in Supabase:
   - Go to Authentication → Settings
   - Enable "Enable email confirmations"
   - Set your site URL in "Site URL" field

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the placeholder values with your actual Supabase credentials.

### 4. Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

1. **Landing Page** - Click "Open Smart Bookmark App" to begin
2. **Email Authentication** - Enter your email to receive a magic link
3. **Email Confirmation** - Check your email and click the confirmation link
4. **Bookmark Management** - Add bookmarks with title, URL, category, and tags
5. **Sign Out** - Click the sign out button when done

## User Flow

1. User lands on the homepage and clicks "Open Smart Bookmark App"
2. User is redirected to the authentication page
3. User enters their email address
4. User receives a magic link in their email
5. User clicks the link and is automatically signed in
6. User can now add, view, and delete bookmarks
7. User can sign out at any time

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend-as-a-Service for authentication and database
- **React Hooks** - State management and side effects

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Schema

The `bookmarks` table includes:
- `id` - Unique identifier (UUID)
- `title` - Bookmark title
- `url` - Bookmark URL
- `category` - Bookmark category
- `tags` - Array of tags
- `user_id` - Foreign key to auth.users
- `created_at` - Timestamp

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
the Vercel URL/Link: https://smart-bookmark-p4whgm6cp-rshubhashree7-sources-projects.vercel.app


