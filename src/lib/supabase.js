
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://rmwtuddtiywfzvldpnlc.supabase.co'
const supabaseKey = import.meta.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd3R1ZGR0aXl3Znp2bGRwbmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMjE3MzYsImV4cCI6MjA2OTY5NzczNn0.7SuTlaCFMUYhPqv5loMrcWmrXrmrJn2dGftWli-72Go'

export const supabase = createClient(supabaseUrl, supabaseKey);

//console.log('Supabase Key:', supabaseKey); 
//console.log('Supabase Client:', supabase);



export const checkRegistrationExists = async (email) => {
  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('id')
      .eq('email', email)
      .limit(1);
    if (error) throw error;
    return { exists: !!data.length };
  } catch (error) {
    return { exists: false, error: error.message };
  }
};





export const registerForOMAS2025 = async (data) => {
  try {
    const { data: submission, error } = await supabase
      .from('submissions')
      .insert([data])
      .select()
      .single();
    if (error) throw error;
    return { success: true, data: submission };
  } catch (error) {
    return { success: false, error: error.message };
  }
};


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
