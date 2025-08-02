import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './ProtectedRoute.css';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isLoading, isAdmin } = useAuth();

  if (isLoading) {
    return (
      <div className="protected-route-loading">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Verifying authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="protected-route-loading">
        <div className="loading-container">
          <div className="error-message">
            <h2>Access Denied</h2>
            <p>You don't have admin privileges to access this page.</p>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
