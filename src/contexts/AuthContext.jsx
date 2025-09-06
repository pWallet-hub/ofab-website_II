/* eslint-disable react/prop-types */
// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing authentication on mount
  useEffect(() => {
    const checkAuthState = () => {
      try {
        const authState = sessionStorage.getItem('ofab_admin_authenticated');
        if (authState === 'true') {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthState();
  }, []);

  // Login function with security key validation
  const login = async (securityKey) => {
    try {
      setError(null);
      
      // Get the security key from environment variables
      const adminSecurityKey = import.meta.env.VITE_ADMIN_SECURITY_KEY;
      
      if (!adminSecurityKey) {
        throw new Error('Security key not configured. Please contact administrator.');
      }
      
      // Validate the provided key
      if (securityKey !== adminSecurityKey) {
        throw new Error('Invalid security key. Access denied.');
      }
      
      // Set authentication state
      setIsAuthenticated(true);
      sessionStorage.setItem('ofab_admin_authenticated', 'true');
      
      return { success: true };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    try {
      setIsAuthenticated(false);
      setError(null);
      sessionStorage.removeItem('ofab_admin_authenticated');
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    isAuthenticated,
    loading,
    error,
    login,
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