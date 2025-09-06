import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import * as XLSX from 'xlsx';
import './AdminDashboard.css';
import {
  FaUsers,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEye,
  FaCheck,
  FaTimes,
  FaClock,
  FaBuilding,
  FaFileAlt,
  FaSignOutAlt,
  FaSyncAlt,
  FaFileExcel,
  FaSortUp,
  FaSortDown,
} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const AdminDashboard = () => {
  const { isAuthenticated, loading: authLoading, logout } = useAuth();
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [sortField, setSortField] = useState('created_at');
  const [sortDirection, setSortDirection] = useState('desc');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, authLoading, navigate]);

  // Load all registration data without authentication filters
  useEffect(() => {
    const loadRegistrations = async () => {
      if (!isAuthenticated) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('submissions')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw new Error(`Failed to load registrations: ${error.message}`);
        setRegistrations(data || []);
      } catch (error) {
        setError(error.message);
        console.error('Error loading registrations:', error);
      } finally {
        setLoading(false);
      }
    };
    loadRegistrations();
  }, [isAuthenticated]);

  useEffect(() => {
    let filtered = registrations;

    if (searchTerm) {
      filtered = filtered.filter((reg) =>
        [
          reg.full_name,
          reg.email,
          reg.organization,
          reg.job_title,
          reg.city,
        ].some((field) => field?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((reg) => reg.registration_status === statusFilter);
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter((reg) => reg.media_category === categoryFilter);
    }

    filtered.sort((a, b) => {
      let aValue = a[sortField] || '';
      let bValue = b[sortField] || '';

      if (sortField === 'created_at') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      return sortDirection === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });

    setFilteredRegistrations(filtered);
  }, [registrations, searchTerm, statusFilter, categoryFilter, sortField, sortDirection]);

  const handleStatusUpdate = async (id, newStatus, notes = '') => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('submissions')
        .update({ registration_status: newStatus, admin_notes: notes })
        .eq('id', id);
      if (error) throw new Error(`Failed to update status: ${error.message}`);
      setRegistrations((prev) =>
        prev.map((reg) =>
          reg.id === id ? { ...reg, registration_status: newStatus, admin_notes: notes } : reg
        )
      );
      if (selectedRegistration && selectedRegistration.id === id) {
        setSelectedRegistration((prev) => ({
          ...prev,
          registration_status: newStatus,
          admin_notes: notes,
        }));
      }
    } catch (error) {
      setError(`Error updating status: ${error.message}`);
    } finally {
      setUpdating(false);
    }
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const mainData = filteredRegistrations.map((reg) => ({
      'Full Name': reg.full_name || '',
      Email: reg.email || '',
      Phone: reg.phone_number || '',
      'Date of Birth': reg.date_of_birth ? new Date(reg.date_of_birth).toLocaleDateString() : '',
      Gender: reg.gender || '',
      'ID/Passport': reg.id_passport || '',
      Organization: reg.organization || '',
      'Organization Address': reg.organization_address || '',
      'Job Title': reg.job_title || '',
      'Years of Experience': reg.years_of_experience || '',
      'Media Category': reg.media_category?.replace('_', ' & ') || '',
      Address: reg.address || '',
      'Story 1': reg.story_1 || '',
      'Story 1 Date': reg.story_1_date ? new Date(reg.story_1_date).toLocaleDateString() : '',
      'Story 1 Summary': reg.story_1_summary || '',
      'Story 1 Motivation': reg.story_1_motivation || '',
      'Story 1 English': reg.story_1_english ? 'Yes' : 'No',
      'Story 1 Transcript': reg.story_1_transcript || '',
      'Story 2': reg.story_2 || '',
      'Story 2 Date': reg.story_2_date ? new Date(reg.story_2_date).toLocaleDateString() : '',
      'Story 2 Summary': reg.story_2_summary || '',
      'Story 2 Motivation': reg.story_2_motivation || '',
      'Story 2 English': reg.story_2_english ? 'Yes' : 'No',
      'Story 2 Transcript': reg.story_2_transcript || '',
      'Story 3': reg.story_3 || '',
      'Story 3 Date': reg.story_3_date ? new Date(reg.story_3_date).toLocaleDateString() : '',
      'Story 3 Summary': reg.story_3_summary || '',
      'Story 3 Motivation': reg.story_3_motivation || '',
      'Story 3 English': reg.story_3_english ? 'Yes' : 'No',
      'Story 3 Transcript': reg.story_3_transcript || '',
      Comments: reg.comments || '',
      'Terms Accepted': reg.terms_accepted ? 'Yes' : 'No',
      'Registration Status': reg.registration_status || 'Pending',
      'Registration Date': new Date(reg.created_at).toLocaleDateString(),
      'Admin Notes': reg.admin_notes || '',
    }));

    const mainSheet = XLSX.utils.json_to_sheet(mainData);
    XLSX.utils.book_append_sheet(workbook, mainSheet, 'Registrations');

    const stats = {
      total: registrations.length,
      pending: registrations.filter((r) => r.registration_status === 'pending').length,
      approved: registrations.filter((r) => r.registration_status === 'approved').length,
      rejected: registrations.filter((r) => r.registration_status === 'rejected').length,
      waitlist: registrations.filter((r) => r.registration_status === 'waitlist').length,
    };

    const summaryData = [
      { Metric: 'Total Applications', Value: stats.total },
      { Metric: 'Pending Review', Value: stats.pending },
      { Metric: 'Approved', Value: stats.approved },
      { Metric: 'Rejected', Value: stats.rejected },
      { Metric: 'Waitlisted', Value: stats.waitlist },
      { Metric: '', Value: '' },
      {
        Metric: 'Print & Online Media',
        Value: registrations.filter((r) => r.media_category === 'print_online').length,
      },
      { Metric: 'Radio', Value: registrations.filter((r) => r.media_category === 'radio').length },
      { Metric: 'Television', Value: registrations.filter((r) => r.media_category === 'television').length },
      { Metric: '', Value: '' },
      { Metric: 'Export Date', Value: new Date().toLocaleDateString() },
      { Metric: 'Export Time', Value: new Date().toLocaleTimeString() },
    ];

    const summarySheet = XLSX.utils.json_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');
    XLSX.writeFile(workbook, `OMAS-2025-Registrations-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const exportToCSV = () => {
    const headers = [
      'Name',
      'Email',
      'Phone',
      'Organization',
      'Job Title',
      'Category',
      'Experience',
      'Address',
      'Status',
      'Registration Date',
      'Story 1',
      'Story 1 Transcript',
      'Story 2',
      'Story 2 Transcript',
      'Story 3',
      'Story 3 Transcript',
    ];

    const csvData = filteredRegistrations.map((reg) => [
      reg.full_name || '',
      reg.email || '',
      reg.phone_number || '',
      reg.organization || '',
      reg.job_title || '',
      reg.media_category?.replace('_', ' & ') || '',
      reg.years_of_experience || '',
      reg.address || '',
      reg.registration_status || 'Pending',
      new Date(reg.created_at).toLocaleDateString(),
      reg.story_1 || '',
      reg.story_1_transcript || '',
      reg.story_2 || '',
      reg.story_2_transcript || '',
      reg.story_3 || '',
      reg.story_3_transcript || '',
    ]);

    const csvContent = [headers, ...csvData]
      .map((row) => row.map((field) => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `omas-2025-registrations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      try {
        const result = logout();
        if (result.success) {
          navigate('/admin/login');
        } else {
          setError(`Logout failed: ${result.error}`);
        }
      } catch (error) {
        setError(`Logout failed: ${error.message}`);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return '#22c55e';
      case 'rejected': return '#ef4444';
      case 'waitlist': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <FaCheck className="status-icon" />;
      case 'rejected': return <FaTimes className="status-icon" />;
      case 'waitlist': return <FaClock className="status-icon" />;
      default: return <FaClock className="status-icon" />;
    }
  };

  const stats = {
    total: registrations.length,
    pending: registrations.filter((r) => r.registration_status === 'pending').length,
    approved: registrations.filter((r) => r.registration_status === 'approved').length,
    rejected: registrations.filter((r) => r.registration_status === 'rejected').length,
    waitlist: registrations.filter((r) => r.registration_status === 'waitlist').length,
  };

  if (authLoading || loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {error && (
        <div className="error-alert">
          <span>{error}</span>
        </div>
      )}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-text">
            <h1>OMAS 2025 Admin Dashboard</h1>
            <p>Manage and review applications for the 4th OFAB Media Awards</p>
          </div>
          <div className="header-actions">
            <button className="refresh-btn" onClick={() => window.location.reload()} disabled={loading}>
              <FaSyncAlt className={`btn-icon ${loading ? 'spinning' : ''}`} />
              Refresh
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt className="btn-icon" />
              Logout
            </button>
          </div>
        </div>

        <div className="stats-grid">
          {[
            { label: 'Total Applications', value: stats.total, color: '#3b82f6' },
            { label: 'Pending Review', value: stats.pending, color: '#f59e0b' },
            { label: 'Approved', value: stats.approved, color: '#22c55e' },
            { label: 'Rejected', value: stats.rejected, color: '#ef4444' },
            { label: 'Waitlisted', value: stats.waitlist, color: '#8b5cf6' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card" style={{ borderColor: stat.color }}>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-controls">
        <div className="search-section">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, email, or organization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <FaFilter className="filter-icon" />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="waitlist">Waitlist</option>
            </select>
          </div>

          <div className="filter-group">
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="print_online">Print & Online</option>
              <option value="radio">Radio</option>
              <option value="television">Television</option>
            </select>
          </div>

          <div className="export-buttons">
            <button className="export-btn excel" onClick={exportToExcel}>
              <FaFileExcel className="btn-icon" />
              Excel
            </button>
            <button className="export-btn csv" onClick={exportToCSV}>
              <FaDownload className="btn-icon" />
              CSV
            </button>
          </div>
        </div>
      </div>

      <div className="registrations-table">
        <div className="table-header">
          <h2>Applications ({filteredRegistrations.length})</h2>
        </div>

        {filteredRegistrations.length === 0 ? (
          <div className="empty-state">
            <FaUsers className="empty-icon" />
            <h3>No registrations found</h3>
            <p>No applications match your current filters.</p>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  {[
                    { field: 'full_name', label: 'Applicant' },
                    { field: 'organization', label: 'Organization' },
                    { field: 'media_category', label: 'Category' },
                    { field: 'years_of_experience', label: 'Experience' },
                    { field: 'registration_status', label: 'Status' },
                    { field: 'created_at', label: 'Date' },
                  ].map(({ field, label }) => (
                    <th
                      key={field}
                      className={`sortable ${sortField === field ? 'active' : ''}`}
                      onClick={() => handleSort(field)}
                    >
                      {label}
                      {sortField === field &&
                        (sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />)}
                    </th>
                  ))}
                  <th>Stories</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.map((registration) => (
                  <tr key={registration.id}>
                    <td>
                      <div className="applicant-info">
                        <div className="applicant-name">{registration.full_name || '-'}</div>
                        <div className="applicant-email">{registration.email || '-'}</div>
                      </div>
                    </td>
                    <td>
                      <div className="organization-info">
                        <div className="org-name">{registration.organization || '-'}</div>
                        <div className="job-title">{registration.job_title || '-'}</div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">{registration.media_category?.replace('_', ' & ') || '-'}</span>
                    </td>
                    <td>{registration.years_of_experience ? `${registration.years_of_experience} years` : '-'}</td>
                    <td>
                      <div
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(registration.registration_status) }}
                      >
                        {getStatusIcon(registration.registration_status)}
                        {registration.registration_status || 'Pending'}
                      </div>
                    </td>
                    <td>{registration.created_at ? new Date(registration.created_at).toLocaleDateString() : '-'}</td>
                    <td>
                      <div className="story-links">
                        {['story_1', 'story_2', 'story_3'].map((story, idx) => (
                          registration[story] && (
                            <div key={idx}>
                              <a href={registration[story]} target="_blank" rel="noopener noreferrer">
                                Story {idx + 1}
                              </a>
                              {!registration[`${story}_english`] && registration[`${story}_transcript`] && (
                                <span>
                                  {' | '}
                                  <a
                                    href={registration[`${story}_transcript`]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Transcript
                                  </a>
                                </span>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn view-btn"
                          onClick={() => {
                            setSelectedRegistration(registration);
                            setShowDetails(true);
                          }}
                          title="View Details"
                        >
                          <FaEye />
                        </button>
                        {registration.registration_status === 'pending' && (
                          <>
                            <button
                              className="action-btn approve-btn"
                              onClick={() => handleStatusUpdate(registration.id, 'approved')}
                              disabled={updating}
                              title="Approve"
                            >
                              <FaCheck />
                            </button>
                            <button
                              className="action-btn reject-btn"
                              onClick={() => handleStatusUpdate(registration.id, 'rejected')}
                              disabled={updating}
                              title="Reject"
                            >
                              <FaTimes />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showDetails && selectedRegistration && (
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="registration-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Application Details</h2>
              <button className="close-btn" onClick={() => setShowDetails(false)}>
                <IoClose />
              </button>
            </div>

            <div className="modal-content">
              <div className="details-grid">
                <div className="detail-section">
                  <h3><FaUsers className="section-icon" /> Personal Information</h3>
                  {[
                    { label: 'Full Name', value: selectedRegistration.full_name },
                    { label: 'Email', value: selectedRegistration.email },
                    { label: 'Phone', value: selectedRegistration.phone_number },
                    { label: 'Gender', value: selectedRegistration.gender },
                    { label: 'ID/Passport', value: selectedRegistration.id_passport },
                    {
                      label: 'Date of Birth',
                      value: selectedRegistration.date_of_birth
                        ? new Date(selectedRegistration.date_of_birth).toLocaleDateString()
                        : '-',
                    },
                  ].map(({ label, value }) => (
                    <div key={label} className="detail-item">
                      <label>{label}:</label>
                      <span>{value || '-'}</span>
                    </div>
                  ))}
                </div>

                <div className="detail-section">
                  <h3><FaBuilding className="section-icon" /> Professional Information</h3>
                  {[
                    { label: 'Organization', value: selectedRegistration.organization },
                    { label: 'Job Title', value: selectedRegistration.job_title },
                    {
                      label: 'Experience',
                      value: selectedRegistration.years_of_experience
                        ? `${selectedRegistration.years_of_experience} years`
                        : '-',
                    },
                    { label: 'Category', value: selectedRegistration.media_category?.replace('_', ' & ') },
                    { label: 'Organization Address', value: selectedRegistration.organization_address },
                  ].map(({ label, value }) => (
                    <div key={label} className="detail-item">
                      <label>{label}:</label>
                      <span>{value || '-'}</span>
                    </div>
                  ))}
                </div>

                <div className="detail-section">
                  <h3><FaFileAlt className="section-icon" /> Additional Information</h3>
                  {selectedRegistration.comments && (
                    <div className="detail-item full-width">
                      <label>Comments:</label>
                      <p>{selectedRegistration.comments}</p>
                    </div>
                  )}
                  {['story_1', 'story_2', 'story_3'].map((story, idx) => (
                    selectedRegistration[story] && (
                      <div key={idx} className="detail-item full-width">
                        <label>Story {idx + 1} Details:</label>
                        <div className="story-details">
                          <p>
                            <strong>Link:</strong>{' '}
                            <a href={selectedRegistration[story]} target="_blank" rel="noopener noreferrer">
                              Story {idx + 1}
                            </a>
                          </p>
                          {selectedRegistration[`${story}_date`] && (
                            <p>
                              <strong>Date:</strong>{' '}
                              {new Date(selectedRegistration[`${story}_date`]).toLocaleDateString()}
                            </p>
                          )}
                          {selectedRegistration[`${story}_summary`] && (
                            <p>
                              <strong>Summary:</strong> {selectedRegistration[`${story}_summary`]}
                            </p>
                          )}
                          {selectedRegistration[`${story}_motivation`] && (
                            <p>
                              <strong>Motivation:</strong> {selectedRegistration[`${story}_motivation`]}
                            </p>
                          )}
                          {!selectedRegistration[`${story}_english`] && selectedRegistration[`${story}_transcript`] && (
                            <p>
                              <strong>Transcript:</strong>{' '}
                              <a
                                href={selectedRegistration[`${story}_transcript`]}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Transcript
                              </a>
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  ))}
                  <div className="detail-item">
                    <label>Terms Accepted:</label>
                    <span>{selectedRegistration.terms_accepted ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>

              <div className="status-update-section">
                <h3>Update Status</h3>
                <div className="status-buttons">
                  {[
                    { status: 'approved', label: 'Approve', icon: <FaCheck />, color: '#22c55e' },
                    { status: 'waitlist', label: 'Waitlist', icon: <FaClock />, color: '#f59e0b' },
                    { status: 'rejected', label: 'Reject', icon: <FaTimes />, color: '#ef4444' },
                  ].map(({ status, label, icon, color }) => (
                    <button
                      key={status}
                      className={`status-btn ${status}`}
                      onClick={() => handleStatusUpdate(selectedRegistration.id, status)}
                      disabled={updating}
                      style={{ backgroundColor: color }}
                    >
                      {icon}
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;