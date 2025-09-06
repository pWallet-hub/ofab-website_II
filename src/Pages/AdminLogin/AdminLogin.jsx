// src/components/AdminLogin.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './AdminLogin.css';
import {
  FaShieldAlt as Shield,
  FaKey as Key,
  FaExclamationCircle as AlertCircle,
  FaLock as Lock,
  FaCheckCircle as CheckCircle,
} from 'react-icons/fa';

const AdminLogin = () => {
  const { isAuthenticated, loading: authLoading, login, error: authError } = useAuth();
  const [securityKey, setSecurityKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showKey, setShowKey] = useState(false);
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, authLoading, navigate]);

  const handleInputChange = (e) => {
    setSecurityKey(e.target.value);
    if (error || authError) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await login(securityKey);
      
      if (result.success) {
        // Redirect to dashboard on successful login
        navigate('/admin');
      } else {
        setError(result.error || 'Authentication failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowKey = () => {
    setShowKey(!showKey);
  };

  // Show loading while auth is initializing
  if (authLoading) {
    return (
      <div className="admin-login-container">
        <div className="login-background">
          <div className="background-pattern"></div>
        </div>
        <div className="login-card">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-login-container">
      <div className="login-background">
        <div className="background-pattern"></div>
      </div>

      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <Shield className="shield-icon" />
          </div>
          <h1>Admin Dashboard</h1>
          <p>OMAS 2025 Registration Management</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {(error || authError) && (
            <div className="error-alert">
              <AlertCircle className="error-icon" />
              <span>{error || authError}</span>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="securityKey">Security Key</label>
            <div className="input-wrapper">
              <Key className="input-icon" />
              <input
                type={showKey ? 'text' : 'password'}
                id="securityKey"
                name="securityKey"
                value={securityKey}
                onChange={handleInputChange}
                placeholder="Enter admin security key"
                required
                disabled={isLoading}
                autoComplete="off"
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={toggleShowKey}
                disabled={isLoading}
              >
                {showKey ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={isLoading || !securityKey.trim()}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Authenticating...
              </>
            ) : (
              <>
                <CheckCircle className="button-icon" />
                Access Dashboard
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <div className="security-notice">
            <Lock className="security-icon" />
            <span>Secure admin access for OMAS 2025</span>
          </div>
          <div className="demo-credentials">
            <h4>Admin Access:</h4>
            <p>Enter the security key provided by the system administrator</p>
            <p>
              <small>Contact administrator if you need access</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;