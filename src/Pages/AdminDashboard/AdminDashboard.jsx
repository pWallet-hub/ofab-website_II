import { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { getAllRegistrations, updateRegistrationStatus } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import * as XLSX from 'xlsx';
import {
  FaUsers as Users,
  FaSearch as Search,
  FaFilter as Filter,
  FaDownload as Download,
  FaEye as Eye,
  FaCheck as Check,
  FaTimes as X,
  FaClock as Clock,
  FaBuilding as Building,
  FaFileAlt as FileText,
  FaSignOutAlt as LogOut,
  FaSyncAlt as RefreshCw,
  FaFileExcel as FileSpreadsheet,
  FaSortUp as SortAsc,
  FaSortDown as SortDesc
} from 'react-icons/fa';

const AdminDashboard = () => {
  const { logout } = useAuth();
  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [sortField, setSortField] = useState('created_at');
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    loadRegistrations();
  }, []);

  useEffect(() => {
    filterRegistrations();
  }, [registrations, searchTerm, statusFilter, categoryFilter]);

  const loadRegistrations = async () => {
    setLoading(true);
    try {
      const result = await getAllRegistrations();
      if (result.success) {
        setRegistrations(result.data);
      } else {
        console.error('Failed to load registrations:', result.error);
      }
    } catch (error) {
      console.error('Error loading registrations:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterRegistrations = () => {
    let filtered = registrations;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(reg =>
        reg.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(reg => reg.registration_status === statusFilter);
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(reg => reg.media_category === categoryFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortField === 'created_at') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredRegistrations(filtered);
  };

  const handleStatusUpdate = async (id, newStatus, notes = '') => {
    setUpdating(true);
    try {
      const result = await updateRegistrationStatus(id, newStatus, notes);
      if (result.success) {
        // Update local state
        setRegistrations(prev => 
          prev.map(reg => 
            reg.id === id 
              ? { ...reg, registration_status: newStatus, admin_notes: notes }
              : reg
          )
        );
        
        if (selectedRegistration && selectedRegistration.id === id) {
          setSelectedRegistration(prev => ({
            ...prev,
            registration_status: newStatus,
            admin_notes: notes
          }));
        }
      } else {
        alert('Failed to update status: ' + result.error);
      }
    } catch (error) {
      alert('Error updating status: ' + error.message);
    } finally {
      setUpdating(false);
    }
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();

    // Main registrations sheet
    const mainData = filteredRegistrations.map(reg => ({
      'Full Name': reg.full_name,
      'Email': reg.email,
      'Phone': reg.phone_number,
      'Date of Birth': reg.date_of_birth ? new Date(reg.date_of_birth).toLocaleDateString() : '',
      'Gender': reg.gender || '',
      'Organization': reg.organization,
      'Job Title': reg.job_title,
      'Years of Experience': reg.years_of_experience,
      'Media Category': reg.media_category.replace('_', ' & '),
      'Country': reg.country,
      'City': reg.city,
      'Address': reg.address || '',
      'Portfolio Links': reg.portfolio_links ? reg.portfolio_links.join('; ') : '',
      'Professional Bio': reg.bio || '',
      'Previous OMAS Participant': reg.previous_omas_participant ? 'Yes' : 'No',
      'Dietary Requirements': reg.dietary_requirements || '',
      'Accessibility Needs': reg.accessibility_needs || '',
      'How Did You Hear': reg.how_did_you_hear || '',
      'Expectations': reg.expectations || '',
      'Additional Comments': reg.additional_comments || '',
      'Terms Accepted': reg.terms_accepted ? 'Yes' : 'No',
      'Marketing Consent': reg.marketing_consent ? 'Yes' : 'No',
      'Registration Status': reg.registration_status,
      'Registration Date': new Date(reg.created_at).toLocaleDateString(),
      'Admin Notes': reg.admin_notes || ''
    }));

    const mainSheet = XLSX.utils.json_to_sheet(mainData);
    XLSX.utils.book_append_sheet(workbook, mainSheet, 'Registrations');

    // Summary sheet
    const summaryData = [
      { Metric: 'Total Applications', Value: stats.total },
      { Metric: 'Pending Review', Value: stats.pending },
      { Metric: 'Approved', Value: stats.approved },
      { Metric: 'Rejected', Value: stats.rejected },
      { Metric: 'Waitlisted', Value: stats.waitlist },
      { Metric: '', Value: '' },
      { Metric: 'Print & Online Media', Value: registrations.filter(r => r.media_category === 'print_online').length },
      { Metric: 'Radio', Value: registrations.filter(r => r.media_category === 'radio').length },
      { Metric: 'Television', Value: registrations.filter(r => r.media_category === 'television').length },
      { Metric: '', Value: '' },
      { Metric: 'Export Date', Value: new Date().toLocaleDateString() },
      { Metric: 'Export Time', Value: new Date().toLocaleTimeString() }
    ];

    const summarySheet = XLSX.utils.json_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');

    // Write file
    XLSX.writeFile(workbook, `OMAS-2025-Registrations-${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  const exportToCSV = () => {
    const headers = [
      'Name', 'Email', 'Phone', 'Organization', 'Job Title', 'Category',
      'Experience', 'City', 'Status', 'Registration Date'
    ];

    const csvData = filteredRegistrations.map(reg => [
      reg.full_name,
      reg.email,
      reg.phone_number,
      reg.organization,
      reg.job_title,
      reg.media_category.replace('_', ' & '),
      reg.years_of_experience,
      reg.city,
      reg.registration_status,
      new Date(reg.created_at).toLocaleDateString()
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
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

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return '#10b981';
      case 'rejected': return '#ef4444';
      case 'waitlist': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <Check className="status-icon" />;
      case 'rejected': return <X className="status-icon" />;
      case 'waitlist': return <Clock className="status-icon" />;
      default: return <Clock className="status-icon" />;
    }
  };

  const stats = {
    total: registrations.length,
    pending: registrations.filter(r => r.registration_status === 'pending').length,
    approved: registrations.filter(r => r.registration_status === 'approved').length,
    rejected: registrations.filter(r => r.registration_status === 'rejected').length,
    waitlist: registrations.filter(r => r.registration_status === 'waitlist').length
  };

  if (loading) {
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
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-text">
            <h1>OMAS 2025 - Registration Dashboard</h1>
            <p>Manage and review applications for the 4th OFAB Media Awards</p>
          </div>
          <div className="header-actions">
            <button className="refresh-btn" onClick={loadRegistrations} disabled={loading}>
              <RefreshCw className={`btn-icon ${loading ? 'spinning' : ''}`} />
              Refresh
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut className="btn-icon" />
              Logout
            </button>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Applications</div>
          </div>
          <div className="stat-card pending">
            <div className="stat-number">{stats.pending}</div>
            <div className="stat-label">Pending Review</div>
          </div>
          <div className="stat-card approved">
            <div className="stat-number">{stats.approved}</div>
            <div className="stat-label">Approved</div>
          </div>
          <div className="stat-card rejected">
            <div className="stat-number">{stats.rejected}</div>
            <div className="stat-label">Rejected</div>
          </div>
          <div className="stat-card waitlist">
            <div className="stat-number">{stats.waitlist}</div>
            <div className="stat-label">Waitlisted</div>
          </div>
        </div>
      </div>

      <div className="dashboard-controls">
        <div className="search-section">
          <div className="search-box">
            <Search className="search-icon" />
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
            <Filter className="filter-icon" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="waitlist">Waitlist</option>
            </select>
          </div>

          <div className="filter-group">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="print_online">Print & Online</option>
              <option value="radio">Radio</option>
              <option value="television">Television</option>
            </select>
          </div>

          <div className="export-buttons">
            <button className="export-btn excel" onClick={exportToExcel}>
              <FileSpreadsheet className="btn-icon" />
              Export Excel
            </button>
            <button className="export-btn csv" onClick={exportToCSV}>
              <Download className="btn-icon" />
              Export CSV
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
            <Users className="empty-icon" />
            <h3>No registrations found</h3>
            <p>No applications match your current filters.</p>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th
                    className={`sortable ${sortField === 'full_name' ? 'active' : ''}`}
                    onClick={() => handleSort('full_name')}
                  >
                    Applicant
                    {sortField === 'full_name' && (
                      sortDirection === 'asc' ? <SortAsc className="sort-icon" /> : <SortDesc className="sort-icon" />
                    )}
                  </th>
                  <th
                    className={`sortable ${sortField === 'organization' ? 'active' : ''}`}
                    onClick={() => handleSort('organization')}
                  >
                    Organization
                    {sortField === 'organization' && (
                      sortDirection === 'asc' ? <SortAsc className="sort-icon" /> : <SortDesc className="sort-icon" />
                    )}
                  </th>
                  <th
                    className={`sortable ${sortField === 'media_category' ? 'active' : ''}`}
                    onClick={() => handleSort('media_category')}
                  >
                    Category
                    {sortField === 'media_category' && (
                      sortDirection === 'asc' ? <SortAsc className="sort-icon" /> : <SortDesc className="sort-icon" />
                    )}
                  </th>
                  <th
                    className={`sortable ${sortField === 'years_of_experience' ? 'active' : ''}`}
                    onClick={() => handleSort('years_of_experience')}
                  >
                    Experience
                    {sortField === 'years_of_experience' && (
                      sortDirection === 'asc' ? <SortAsc className="sort-icon" /> : <SortDesc className="sort-icon" />
                    )}
                  </th>
                  <th
                    className={`sortable ${sortField === 'registration_status' ? 'active' : ''}`}
                    onClick={() => handleSort('registration_status')}
                  >
                    Status
                    {sortField === 'registration_status' && (
                      sortDirection === 'asc' ? <SortAsc className="sort-icon" /> : <SortDesc className="sort-icon" />
                    )}
                  </th>
                  <th
                    className={`sortable ${sortField === 'created_at' ? 'active' : ''}`}
                    onClick={() => handleSort('created_at')}
                  >
                    Date
                    {sortField === 'created_at' && (
                      sortDirection === 'asc' ? <SortAsc className="sort-icon" /> : <SortDesc className="sort-icon" />
                    )}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.map((registration) => (
                  <tr key={registration.id}>
                    <td>
                      <div className="applicant-info">
                        <div className="applicant-name">{registration.full_name}</div>
                        <div className="applicant-email">{registration.email}</div>
                      </div>
                    </td>
                    <td>
                      <div className="organization-info">
                        <div className="org-name">{registration.organization}</div>
                        <div className="job-title">{registration.job_title}</div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">
                        {registration.media_category.replace('_', ' & ')}
                      </span>
                    </td>
                    <td>{registration.years_of_experience} years</td>
                    <td>
                      <div 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(registration.registration_status) }}
                      >
                        {getStatusIcon(registration.registration_status)}
                        {registration.registration_status}
                      </div>
                    </td>
                    <td>{new Date(registration.created_at).toLocaleDateString()}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="view-btn"
                          onClick={() => {
                            setSelectedRegistration(registration);
                            setShowDetails(true);
                          }}
                        >
                          <Eye className="btn-icon" />
                        </button>
                        
                        {registration.registration_status === 'pending' && (
                          <>
                            <button
                              className="approve-btn"
                              onClick={() => handleStatusUpdate(registration.id, 'approved')}
                              disabled={updating}
                            >
                              <Check className="btn-icon" />
                            </button>
                            <button
                              className="reject-btn"
                              onClick={() => handleStatusUpdate(registration.id, 'rejected')}
                              disabled={updating}
                            >
                              <X className="btn-icon" />
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

      {/* Registration Details Modal */}
      {showDetails && selectedRegistration && (
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="registration-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Application Details</h2>
              <button 
                className="close-btn"
                onClick={() => setShowDetails(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="details-grid">
                <div className="detail-section">
                  <h3><Users className="section-icon" /> Personal Information</h3>
                  <div className="detail-item">
                    <label>Full Name:</label>
                    <span>{selectedRegistration.full_name}</span>
                  </div>
                  <div className="detail-item">
                    <label>Email:</label>
                    <span>{selectedRegistration.email}</span>
                  </div>
                  <div className="detail-item">
                    <label>Phone:</label>
                    <span>{selectedRegistration.phone_number}</span>
                  </div>
                  <div className="detail-item">
                    <label>Gender:</label>
                    <span>{selectedRegistration.gender}</span>
                  </div>
                  {selectedRegistration.date_of_birth && (
                    <div className="detail-item">
                      <label>Date of Birth:</label>
                      <span>{new Date(selectedRegistration.date_of_birth).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <div className="detail-section">
                  <h3><Building className="section-icon" /> Professional Information</h3>
                  <div className="detail-item">
                    <label>Organization:</label>
                    <span>{selectedRegistration.organization}</span>
                  </div>
                  <div className="detail-item">
                    <label>Job Title:</label>
                    <span>{selectedRegistration.job_title}</span>
                  </div>
                  <div className="detail-item">
                    <label>Experience:</label>
                    <span>{selectedRegistration.years_of_experience} years</span>
                  </div>
                  <div className="detail-item">
                    <label>Category:</label>
                    <span>{selectedRegistration.media_category.replace('_', ' & ')}</span>
                  </div>
                </div>

                <div className="detail-section">
                  <h3><FileText className="section-icon" /> Additional Information</h3>
                  {selectedRegistration.bio && (
                    <div className="detail-item full-width">
                      <label>Professional Bio:</label>
                      <p>{selectedRegistration.bio}</p>
                    </div>
                  )}
                  {selectedRegistration.portfolio_links && selectedRegistration.portfolio_links.length > 0 && (
                    <div className="detail-item full-width">
                      <label>Portfolio Links:</label>
                      <ul>
                        {selectedRegistration.portfolio_links.map((link, index) => (
                          <li key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedRegistration.expectations && (
                    <div className="detail-item full-width">
                      <label>Expectations:</label>
                      <p>{selectedRegistration.expectations}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="status-update-section">
                <h3>Update Status</h3>
                <div className="status-buttons">
                  <button
                    className="status-btn approve"
                    onClick={() => handleStatusUpdate(selectedRegistration.id, 'approved')}
                    disabled={updating}
                  >
                    <Check className="btn-icon" />
                    Approve
                  </button>
                  <button
                    className="status-btn waitlist"
                    onClick={() => handleStatusUpdate(selectedRegistration.id, 'waitlist')}
                    disabled={updating}
                  >
                    <Clock className="btn-icon" />
                    Waitlist
                  </button>
                  <button
                    className="status-btn reject"
                    onClick={() => handleStatusUpdate(selectedRegistration.id, 'rejected')}
                    disabled={updating}
                  >
                    <X className="btn-icon" />
                    Reject
                  </button>
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
