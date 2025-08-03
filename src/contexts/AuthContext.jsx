/* eslint-disable react/prop-types */
// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Get initial session
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        
        if (!isMounted) return;
        
        const newUser = session?.user ?? null;
        setUser(newUser);
        
        if (newUser) {
          console.log('Initial session user:', newUser.email); // Debug
          await checkAdminStatus(newUser.email);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
        setInitialized(true);
      } catch (error) {
        console.error('Error getting session:', error.message);
        if (isMounted) {
          setUser(null);
          setIsAdmin(false);
          setLoading(false);
          setInitialized(true);
        }
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      try {
        console.log('Auth event:', event, 'Session user:', session?.user?.email); // Debug
        
        if (!isMounted) return;
        
        const newUser = session?.user ?? null;
        setUser(newUser);
        
        if (newUser) {
          await checkAdminStatus(newUser.email);
        } else {
          setIsAdmin(false);
        }
        
        // Only set loading to false after the first auth state change
        // This prevents premature redirects during token processing
        if (!initialized) {
          setLoading(false);
          setInitialized(true);
        }
      } catch (error) {
        console.error('Error in auth state change:', error.message);
        if (isMounted) {
          setIsAdmin(false);
          if (!initialized) {
            setLoading(false);
            setInitialized(true);
          }
        }
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [initialized]);

  const checkAdminStatus = async (email) => {
    try {
      console.log('Checking admin status for email:', email); // Debug
      const { data, error } = await supabase
        .from('manager')
        .select('email')
        .eq('email', email)
        .single();
      
      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
        console.error('Admin check error:', error.message);
        setIsAdmin(false);
        return;
      }
      
      const isAdminUser = !!data;
      console.log('Admin check result:', isAdminUser, 'Data:', data); // Debug
      setIsAdmin(isAdminUser);
    } catch (error) {
      console.error('Error checking admin status:', error.message);
      setIsAdmin(false);
    }
  };

  const requestMagicLink = async (email) => {
    try {
      console.log('Requesting magic link for:', email); // Debug
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
          shouldCreateUser: false,
        },
      });
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Magic link error:', error.message);
      throw new Error(`Failed to send magic link: ${error.message}`);
    }
  };

  const logout = async () => {
    try {
      console.log('Logging out'); // Debug
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Logout error:', error.message);
      throw new Error(`Logout failed: ${error.message}`);
    }
  };

  const value = {
    user,
    isAdmin,
    loading,
    initialized,
    requestMagicLink,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};