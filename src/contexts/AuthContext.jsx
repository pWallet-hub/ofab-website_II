import { createContext, useContext, useState, useEffect } from 'react';
import { supabase, getProfile, createProfile } from '../lib/supabase';

const AuthContext = createContext({
  user: null,
  profile: null,
  isAuthenticated: false,
  isLoading: true,
  isAdmin: false,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
  resetPassword: () => {},
  loadUserProfile: () => {},
  checkAdminStatus: () => {},
  login: () => {},
  logout: () => {}
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
          setUser(null);
          setProfile(null);
          setIsLoading(false);
          return;
        }

        setUser(session?.user ?? null);

        if (session?.user) {
          await loadUserProfile(session.user.id);
          await checkAdminStatus(session.user.id);
        } else {
          setProfile(null);
          setIsAdmin(false);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error in getInitialSession:', error);
        setUser(null);
        setProfile(null);
        setIsAdmin(false);
        setIsLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        try {
          setUser(session?.user ?? null);

          if (session?.user) {
            await loadUserProfile(session.user.id);
            await checkAdminStatus(session.user.id);
          } else {
            setProfile(null);
            setIsAdmin(false);
          }

          setIsLoading(false);
        } catch (error) {
          console.error('Error in auth state change:', error);
          setIsLoading(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const loadUserProfile = async (userId) => {
    if (!userId) {
      setProfile(null);
      return;
    }

    try {
      const result = await getProfile(userId);
      if (result.success && result.data) {
        setProfile(result.data);
      } else {
        console.warn('Profile not found for user:', userId, result.error);
        // Profile might not exist yet, this is okay
        setProfile(null);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      setProfile(null);
    }
  };

  const checkAdminStatus = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('admin_users')
        .select('role')
        .eq('user_id', userId)
        .single();

      if (!error && data) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    }
  };

  const signUp = async (email, password, userData = {}) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      });

      if (error) throw error;

      // Profile will be created automatically by the database trigger
      // But we can also create it manually if needed
      if (data.user && !data.user.email_confirmed_at) {
        // User needs to confirm email first
        console.log('User created, email confirmation required');
      }

      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });

      if (error) throw error;
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Legacy compatibility
  const login = () => signIn();
  const logout = () => signOut();
  const isAuthenticated = !!user;

  const value = {
    user,
    profile,
    isAuthenticated,
    isLoading,
    isAdmin,
    signUp,
    signIn,
    signOut,
    resetPassword,
    loadUserProfile,
    checkAdminStatus,
    // Legacy compatibility
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
