// Test Supabase connection
import { supabase } from './lib/supabase.js';

export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...');
    console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('Supabase Key (first 10 chars):', import.meta.env.VITE_SUPABASE_ANON_KEY?.substring(0, 10));

    // Test basic connection
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError && authError.message !== 'Invalid JWT') {
      console.error('Auth connection failed:', authError);
      return false;
    }

    console.log('✅ Auth connection successful');
    console.log('Current user:', user?.id || 'No user logged in');

    // Test profiles table
    try {
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('count(*)')
        .limit(1);

      if (profileError) {
        console.warn('Profiles table not found:', profileError.message);
      } else {
        console.log('✅ Profiles table accessible');
      }
    } catch (error) {
      console.warn('Profiles table test failed:', error.message);
    }

    // Test registrations table
    try {
      const { data: registrations, error: regError } = await supabase
        .from('omas_2025_registrations')
        .select('count(*)')
        .limit(1);

      if (regError) {
        console.warn('Registrations table not found:', regError.message);
      } else {
        console.log('✅ Registrations table accessible');
      }
    } catch (error) {
      console.warn('Registrations table test failed:', error.message);
    }

    // Test storage connection
    try {
      const { data: buckets, error: storageError } = await supabase.storage.listBuckets();

      if (storageError) {
        console.warn('Storage connection failed:', storageError);
      } else {
        console.log('✅ Storage connection successful');
        console.log('Available buckets:', buckets.map(b => b.name));
      }
    } catch (error) {
      console.warn('Storage test failed:', error.message);
    }

    return true;
  } catch (error) {
    console.error('Connection test failed:', error);
    return false;
  }
};

// Run test if this file is executed directly
if (typeof window !== 'undefined') {
  window.testSupabaseConnection = testSupabaseConnection;
}
