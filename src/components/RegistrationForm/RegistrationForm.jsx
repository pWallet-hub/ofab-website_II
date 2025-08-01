import { useState } from 'react';
import './RegistrationForm.css';
import { registerForOMAS2025, checkRegistrationExists, uploadFile, uploadMultipleFiles } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from '../AuthModal/AuthModal';
import { FaUser as User, FaBriefcase as Briefcase, FaMapMarkerAlt as MapPin, FaFileAlt as FileText } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({ onClose, onSuccess }) => {
  const { user, profile, isAuthenticated } = useAuth();
  const [formData, setFormData] = useState({
    // Personal Information (from profile or user)
    full_name: profile?.full_name || user?.user_metadata?.full_name || '',
    email: profile?.email || user?.email || '',
    phone_number: '',
    date_of_birth: '',
    gender: '',
    national_id: '',
    passport_number: '',
    passport_image: null,
    id_document: null,

    // Professional Information
    organization: '',
    organization_address: '',
    job_title: '',
    years_of_experience: '',
    media_category: '',

    // Address Information
    country: 'Rwanda',
    city: '',
    address: '',

    // Story Submissions
    story_1_link: '',
    story_1_date: '',
    story_1_summary: '',
    story_1_motivation: '',
    story_1_english: true,
    story_1_transcript: null,

    story_2_link: '',
    story_2_date: '',
    story_2_summary: '',
    story_2_motivation: '',
    story_2_english: true,
    story_2_transcript: null,

    story_3_link: '',
    story_3_date: '',
    story_3_summary: '',
    story_3_motivation: '',
    story_3_english: true,
    story_3_transcript: null,

    // Portfolio/Work
    portfolio_links: '',
    bio: '',

    // Additional Documents
    cv_document: null,
    portfolio_document: null,
    additional_documents: null,

    // Event-specific
    previous_omas_participant: false,
    dietary_requirements: '',
    accessibility_needs: '',

    // Additional
    how_did_you_hear: '',
    expectations: '',
    additional_comments: '',

    // Consent
    terms_accepted: false,
    marketing_consent: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const totalSteps = 7;

  // Helper function to render file upload status
  const renderFileStatus = (fieldName, file) => {
    if (!file) return null;

    if (fieldName === 'additional_documents' && file.length > 0) {
      return (
        <div className="file-upload-status success">
          <div className="multiple-files-info">
            <span className="file-count">{file.length}</span> file(s) selected:
            {Array.from(file).map((f, index) => (
              <div key={index}>• {f.name} ({(f.size / 1024 / 1024).toFixed(2)} MB)</div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="file-upload-status success">
        ✓ {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
      </div>
    );
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      // Handle file uploads with validation
      const file = files[0];
      if (file) {
        // File size validation (5MB for most files, 10MB for portfolio)
        const maxSize = name === 'portfolio_document' ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
        if (file.size > maxSize) {
          setErrors(prev => ({
            ...prev,
            [name]: `File size must be less than ${name === 'portfolio_document' ? '10MB' : '5MB'}`
          }));
          return;
        }

        // File type validation
        const allowedTypes = {
          passport_image: ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'],
          id_document: ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'],
          cv_document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
          portfolio_document: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png'],
          additional_documents: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png'],
          story_1_transcript: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png'],
          story_2_transcript: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png'],
          story_3_transcript: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png']
        };

        if (allowedTypes[name] && !allowedTypes[name].includes(file.type)) {
          setErrors(prev => ({
            ...prev,
            [name]: 'Invalid file type. Please check the accepted formats.'
          }));
          return;
        }
      }

      setFormData(prev => ({
        ...prev,
        [name]: name === 'additional_documents' ? files : file
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }

    // Clear error when user starts typing/uploading
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1: // Personal Information
        if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of birth is required';
        break;

      case 2: // Career Information
        if (!formData.organization.trim()) newErrors.organization = 'Media house is required';
        if (!formData.organization_address.trim()) newErrors.organization_address = 'Media house address is required';
        if (!formData.media_category) newErrors.media_category = 'Contest category is required';
        break;

      case 3: // Address Information
        if (!formData.address.trim()) newErrors.address = 'Physical address is required';
        break;

      case 4: // Additional Documents (Optional - no validation required)
        break;

      case 5: // Story 1
        if (!formData.story_1_link.trim()) newErrors.story_1_link = '1st story link is required';
        if (!formData.story_1_date) newErrors.story_1_date = 'Publication date is required';
        if (!formData.story_1_summary.trim()) newErrors.story_1_summary = 'Story summary is required';
        if (!formData.story_1_motivation.trim()) newErrors.story_1_motivation = 'Story motivation is required';
        break;

      case 6: // Stories 2 & 3
        if (!formData.story_2_link.trim()) newErrors.story_2_link = '2nd story link is required';
        if (!formData.story_2_date) newErrors.story_2_date = 'Publication date is required';
        if (!formData.story_2_summary.trim()) newErrors.story_2_summary = 'Story summary is required';
        if (!formData.story_2_motivation.trim()) newErrors.story_2_motivation = 'Story motivation is required';
        if (!formData.story_3_link.trim()) newErrors.story_3_link = '3rd story link is required';
        if (!formData.story_3_date) newErrors.story_3_date = 'Publication date is required';
        if (!formData.story_3_summary.trim()) newErrors.story_3_summary = 'Story summary is required';
        if (!formData.story_3_motivation.trim()) newErrors.story_3_motivation = 'Story motivation is required';
        break;

      case 7: // Final Details & Consent
        if (!formData.terms_accepted) newErrors.terms_accepted = 'You must accept the terms and conditions';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is authenticated
    if (!isAuthenticated || !user) {
      setShowAuthModal(true);
      return;
    }

    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Check if user already has a registration
      const registrationCheck = await checkRegistrationExists(user.id);
      if (registrationCheck.exists) {
        setSubmitMessage('You have already registered for OMAS 2025. You can only submit one registration per account.');
        setIsSubmitting(false);
        return;
      }

      // Upload files first
      setSubmitMessage('Uploading files...');
      const fileUploads = {};

      // Upload single files
      const singleFileFields = [
        'passport_image', 'id_document', 'cv_document', 'portfolio_document',
        'story_1_transcript', 'story_2_transcript', 'story_3_transcript'
      ];

      for (const field of singleFileFields) {
        if (formData[field]) {
          const timestamp = Date.now();
          const fileName = `${timestamp}_${formData[field].name}`;
          const result = await uploadFile(formData[field], fileName, field.split('_')[0]);

          if (result.success) {
            fileUploads[`${field}_url`] = result.url;
          } else {
            throw new Error(`Failed to upload ${field}: ${result.error}`);
          }
        }
      }

      // Upload multiple files (additional_documents)
      if (formData.additional_documents && formData.additional_documents.length > 0) {
        const result = await uploadMultipleFiles(formData.additional_documents, 'additional');

        if (result.success) {
          fileUploads.additional_documents_urls = result.urls;
        } else {
          throw new Error(`Failed to upload additional documents: ${result.errors.join(', ')}`);
        }
      }

      setSubmitMessage('Saving registration data...');

      // Prepare data for submission
      const submissionData = {
        ...formData,
        ...fileUploads,
        user_id: user.id,
        portfolio_links: formData.portfolio_links ? formData.portfolio_links.split('\n').filter(link => link.trim()) : [],
        years_of_experience: parseInt(formData.years_of_experience) || 0,
        registration_status: 'pending'
      };

      const result = await registerForOMAS2025(submissionData);

      if (result.success) {
        setSubmitMessage('Registration successful! You will receive a confirmation email shortly.');
        if (onSuccess) onSuccess(result.data);
        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
      } else {
        setSubmitMessage(`Registration failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitMessage(`An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step">
            <h3><User className="step-icon" /> Personal Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="full_name">Full Name *</label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  className={errors.full_name ? 'error' : ''}
                />
                {errors.full_name && <span className="error-message">{errors.full_name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="readonly-field"
                  title="Email is linked to your account and cannot be changed"
                />
                <small className="field-note">Email is linked to your account</small>
              </div>

              <div className="form-group">
                <label htmlFor="phone_number">Phone Number *</label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className={errors.phone_number ? 'error' : ''}
                />
                {errors.phone_number && <span className="error-message">{errors.phone_number}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="date_of_birth">Date of Birth *</label>
                <input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  className={errors.date_of_birth ? 'error' : ''}
                />
                {errors.date_of_birth && <span className="error-message">{errors.date_of_birth}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={errors.gender ? 'error' : ''}
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
                {errors.gender && <span className="error-message">{errors.gender}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="national_id">National ID</label>
                <input
                  type="text"
                  id="national_id"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="passport_number">Passport Number</label>
                <input
                  type="text"
                  id="passport_number"
                  name="passport_number"
                  value={formData.passport_number}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="passport_image">Upload Passport Image (Optional)</label>
                <input
                  type="file"
                  id="passport_image"
                  name="passport_image"
                  onChange={handleInputChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  className={errors.passport_image ? 'error' : ''}
                />
                <small className="file-help">Accepted formats: JPG, PNG, PDF (Max 5MB)</small>
                {errors.passport_image && <span className="error-message">{errors.passport_image}</span>}
                {renderFileStatus('passport_image', formData.passport_image)}
              </div>

              <div className="form-group full-width">
                <label htmlFor="id_document">Upload National ID/Other ID Document (Optional)</label>
                <input
                  type="file"
                  id="id_document"
                  name="id_document"
                  onChange={handleInputChange}
                  accept=".jpg,.jpeg,.png,.pdf"
                  className={errors.id_document ? 'error' : ''}
                />
                <small className="file-help">Accepted formats: JPG, PNG, PDF (Max 5MB)</small>
                {errors.id_document && <span className="error-message">{errors.id_document}</span>}
                {renderFileStatus('id_document', formData.id_document)}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="form-step">
            <h3><Briefcase className="step-icon" /> Career Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="organization">Media House *</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className={errors.organization ? 'error' : ''}
                />
                {errors.organization && <span className="error-message">{errors.organization}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="organization_address">Media House Address *</label>
                <input
                  type="text"
                  id="organization_address"
                  name="organization_address"
                  value={formData.organization_address}
                  onChange={handleInputChange}
                  className={errors.organization_address ? 'error' : ''}
                />
                {errors.organization_address && <span className="error-message">{errors.organization_address}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="media_category">Contest Category *</label>
                <select
                  id="media_category"
                  name="media_category"
                  value={formData.media_category}
                  onChange={handleInputChange}
                  className={errors.media_category ? 'error' : ''}
                >
                  <option value="">Select Category</option>
                  <option value="print_media">Print Media (Newspapers, Magazines)</option>
                  <option value="radio">Radio</option>
                  <option value="television">Television</option>
                  <option value="digital_online">Digital/Online Media</option>
                </select>
                {errors.media_category && <span className="error-message">{errors.media_category}</span>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="form-step">
            <h3><MapPin className="step-icon" /> Contact Information</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="address">Physical Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={errors.address ? 'error' : ''}
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="form-step">
            <h3><FileText className="step-icon" /> Additional Documents</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="cv_document">Upload CV/Resume (Optional)</label>
                <input
                  type="file"
                  id="cv_document"
                  name="cv_document"
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx"
                  className={errors.cv_document ? 'error' : ''}
                />
                <small className="file-help">Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                {errors.cv_document && <span className="error-message">{errors.cv_document}</span>}
                {renderFileStatus('cv_document', formData.cv_document)}
              </div>

              <div className="form-group full-width">
                <label htmlFor="portfolio_document">Upload Portfolio Document (Optional)</label>
                <input
                  type="file"
                  id="portfolio_document"
                  name="portfolio_document"
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  className={errors.portfolio_document ? 'error' : ''}
                />
                <small className="file-help">Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</small>
                {errors.portfolio_document && <span className="error-message">{errors.portfolio_document}</span>}
                {renderFileStatus('portfolio_document', formData.portfolio_document)}
              </div>

              <div className="form-group full-width">
                <label htmlFor="additional_documents">Upload Additional Supporting Documents (Optional)</label>
                <input
                  type="file"
                  id="additional_documents"
                  name="additional_documents"
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  multiple
                  className={errors.additional_documents ? 'error' : ''}
                />
                <small className="file-help">You can select multiple files. Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB each)</small>
                {errors.additional_documents && <span className="error-message">{errors.additional_documents}</span>}
                {renderFileStatus('additional_documents', formData.additional_documents)}
              </div>

              <div className="document-info">
                <h4>📄 Document Guidelines:</h4>
                <ul>
                  <li><strong>CV/Resume:</strong> Your professional background and experience</li>
                  <li><strong>Portfolio:</strong> Collection of your best work samples</li>
                  <li><strong>Supporting Documents:</strong> Awards, certificates, recommendations, etc.</li>
                  <li><strong>File Size:</strong> Keep individual files under 5MB for faster upload</li>
                  <li><strong>Quality:</strong> Ensure documents are clear and readable</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="form-step">
            <h3><FileText className="step-icon" /> Your Entry - Story 1</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="story_1_link">1st Story Link *</label>
                <input
                  type="url"
                  id="story_1_link"
                  name="story_1_link"
                  value={formData.story_1_link}
                  onChange={handleInputChange}
                  className={errors.story_1_link ? 'error' : ''}
                  placeholder="https://example.com/your-story"
                />
                {errors.story_1_link && <span className="error-message">{errors.story_1_link}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="story_1_date">Date of Publication *</label>
                <input
                  type="date"
                  id="story_1_date"
                  name="story_1_date"
                  value={formData.story_1_date}
                  onChange={handleInputChange}
                  className={errors.story_1_date ? 'error' : ''}
                  min="2024-08-30"
                  max="2025-08-30"
                />
                {errors.story_1_date && <span className="error-message">{errors.story_1_date}</span>}
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    name="story_1_english"
                    checked={formData.story_1_english}
                    onChange={handleInputChange}
                  />
                  Is story in English?
                </label>
              </div>

              {!formData.story_1_english && (
                <div className="form-group full-width">
                  <label htmlFor="story_1_transcript">Upload Transcript (PDF, DOC, or Image) *</label>
                  <input
                    type="file"
                    id="story_1_transcript"
                    name="story_1_transcript"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className={errors.story_1_transcript ? 'error' : ''}
                  />
                  <small className="file-help">Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</small>
                  {errors.story_1_transcript && <span className="error-message">{errors.story_1_transcript}</span>}
                  {renderFileStatus('story_1_transcript', formData.story_1_transcript)}
                </div>
              )}

              <div className="form-group full-width">
                <label htmlFor="story_1_summary">200-word Summary of the Story *</label>
                <textarea
                  id="story_1_summary"
                  name="story_1_summary"
                  value={formData.story_1_summary}
                  onChange={handleInputChange}
                  rows="4"
                  className={errors.story_1_summary ? 'error' : ''}
                  placeholder="Provide a 200-word summary of your story..."
                  maxLength="1000"
                />
                {errors.story_1_summary && <span className="error-message">{errors.story_1_summary}</span>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="story_1_motivation">Motivation for Story *</label>
                <textarea
                  id="story_1_motivation"
                  name="story_1_motivation"
                  value={formData.story_1_motivation}
                  onChange={handleInputChange}
                  rows="3"
                  className={errors.story_1_motivation ? 'error' : ''}
                  placeholder="What motivated you to write this story? Why is it important?"
                />
                {errors.story_1_motivation && <span className="error-message">{errors.story_1_motivation}</span>}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="form-step">
            <h3><FileText className="step-icon" /> Your Entry - Stories 2 & 3</h3>
            <div className="form-grid">
              {/* Story 2 */}
              <div className="story-section">
                <h4>Second Story</h4>
                <div className="form-group full-width">
                  <label htmlFor="story_2_link">2nd Story Link *</label>
                  <input
                    type="url"
                    id="story_2_link"
                    name="story_2_link"
                    value={formData.story_2_link}
                    onChange={handleInputChange}
                    className={errors.story_2_link ? 'error' : ''}
                    placeholder="https://example.com/your-second-story"
                  />
                  {errors.story_2_link && <span className="error-message">{errors.story_2_link}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="story_2_date">Date of Publication *</label>
                  <input
                    type="date"
                    id="story_2_date"
                    name="story_2_date"
                    value={formData.story_2_date}
                    onChange={handleInputChange}
                    className={errors.story_2_date ? 'error' : ''}
                    min="2024-08-30"
                    max="2025-08-30"
                  />
                  {errors.story_2_date && <span className="error-message">{errors.story_2_date}</span>}
                </div>

                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="story_2_english"
                      checked={formData.story_2_english}
                      onChange={handleInputChange}
                    />
                    Is story in English?
                  </label>
                </div>

                {!formData.story_2_english && (
                  <div className="form-group full-width">
                    <label htmlFor="story_2_transcript">Upload Transcript *</label>
                    <input
                      type="file"
                      id="story_2_transcript"
                      name="story_2_transcript"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className={errors.story_2_transcript ? 'error' : ''}
                    />
                    <small className="file-help">Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</small>
                    {errors.story_2_transcript && <span className="error-message">{errors.story_2_transcript}</span>}
                    {renderFileStatus('story_2_transcript', formData.story_2_transcript)}
                  </div>
                )}

                <div className="form-group full-width">
                  <label htmlFor="story_2_summary">200-word Summary *</label>
                  <textarea
                    id="story_2_summary"
                    name="story_2_summary"
                    value={formData.story_2_summary}
                    onChange={handleInputChange}
                    rows="3"
                    className={errors.story_2_summary ? 'error' : ''}
                    maxLength="1000"
                  />
                  {errors.story_2_summary && <span className="error-message">{errors.story_2_summary}</span>}
                </div>

                <div className="form-group full-width">
                  <label htmlFor="story_2_motivation">Motivation for Story *</label>
                  <textarea
                    id="story_2_motivation"
                    name="story_2_motivation"
                    value={formData.story_2_motivation}
                    onChange={handleInputChange}
                    rows="2"
                    className={errors.story_2_motivation ? 'error' : ''}
                  />
                  {errors.story_2_motivation && <span className="error-message">{errors.story_2_motivation}</span>}
                </div>
              </div>

              {/* Story 3 */}
              <div className="story-section">
                <h4>Third Story</h4>
                <div className="form-group full-width">
                  <label htmlFor="story_3_link">3rd Story Link *</label>
                  <input
                    type="url"
                    id="story_3_link"
                    name="story_3_link"
                    value={formData.story_3_link}
                    onChange={handleInputChange}
                    className={errors.story_3_link ? 'error' : ''}
                    placeholder="https://example.com/your-third-story"
                  />
                  {errors.story_3_link && <span className="error-message">{errors.story_3_link}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="story_3_date">Date of Publication *</label>
                  <input
                    type="date"
                    id="story_3_date"
                    name="story_3_date"
                    value={formData.story_3_date}
                    onChange={handleInputChange}
                    className={errors.story_3_date ? 'error' : ''}
                    min="2024-08-30"
                    max="2025-08-30"
                  />
                  {errors.story_3_date && <span className="error-message">{errors.story_3_date}</span>}
                </div>

                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      name="story_3_english"
                      checked={formData.story_3_english}
                      onChange={handleInputChange}
                    />
                    Is story in English?
                  </label>
                </div>

                {!formData.story_3_english && (
                  <div className="form-group full-width">
                    <label htmlFor="story_3_transcript">Upload Transcript *</label>
                    <input
                      type="file"
                      id="story_3_transcript"
                      name="story_3_transcript"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className={errors.story_3_transcript ? 'error' : ''}
                    />
                    <small className="file-help">Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</small>
                    {errors.story_3_transcript && <span className="error-message">{errors.story_3_transcript}</span>}
                    {renderFileStatus('story_3_transcript', formData.story_3_transcript)}
                  </div>
                )}

                <div className="form-group full-width">
                  <label htmlFor="story_3_summary">200-word Summary *</label>
                  <textarea
                    id="story_3_summary"
                    name="story_3_summary"
                    value={formData.story_3_summary}
                    onChange={handleInputChange}
                    rows="3"
                    className={errors.story_3_summary ? 'error' : ''}
                    maxLength="1000"
                  />
                  {errors.story_3_summary && <span className="error-message">{errors.story_3_summary}</span>}
                </div>

                <div className="form-group full-width">
                  <label htmlFor="story_3_motivation">Motivation for Story *</label>
                  <textarea
                    id="story_3_motivation"
                    name="story_3_motivation"
                    value={formData.story_3_motivation}
                    onChange={handleInputChange}
                    rows="2"
                    className={errors.story_3_motivation ? 'error' : ''}
                  />
                  {errors.story_3_motivation && <span className="error-message">{errors.story_3_motivation}</span>}
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="form-step">
            <h3><FileText className="step-icon" /> Final Details</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="additional_comments">Please share us any comment about your stories if you think it can help in the judging process</label>
                <textarea
                  id="additional_comments"
                  name="additional_comments"
                  value={formData.additional_comments}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Any additional information about your stories that might help the judges..."
                />
              </div>

              <div className="submission-note">
                <h4>📢 Important Submission Guidelines:</h4>
                <ul>
                  <li>Paste links to your articles, YouTube videos, SoundCloud clips, and Social media content published within the eligible period</li>
                  <li>URLs for articles and YouTube videos should be from a media house and not your personal blog or YouTube channel</li>
                  <li>For radio, you can share your aired stories via a personal SoundCloud or YouTube account</li>
                  <li>For Social Media Content, you can share the link to your X post</li>
                  <li>Upload transcripts for any story published in another language other than English</li>
                </ul>
              </div>

              <div className="consent-section">
                <div className="form-group full-width">
                  <label className={errors.terms_accepted ? 'error' : ''}>
                    <input
                      type="checkbox"
                      name="terms_accepted"
                      checked={formData.terms_accepted}
                      onChange={handleInputChange}
                    />
                    I accept the terms and conditions and privacy policy *
                  </label>
                  {errors.terms_accepted && <span className="error-message">{errors.terms_accepted}</span>}
                </div>

                <div className="form-group full-width">
                  <label>
                    <input
                      type="checkbox"
                      name="marketing_consent"
                      checked={formData.marketing_consent}
                      onChange={handleInputChange}
                    />
                    I consent to receive marketing communications about future OFAB events
                  </label>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="registration-modal-overlay">
      <div className="registration-modal">
        <div className="modal-header">
          <div>
            <h2>OMAS 2025 Registration</h2>
            {!isAuthenticated && (
              <p className="auth-notice">Please sign in or create an account to register</p>
            )}
          </div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
        </div>

        <div className="step-indicator">
          <span>Step {currentStep} of {totalSteps}</span>
        </div>

        <form onSubmit={handleSubmit}>
          {renderStepContent()}

          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('successful') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}

          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="btn-secondary">
                Previous
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button type="button" onClick={nextStep} className="btn-primary">
                Next
              </button>
            ) : (
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode="register"
      />
    </div>
  );
};

export default RegistrationForm;
