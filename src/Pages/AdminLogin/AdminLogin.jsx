// src/components/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './AdminLogin.css';
import {
  FaShieldAlt as Shield,
  FaUser as User,
  FaExclamationCircle as AlertCircle,
  FaEnvelope as Mail,
  FaLock as Lock,
  FaCheckCircle as CheckCircle,
} from 'react-icons/fa';
import { supabase } from '../../lib/supabase';

const AdminLogin = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in as admin
  if (!authLoading && user && isAdmin) {
    navigate('/admin');
    return null;
  }

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSendMagicLink = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
        },
      });

      if (error) throw error;
      
      setMagicLinkSent(true);
    } catch (err) {
      setError(err.message || 'Failed to send magic link. Please try again.');
      console.error('Magic link request error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendMagicLink = async () => {
    setMagicLinkSent(false);
    await handleSendMagicLink({ preventDefault: () => {} });
  };

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

        {!magicLinkSent ? (
          <form onSubmit={handleSendMagicLink} className="login-form">
            {error && (
              <div className="error-alert">
                <AlertCircle className="error-icon" />
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  disabled={isLoading || authLoading}
                />
              </div>
            </div>

            <button
              type="submit"
              className="login-button"
              disabled={isLoading || authLoading || !email}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending Magic Link...
                </>
              ) : (
                <>
                  <Mail className="button-icon" />
                  Send Magic Link
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="magic-link-sent">
            <div className="success-message">
              <CheckCircle className="success-icon" />
              <h3>Magic Link Sent!</h3>
              <p>
                We&apos;ve sent a secure login link to <strong>{email}</strong>
              </p>
              <p>Click the link in your email to access the admin dashboard.</p>
            </div>

            <div className="resend-section">
              <p>Didn&apos;t receive the email?</p>
              <button
                type="button"
                className="resend-button"
                onClick={handleResendMagicLink}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="button-icon" />
                    Resend Magic Link
                  </>
                )}
              </button>
            </div>

            <div className="back-section">
              <button
                type="button"
                className="back-button"
                onClick={() => {
                  setMagicLinkSent(false);
                  setEmail('');
                  setError('');
                }}
              >
                ← Use Different Email
              </button>
            </div>
          </div>
        )}

        <div className="login-footer">
          <div className="security-notice">
            <Lock className="security-icon" />
            <span>Secure admin access for OMAS 2025</span>
          </div>
          <div className="demo-credentials">
            <h4>Admin Access:</h4>
            <p>Enter your email to receive a secure login link</p>
            <p>
              <small>Contact system administrator for access</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;