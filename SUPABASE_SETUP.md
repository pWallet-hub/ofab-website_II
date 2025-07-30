# Supabase Setup Guide for OMAS 2025 Registration

This guide will help you set up Supabase as the backend for the OMAS 2025 registration system.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account or log in
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - Name: `omas-2025-registration`
   - Database Password: Choose a strong password
   - Region: Choose the closest region to Rwanda (Europe West or Asia Southeast)
6. Click "Create new project"

## Step 2: Get Your Project Credentials

1. Once your project is created, go to Settings > API
2. Copy the following values:
   - **Project URL**: This will be your `REACT_APP_SUPABASE_URL`
   - **anon/public key**: This will be your `REACT_APP_SUPABASE_ANON_KEY`

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Replace the placeholder values with your actual Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 4: Create the Database Table

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the following SQL commands to create the registration table:

```sql
-- Step 1: Create profiles table linked to auth.users
CREATE TABLE public.profiles (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email text UNIQUE NOT NULL,
    full_name text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create an index on the user_id for performance
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Step 2: Create the OMAS 2025 registrations table
CREATE TABLE public.omas_2025_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),

  -- Link to user profile
  user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,

  -- Personal Information (from profile + additional)
  phone_number TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other', 'prefer_not_to_say')),
  national_id TEXT,
  passport_number TEXT,

  -- Professional Information
  organization TEXT NOT NULL,
  organization_address TEXT NOT NULL,
  media_category TEXT NOT NULL CHECK (media_category IN ('print_media', 'radio', 'television', 'digital_online')),

  -- Address Information
  country TEXT NOT NULL DEFAULT 'Rwanda',
  address TEXT NOT NULL,
  
  -- Story Submissions
  story_1_link TEXT NOT NULL,
  story_1_date DATE NOT NULL,
  story_1_english BOOLEAN DEFAULT true,
  story_1_summary TEXT NOT NULL,
  story_1_motivation TEXT NOT NULL,

  story_2_link TEXT NOT NULL,
  story_2_date DATE NOT NULL,
  story_2_english BOOLEAN DEFAULT true,
  story_2_summary TEXT NOT NULL,
  story_2_motivation TEXT NOT NULL,

  story_3_link TEXT NOT NULL,
  story_3_date DATE NOT NULL,
  story_3_english BOOLEAN DEFAULT true,
  story_3_summary TEXT NOT NULL,
  story_3_motivation TEXT NOT NULL,

  -- File Upload URLs (stored in Supabase Storage)
  passport_image_url TEXT,
  id_document_url TEXT,
  cv_document_url TEXT,
  portfolio_document_url TEXT,
  additional_documents_urls TEXT[], -- Array of URLs for multiple files
  story_1_transcript_url TEXT,
  story_2_transcript_url TEXT,
  story_3_transcript_url TEXT,
  
  -- Additional Information
  additional_comments TEXT,

  -- Registration Status
  registration_status TEXT DEFAULT 'pending' CHECK (registration_status IN ('pending', 'approved', 'rejected', 'waitlist')),

  -- Consent and agreements
  terms_accepted BOOLEAN NOT NULL DEFAULT false,

  -- Admin fields
  admin_notes TEXT,
  reviewed_by TEXT,
  reviewed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX idx_omas_2025_email ON omas_2025_registrations(email);
CREATE INDEX idx_omas_2025_status ON omas_2025_registrations(registration_status);
CREATE INDEX idx_omas_2025_category ON omas_2025_registrations(media_category);
CREATE INDEX idx_omas_2025_created_at ON omas_2025_registrations(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE omas_2025_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for RLS
-- Allow anyone to insert (register)
CREATE POLICY "Anyone can register" ON omas_2025_registrations
  FOR INSERT WITH CHECK (true);

-- Allow users to view their own registration
CREATE POLICY "Users can view own registration" ON omas_2025_registrations
  FOR SELECT USING (auth.jwt() ->> 'email' = email);

-- Allow users to update their own registration (before approval)
CREATE POLICY "Users can update own pending registration" ON omas_2025_registrations
  FOR UPDATE USING (
    auth.jwt() ->> 'email' = email AND 
    registration_status = 'pending'
  );
```

3. Click "Run" to execute the SQL commands

## Step 4: Set up Supabase Storage for File Uploads

1. In your Supabase dashboard, go to **Storage**
2. Create a new bucket called `omas-2025-documents`
3. Set the bucket to **Public** (for easier access to uploaded files)
4. Or run this SQL to create the bucket:

```sql
-- Create storage bucket for OMAS 2025 documents
INSERT INTO storage.buckets (id, name, public) VALUES ('omas-2025-documents', 'omas-2025-documents', true);

-- Create storage policies for file uploads
CREATE POLICY "Anyone can upload documents" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'omas-2025-documents');

CREATE POLICY "Anyone can view documents" ON storage.objects
  FOR SELECT USING (bucket_id = 'omas-2025-documents');
```

## Step 5: Set up Authentication

### 5.1 Configure Authentication in Supabase Dashboard

1. Go to **Authentication** > **Settings** in your Supabase dashboard
2. Configure **Site URL**: `http://localhost:5175` (for development)
3. Add **Redirect URLs**:
   - `http://localhost:5175/auth/callback`
   - `https://your-production-domain.com/auth/callback` (for production)

### 5.2 Enable Email Authentication

1. In **Authentication** > **Providers**
2. **Enable Email provider**
3. **Disable "Confirm email"** for easier testing (optional)
4. **Configure email templates** (optional)

### 5.3 Update Database Schema for Authentication

Run this additional SQL to link registrations with authenticated users:

```sql
-- Step 3: Enable RLS on registrations table
ALTER TABLE public.omas_2025_registrations ENABLE ROW LEVEL SECURITY;

-- Create index for performance
CREATE INDEX idx_omas_registrations_user_id ON public.omas_2025_registrations(user_id);

-- Registration policies
CREATE POLICY "Users can view own registration" ON public.omas_2025_registrations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own pending registration" ON public.omas_2025_registrations
  FOR UPDATE USING (
    auth.uid() = user_id AND
    registration_status = 'pending'
  );

CREATE POLICY "Authenticated users can register" ON public.omas_2025_registrations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Step 4: Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', '')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

## Step 6: Test the Setup

1. Start your React development server: `npm run dev`
2. Navigate to `/register` in your browser
3. Try filling out and submitting the registration form
4. Check your Supabase dashboard > Table Editor > omas_2025_registrations to see if the data was inserted

## Step 7: Set up Admin Access

### 7.1 Create Admin Users Table

```sql
-- Step 5: Create admin users table
CREATE TABLE public.admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(user_id) ON DELETE CASCADE UNIQUE NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_by UUID REFERENCES public.profiles(user_id)
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Admin policies
CREATE POLICY "Admins can view admin users" ON public.admin_users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au
      WHERE au.user_id = auth.uid()
    )
  );
```

### 7.2 Create Admin Policies for Registrations

```sql
-- Allow admins to view all registrations
CREATE POLICY "Admins can view all registrations" ON public.omas_2025_registrations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au
      WHERE au.user_id = auth.uid()
    )
  );

-- Allow admins to update registration status
CREATE POLICY "Admins can update registrations" ON public.omas_2025_registrations
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au
      WHERE au.user_id = auth.uid()
    )
  );
```

### 7.3 Add Your First Admin User

After creating an account through the registration form:

```sql
-- Replace 'your-email@example.com' with your actual email
INSERT INTO public.admin_users (user_id, role)
SELECT user_id, 'super_admin'
FROM public.profiles
WHERE email = 'your-email@example.com';
```

## Features Included

### 🔐 Authentication System
- ✅ **User Registration** with email/password
- ✅ **User Login** with session management
- ✅ **Password Reset** functionality
- ✅ **Protected Registration** (must be authenticated)
- ✅ **Admin Role Management** with separate admin table
- ✅ **Automatic User Linking** (registrations linked to authenticated users)

### 📝 Registration System
- ✅ **7-Step Registration Form** with validation
- ✅ **File Upload Support** (passport, CV, portfolio, transcripts)
- ✅ **Story Submission System** (3 stories with metadata)
- ✅ **Real-time Validation** and error handling
- ✅ **Progress Tracking** with step indicators

### 🛡️ Security Features
- ✅ **Row Level Security (RLS)** for data protection
- ✅ **User-based Access Control** (users can only see their own data)
- ✅ **Admin Access Controls** with role-based permissions
- ✅ **File Upload Security** with type and size validation
- ✅ **Email Uniqueness** validation

### 🎨 User Experience
- ✅ **Responsive Design** for all devices
- ✅ **Modern UI Components** with professional styling
- ✅ **Real-time Form Updates** and file upload progress
- ✅ **Authentication Modal** with login/register/forgot password
- ✅ **Success/Error Messaging** throughout the flow

## Security Notes

- The anon key is safe to use in client-side code
- Row Level Security (RLS) is enabled to protect data
- Users can only view/edit their own registrations
- Admin access requires additional authentication setup

## Troubleshooting

### Common Issues:

1. **"Invalid API key" error**: Check that your environment variables are correct
2. **"Table doesn't exist" error**: Make sure you ran the SQL commands in Step 4
3. **CORS errors**: Ensure your domain is added to Supabase allowed origins (usually automatic for localhost)

### Getting Help:

- Check the browser console for detailed error messages
- Review the Supabase logs in your dashboard
- Refer to the [Supabase documentation](https://supabase.com/docs)

## Next Steps

Once the basic setup is working, you can:

1. Set up email notifications for new registrations
2. Create an admin dashboard for managing applications
3. Add file upload functionality for portfolio samples
4. Implement email verification
5. Add payment processing if needed

## Cost Considerations

Supabase free tier includes:
- Up to 50,000 monthly active users
- 500MB database space
- 1GB file storage
- 2GB bandwidth

This should be more than sufficient for OMAS 2025 registration needs.
