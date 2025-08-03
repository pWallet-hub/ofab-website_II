// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProtectedRoute.css';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, isAdmin, loading, initialized } = useAuth();
  const location = useLocation();
  const [showTimeout, setShowTimeout] = useState(false);

  useEffect(() => {
    // Set a timeout to show error if auth never initializes
    const timer = setTimeout(() => {
      if (!initialized) {
        setShowTimeout(true);
      }
    }, 15000); // 15 second timeout for slow connections

    return () => clearTimeout(timer);
  }, [initialized]);

  // Reset timeout when auth initializes
  useEffect(() => {
    if (initialized) {
      setShowTimeout(false);
    }
  }, [initialized]);

  // Show timeout error if auth is taking too long
  if (showTimeout && !initialized) {
    return (
      <div className="protected-route-error">
        <div className="error-container">
          <h2>Connection Timeout</h2>
          <p>Authentication is taking longer than expected. This might be due to a slow connection.</p>
          <div className="error-actions">
            <button 
              onClick={() => window.location.reload()} 
              className="retry-button"
            >
              Refresh Page
            </button>
            <button 
              onClick={() => window.location.href = '/login'} 
              className="login-button"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show loading while auth is initializing
  if (loading || !initialized) {
    return (
      <div className="protected-route-loading">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if no user
  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Check admin requirements
  if (requireAdmin && !isAdmin) {
    return (
      <div className="protected-route-error">
        <div className="error-container">
          <h2>Access Denied</h2>
          <p>You don&apos;t have admin privileges to access this page.</p>
          <div className="error-actions">
            <button 
              onClick={() => window.history.back()} 
              className="back-button"
            >
              Go Back
            </button>
            <button 
              onClick={() => window.location.href = '/'} 
              className="home-button"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render protected content
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requireAdmin: PropTypes.bool,
};

export default ProtectedRoute;