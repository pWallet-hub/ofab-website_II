import { useState } from 'react';
import './RegistrationForm.css';
import { registerForOMAS2025, checkRegistrationExists } from '../../lib/supabase';
import { User, Briefcase, MapPin, FileText } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const RegistrationForm = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    phone_number: '',
    date_of_birth: '',
    gender: '',
    id_passport: '',
    organization: '',
    organization_address: '',
    media_category: '',
    address: '',
    story_1: '',
    story_1_date: '',
    story_1_summary: '',
    story_1_motivation: '',
    story_1_english: true,
    story_1_transcript: '', // URL input for transcript
    story_2: '',
    story_2_date: '',
    story_2_summary: '',
    story_2_motivation: '',
    story_2_english: true,
    story_2_transcript: '', // URL input for transcript
    story_3: '',
    story_3_date: '',
    story_3_summary: '',
    story_3_motivation: '',
    story_3_english: true,
    story_3_transcript: '', // URL input for transcript
    comments: '',
    terms_accepted: false,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const totalSteps = 5;

  // Helper function to check if a story section has any content
  const hasStoryContent = (storyNumber) => {
    return formData[`story_${storyNumber}`].trim() || 
           formData[`story_${storyNumber}_date`] || 
           formData[`story_${storyNumber}_summary`].trim() || 
           formData[`story_${storyNumber}_motivation`].trim();
  };

  // Helper function to clean optional story data
  const cleanOptionalStoryData = (storyNumber) => {
    const hasContent = hasStoryContent(storyNumber);
    
    if (!hasContent) {
      // Return meaningful default values for completely empty optional stories
      return {
        [`story_${storyNumber}`]: 'N/A', // Default for empty story links
        [`story_${storyNumber}_date`]: '1900-01-01', // Default date for empty dates
        [`story_${storyNumber}_summary`]: 'No summary provided', // Default summary
        [`story_${storyNumber}_motivation`]: 'No motivation provided', // Default motivation
        [`story_${storyNumber}_english`]: true, // Default to true
        [`story_${storyNumber}_transcript_path`]: 'N/A', // Default for empty transcript paths
      };
    }
    
    // Return actual values for stories with content, with defaults for any empty fields
    return {
      [`story_${storyNumber}`]: formData[`story_${storyNumber}`] || 'N/A',
      [`story_${storyNumber}_date`]: formData[`story_${storyNumber}_date`] || '1900-01-01',
      [`story_${storyNumber}_summary`]: formData[`story_${storyNumber}_summary`] || 'No summary provided',
      [`story_${storyNumber}_motivation`]: formData[`story_${storyNumber}_motivation`] || 'No motivation provided',
      [`story_${storyNumber}_english`]: formData[`story_${storyNumber}_english`],
      [`story_${storyNumber}_transcript_path`]: formData[`story_${storyNumber}_transcript`] || 'N/A',
    };
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const isValidUrl = (url) => {
    if (!url) return false; // Empty URLs are invalid for required fields
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    const minDate = new Date('2024-08-30');
    const maxDate = new Date('2025-08-30');

    const validateDate = (date, field) => {
      if (date) {
        const d = new Date(date);
        if (d < minDate || d > maxDate) {
          newErrors[field] = 'Date must be between August 30, 2024, and August 30, 2025';
        }
      }
    };

    switch (step) {
      case 1: // Personal Information
        if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone number is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of birth is required';
        if (!formData.id_passport.trim()) newErrors.id_passport = 'ID/Passport number is required';
        break;
      case 2: // Career Information
        if (!formData.organization.trim()) newErrors.organization = 'Media house is required';
        if (!formData.organization_address.trim()) newErrors.organization_address = 'Media house address is required';
        if (!formData.media_category) newErrors.media_category = 'Contest category is required';
        break;
      case 3: // Contact Information
        if (!formData.address.trim()) newErrors.address = 'Physical address is required';
        break;
      case 4: // Story Submissions
        // Story 1 is mandatory
        if (!formData.story_1.trim()) newErrors.story_1 = '1st story link is required';
        else if (!isValidUrl(formData.story_1)) newErrors.story_1 = 'Invalid URL';
        validateDate(formData.story_1_date, 'story_1_date');
        if (!formData.story_1_date) newErrors.story_1_date = 'Publication date is required';
        if (!formData.story_1_summary.trim()) newErrors.story_1_summary = 'Story summary is required';
        if (!formData.story_1_motivation.trim()) newErrors.story_1_motivation = 'Story motivation is required';
        if (!formData.story_1_english && !formData.story_1_transcript.trim()) newErrors.story_1_transcript = 'Transcript URL is required for non-English stories';
        else if (!formData.story_1_english && !isValidUrl(formData.story_1_transcript)) newErrors.story_1_transcript = 'Invalid transcript URL';
        
        // Story 2 is optional - only validate if any field is filled
        const hasStory2Content = hasStoryContent(2);
        if (hasStory2Content) {
          if (!formData.story_2.trim()) newErrors.story_2 = '2nd story link is required when story 2 information is provided';
          else if (!isValidUrl(formData.story_2)) newErrors.story_2 = 'Invalid URL';
          validateDate(formData.story_2_date, 'story_2_date');
          if (!formData.story_2_date) newErrors.story_2_date = 'Publication date is required for story 2';
          if (!formData.story_2_summary.trim()) newErrors.story_2_summary = 'Story summary is required for story 2';
          if (!formData.story_2_motivation.trim()) newErrors.story_2_motivation = 'Story motivation is required for story 2';
          if (!formData.story_2_english && !formData.story_2_transcript.trim()) newErrors.story_2_transcript = 'Transcript URL is required for non-English stories';
          else if (!formData.story_2_english && !isValidUrl(formData.story_2_transcript)) newErrors.story_2_transcript = 'Invalid transcript URL';
        }
        
        // Story 3 is optional - only validate if any field is filled
        const hasStory3Content = hasStoryContent(3);
        if (hasStory3Content) {
          if (!formData.story_3.trim()) newErrors.story_3 = '3rd story link is required when story 3 information is provided';
          else if (!isValidUrl(formData.story_3)) newErrors.story_3 = 'Invalid URL';
          validateDate(formData.story_3_date, 'story_3_date');
          if (!formData.story_3_date) newErrors.story_3_date = 'Publication date is required for story 3';
          if (!formData.story_3_summary.trim()) newErrors.story_3_summary = 'Story summary is required for story 3';
          if (!formData.story_3_motivation.trim()) newErrors.story_3_motivation = 'Story motivation is required for story 3';
          if (!formData.story_3_english && !formData.story_3_transcript.trim()) newErrors.story_3_transcript = 'Transcript URL is required for non-English stories';
          else if (!formData.story_3_english && !isValidUrl(formData.story_3_transcript)) newErrors.story_3_transcript = 'Invalid transcript URL';
        }
        break;
      case 5: // Final Details
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
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Check for duplicate submission by email
      const registrationCheck = await checkRegistrationExists(formData.email);
      if (registrationCheck.exists) {
        setSubmitMessage('An application with this email already exists.');
        setIsSubmitting(false);
        return;
      }

      setSubmitMessage('Saving application...');
      
      // Clean optional story data before submission
      const story2Data = cleanOptionalStoryData(2);
      const story3Data = cleanOptionalStoryData(3);
      
      const submissionData = {
        email: formData.email,
        full_name: formData.full_name,
        gender: formData.gender,
        date_of_birth: formData.date_of_birth,
        phone_number: formData.phone_number,
        id_passport: formData.id_passport,
        organization: formData.organization,
        organization_address: formData.organization_address,
        media_category: formData.media_category,
        address: formData.address,
        
        // Story 1 (mandatory)
        story_1: formData.story_1,
        story_1_date: formData.story_1_date,
        story_1_summary: formData.story_1_summary,
        story_1_motivation: formData.story_1_motivation,
        story_1_english: formData.story_1_english,
        story_1_transcript_path: formData.story_1_transcript || 'N/A',
        
        // Story 2 (optional - cleaned)
        ...story2Data,
        
        // Story 3 (optional - cleaned)
        ...story3Data,
        
        comments: formData.comments || 'No additional comments provided',
        terms_accepted: formData.terms_accepted,
        registration_status: 'pending',
      };

      console.log('Clean submission data:', submissionData); // Debug log

      const result = await registerForOMAS2025(submissionData);
      if (result.success) {
        setSubmitMessage('Application submitted successfully!');
        if (onSuccess) onSuccess(result.data);
        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
      } else {
        setSubmitMessage(`Submission failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Error during submission:', error);
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
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
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
                <label htmlFor="id_passport">ID/Passport Number *</label>
                <input
                  type="text"
                  id="id_passport"
                  name="id_passport"
                  value={formData.id_passport}
                  onChange={handleInputChange}
                  className={errors.id_passport ? 'error' : ''}
                />
                {errors.id_passport && <span className="error-message">{errors.id_passport}</span>}
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
                  <option value="print_media">Print Media</option>
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
            <h3><FileText className="step-icon" /> Story Submissions</h3>
            <div className="form-grid">
              {/* Story 1 - Mandatory */}
              <div className="story-section">
                <h4>First Story (Required)</h4>
                <div className="form-group full-width">
                  <label htmlFor="story_1">Story Link (Original Publication Link)*</label>
                  <input
                    type="url"
                    id="story_1"
                    name="story_1"
                    value={formData.story_1}
                    onChange={handleInputChange}
                    className={errors.story_1 ? 'error' : ''}
                    placeholder="https://example.com/your-story"
                  />
                  {errors.story_1 && <span className="error-message">{errors.story_1}</span>}
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
                    <label htmlFor="story_1_transcript">Transcript URL *</label>
                    <input
                      type="url"
                      id="story_1_transcript"
                      name="story_1_transcript"
                      value={formData.story_1_transcript}
                      onChange={handleInputChange}
                      className={errors.story_1_transcript ? 'error' : ''}
                      placeholder="https://example.com/transcript"
                    />
                    <small className="file-help">Provide a valid URL to the transcript (e.g., Google Drive, Dropbox)</small>
                    {errors.story_1_transcript && <span className="error-message">{errors.story_1_transcript}</span>}
                  </div>
                )}
                <div className="form-group full-width">
                  <label htmlFor="story_1_summary">200-word Summary *</label>
                  <textarea
                    id="story_1_summary"
                    name="story_1_summary"
                    value={formData.story_1_summary}
                    onChange={handleInputChange}
                    rows="4"
                    className={errors.story_1_summary ? 'error' : ''}
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
                  />
                  {errors.story_1_motivation && <span className="error-message">{errors.story_1_motivation}</span>}
                </div>
              </div>
              {/* Story 2 - Optional */}
              <div className="story-section">
                <h4>Second Story (Optional)</h4>
                <div className="form-group full-width">
                  <label htmlFor="story_2">Story Link (Original Publication Link)</label>
                  <input
                    type="url"
                    id="story_2"
                    name="story_2"
                    value={formData.story_2}
                    onChange={handleInputChange}
                    className={errors.story_2 ? 'error' : ''}
                    placeholder="https://example.com/your-second-story"
                  />
                  {errors.story_2 && <span className="error-message">{errors.story_2}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="story_2_date">Date of Publication</label>
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
                    <label htmlFor="story_2_transcript">Transcript URL</label>
                    <input
                      type="url"
                      id="story_2_transcript"
                      name="story_2_transcript"
                      value={formData.story_2_transcript}
                      onChange={handleInputChange}
                      className={errors.story_2_transcript ? 'error' : ''}
                      placeholder="https://example.com/transcript"
                    />
                    <small className="file-help">Provide a valid URL to the transcript (e.g., Google Drive, Dropbox)</small>
                    {errors.story_2_transcript && <span className="error-message">{errors.story_2_transcript}</span>}
                  </div>
                )}
                <div className="form-group full-width">
                  <label htmlFor="story_2_summary">200-word Summary</label>
                  <textarea
                    id="story_2_summary"
                    name="story_2_summary"
                    value={formData.story_2_summary}
                    onChange={handleInputChange}
                    rows="4"
                    className={errors.story_2_summary ? 'error' : ''}
                    maxLength="1000"
                  />
                  {errors.story_2_summary && <span className="error-message">{errors.story_2_summary}</span>}
                </div>
                <div className="form-group full-width">
                  <label htmlFor="story_2_motivation">Motivation for Story</label>
                  <textarea
                    id="story_2_motivation"
                    name="story_2_motivation"
                    value={formData.story_2_motivation}
                    onChange={handleInputChange}
                    rows="3"
                    className={errors.story_2_motivation ? 'error' : ''}
                  />
                  {errors.story_2_motivation && <span className="error-message">{errors.story_2_motivation}</span>}
                </div>
              </div>
              {/* Story 3 - Optional */}
              <div className="story-section">
                <h4>Third Story (Optional)</h4>
                <div className="form-group full-width">
                  <label htmlFor="story_3">Story Link (Original Publication Link)</label>
                  <input
                    type="url"
                    id="story_3"
                    name="story_3"
                    value={formData.story_3}
                    onChange={handleInputChange}
                    className={errors.story_3 ? 'error' : ''}
                    placeholder="https://example.com/your-third-story"
                  />
                  {errors.story_3 && <span className="error-message">{errors.story_3}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="story_3_date">Date of Publication</label>
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
                    <label htmlFor="story_3_transcript">Transcript URL</label>
                    <input
                      type="url"
                      id="story_3_transcript"
                      name="story_3_transcript"
                      value={formData.story_3_transcript}
                      onChange={handleInputChange}
                      className={errors.story_3_transcript ? 'error' : ''}
                      placeholder="https://example.com/transcript"
                    />
                    <small className="file-help">Provide a valid URL to the transcript (e.g., Google Drive, Dropbox)</small>
                    {errors.story_3_transcript && <span className="error-message">{errors.story_3_transcript}</span>}
                  </div>
                )}
                <div className="form-group full-width">
                  <label htmlFor="story_3_summary">200-word Summary</label>
                  <textarea
                    id="story_3_summary"
                    name="story_3_summary"
                    value={formData.story_3_summary}
                    onChange={handleInputChange}
                    rows="4"
                    className={errors.story_3_summary ? 'error' : ''}
                    maxLength="1000"
                  />
                  {errors.story_3_summary && <span className="error-message">{errors.story_3_summary}</span>}
                </div>
                <div className="form-group full-width">
                  <label htmlFor="story_3_motivation">Motivation for Story</label>
                  <textarea
                    id="story_3_motivation"
                    name="story_3_motivation"
                    value={formData.story_3_motivation}
                    onChange={handleInputChange}
                    rows="3"
                    className={errors.story_3_motivation ? 'error' : ''}
                  />
                  {errors.story_3_motivation && <span className="error-message">{errors.story_3_motivation}</span>}
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-step">
            <h3><FileText className="step-icon" /> Final Details</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="comments">Additional Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Any additional information for the judges..."
                />
              </div>
              <div className="submission-note">
                <h4>📢 Submission Guidelines:</h4>
                <ul>
                  <li>Paste links to your articles, YouTube videos, SoundCloud clips, or social media content published between August 30, 2024, and August 30, 2025.</li>
                  <li>URLs should be from a media house, not personal blogs or channels (except for radio on SoundCloud).</li>
                  <li>For non-English stories, provide a valid URL to the transcript (e.g., Google Drive, Dropbox).</li>
                  <li><strong>At least one story is required, but you can submit up to three stories.</strong></li>
                </ul>
              </div>
              <div className="form-group full-width">
                <label className={errors.terms_accepted ? 'error' : ''}>
                  <input
                    type="checkbox"
                    name="terms_accepted"
                    checked={formData.terms_accepted}
                    onChange={handleInputChange}
                  />
                  I accept the terms and conditions *
                </label>
                {errors.terms_accepted && <span className="error-message">{errors.terms_accepted}</span>}
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
          <h2>OMAS 2025 Application</h2>
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
            <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
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
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;