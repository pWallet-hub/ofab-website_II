import { createClient } from '@supabase/supabase-js'

// These should be environment variables in a real application
// For now, using placeholder values - you'll need to replace these with your actual Supabase credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table structure for OMAS 2025 registrations
/*
CREATE TABLE omas_2025_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Personal Information
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone_number TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other', 'prefer_not_to_say')),
  
  -- Professional Information
  organization TEXT NOT NULL,
  job_title TEXT NOT NULL,
  years_of_experience INTEGER,
  media_category TEXT NOT NULL CHECK (media_category IN ('print_online', 'radio', 'television')),
  
  -- Address Information
  country TEXT NOT NULL DEFAULT 'Rwanda',
  city TEXT NOT NULL,
  address TEXT,
  
  -- Portfolio/Work Samples
  portfolio_links TEXT[], -- Array of URLs to work samples
  bio TEXT, -- Professional bio
  
  -- Event-specific Information
  previous_omas_participant BOOLEAN DEFAULT false,
  dietary_requirements TEXT,
  accessibility_needs TEXT,
  
  -- Registration Status
  registration_status TEXT DEFAULT 'pending' CHECK (registration_status IN ('pending', 'approved', 'rejected', 'waitlist')),
  payment_status TEXT DEFAULT 'not_required' CHECK (payment_status IN ('not_required', 'pending', 'completed')),
  
  -- Additional fields
  how_did_you_hear TEXT,
  expectations TEXT,
  additional_comments TEXT,
  
  -- Consent and agreements
  terms_accepted BOOLEAN DEFAULT false NOT NULL,
  marketing_consent BOOLEAN DEFAULT false,
  
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
*/

// File upload function
export const uploadFile = async (file, fileName, folder = '') => {
  try {
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    const { error } = await supabase.storage
      .from('omas-2025-documents')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('omas-2025-documents')
      .getPublicUrl(filePath);

    return { success: true, url: publicUrl, path: filePath };
  } catch (error) {
    console.error('File upload error:', error);
    return { success: false, error: error.message };
  }
};

// Upload multiple files
export const uploadMultipleFiles = async (files, folder = '') => {
  try {
    const uploadPromises = Array.from(files).map(async (file, index) => {
      const timestamp = Date.now();
      const fileName = `${timestamp}_${index}_${file.name}`;
      return uploadFile(file, fileName, folder);
    });

    const results = await Promise.all(uploadPromises);
    const successfulUploads = results.filter(result => result.success);
    const failedUploads = results.filter(result => !result.success);

    return {
      success: failedUploads.length === 0,
      urls: successfulUploads.map(result => result.url),
      paths: successfulUploads.map(result => result.path),
      errors: failedUploads.map(result => result.error)
    };
  } catch (error) {
    console.error('Multiple file upload error:', error);
    return { success: false, error: error.message };
  }
};

// Registration functions
export const registerForOMAS2025 = async (registrationData) => {
  try {
    const { data, error } = await supabase
      .from('omas_2025_registrations')
      .insert([registrationData])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error: error.message }
  }
}

export const getRegistrationByEmail = async (email) => {
  try {
    const { data, error } = await supabase
      .from('omas_2025_registrations')
      .select('*')
      .eq('email', email)
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Get registration error:', error)
    return { success: false, error: error.message }
  }
}

export const updateRegistration = async (id, updates) => {
  try {
    const { data, error } = await supabase
      .from('omas_2025_registrations')
      .update(updates)
      .eq('id', id)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Update registration error:', error)
    return { success: false, error: error.message }
  }
}

// Profile management functions
export const createProfile = async (userId, email, fullName) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .insert([{
        user_id: userId,
        email: email,
        full_name: fullName
      }])
      .select()
      .single();

    if (error) {
      // If profiles table doesn't exist, return gracefully
      if (error.message.includes('relation "profiles" does not exist')) {
        console.warn('Profiles table does not exist. Please run the database setup.');
        return { success: false, error: 'Profiles table not found' };
      }
      throw error;
    }
    return { success: true, data };
  } catch (error) {
    console.error('Profile creation error:', error);
    return { success: false, error: error.message };
  }
};

export const getProfile = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      // If profiles table doesn't exist or profile not found, return null gracefully
      if (error.code === 'PGRST116' || error.message.includes('relation "profiles" does not exist')) {
        return { success: true, data: null };
      }
      throw error;
    }
    return { success: true, data };
  } catch (error) {
    console.error('Profile fetch error:', error);
    return { success: false, error: error.message };
  }
};

export const updateProfile = async (userId, updates) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Profile update error:', error);
    return { success: false, error: error.message };
  }
};

// Check if user already has a registration
export const checkRegistrationExists = async (userId = null, email = null) => {
  try {
    let query = supabase
      .from('omas_2025_registrations')
      .select('id');

    // Check by user_id if provided and user is authenticated
    if (userId) {
      query = query.eq('user_id', userId);
    }
    // Otherwise check by email
    else if (email) {
      query = query.eq('email', email);
    } else {
      throw new Error('Either userId or email must be provided');
    }

    const { data, error } = await query.single();

    if (error && error.code !== 'PGRST116') throw error // PGRST116 is "not found"
    return { exists: !!data, data }
  } catch (error) {
    console.error('Registration check error:', error)
    return { exists: false, error: error.message }
  }
}

// Admin functions (require proper authentication)
export const getAllRegistrations = async () => {
  try {
    const { data, error } = await supabase
      .from('omas_2025_registrations')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Get all registrations error:', error)
    return { success: false, error: error.message }
  }
}

export const updateRegistrationStatus = async (id, status, adminNotes = '') => {
  try {
    const { data, error } = await supabase
      .from('omas_2025_registrations')
      .update({
        registration_status: status,
        admin_notes: adminNotes,
        reviewed_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Update status error:', error)
    return { success: false, error: error.message }
  }
}
