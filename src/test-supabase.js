// Test Supabase connection
import { supabase } from './lib/supabase.js';

export const testSupabaseConnection = async () => {
  try {
    console.log('Testing Supabase connection...');
    
    // Test database connection
    const { data, error } = await supabase
      .from('omas_2025_registrations')
      .select('count(*)')
      .limit(1);
    
    if (error) {
      console.error('Database connection failed:', error);
      return false;
    }
    
    console.log('✅ Database connection successful');
    
    // Test storage connection
    const { data: buckets, error: storageError } = await supabase.storage.listBuckets();
    
    if (storageError) {
      console.error('Storage connection failed:', storageError);
      return false;
    }
    
    console.log('✅ Storage connection successful');
    console.log('Available buckets:', buckets.map(b => b.name));
    
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
