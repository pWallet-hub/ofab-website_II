import { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import './AuthModal.css';

// eslint-disable-next-line react/prop-types
const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode); // 'login', 'register', 'forgot'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, signUp, resetPassword } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (mode !== 'forgot') {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (mode === 'register' && formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      if (mode === 'register') {
        if (!formData.fullName.trim()) {
          newErrors.fullName = 'Full name is required';
        }
        
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setMessage('');

    try {
      let result;

      switch (mode) {
        case 'login':
          result = await signIn(formData.email, formData.password);
          if (result.success) {
            setMessage('Login successful!');
            setTimeout(() => onClose(), 1000);
          } else {
            setMessage(`Login failed: ${result.error}`);
          }
          break;

        case 'register':
          result = await signUp(formData.email, formData.password, {
            full_name: formData.fullName
          });
          if (result.success) {
            setMessage('Registration successful! Please check your email to verify your account.');
            setTimeout(() => {
              setMode('login');
              setFormData({ email: formData.email, password: '', confirmPassword: '', fullName: '' });
            }, 2000);
          } else {
            setMessage(`Registration failed: ${result.error}`);
          }
          break;

        case 'forgot':
          result = await resetPassword(formData.email);
          if (result.success) {
            setMessage('Password reset email sent! Check your inbox.');
            setTimeout(() => setMode('login'), 2000);
          } else {
            setMessage(`Reset failed: ${result.error}`);
          }
          break;
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setErrors({});
    setMessage('');
    setFormData({ email: formData.email, password: '', confirmPassword: '', fullName: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <div className="auth-modal-header">
          <h2>
            {mode === 'login' && 'Sign In'}
            {mode === 'register' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'register' && (
            <div className="form-group">
              <label htmlFor="fullName">
                <User size={20} />
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={errors.fullName ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">
              <Mail size={20} />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {mode !== 'forgot' && (
            <div className="form-group">
              <label htmlFor="password">
                <Lock size={20} />
                Password
              </label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
          )}

          {mode === 'register' && (
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <Lock size={20} />
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={errors.confirmPassword ? 'error' : ''}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
          )}

          {message && (
            <div className={`message ${message.includes('successful') || message.includes('sent') ? 'success' : 'error'}`}>
              {message}
            </div>
          )}

          <button type="submit" className="auth-submit-btn" disabled={isLoading}>
            {isLoading ? 'Processing...' : (
              <>
                {mode === 'login' && 'Sign In'}
                {mode === 'register' && 'Create Account'}
                {mode === 'forgot' && 'Send Reset Email'}
              </>
            )}
          </button>

          <div className="auth-links">
            {mode === 'login' && (
              <>
                <button type="button" onClick={() => switchMode('forgot')} className="link-btn">
                  Forgot your password?
                </button>
                <p>
                  Don&#39t have an account?{' '}
                  <button type="button" onClick={() => switchMode('register')} className="link-btn">
                    Sign up
                  </button>
                </p>
              </>
            )}

            {mode === 'register' && (
              <p>
                Already have an account?{' '}
                <button type="button" onClick={() => switchMode('login')} className="link-btn">
                  Sign in
                </button>
              </p>
            )}

            {mode === 'forgot' && (
              <p>
                Remember your password?{' '}
                <button type="button" onClick={() => switchMode('login')} className="link-btn">
                  Sign in
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
