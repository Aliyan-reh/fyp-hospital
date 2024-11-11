import React, { useState } from 'react';
import apiClient from '../axios/apiClient'; // Import your Axios instance
import { toast } from 'react-toastify';
interface FormData {
    email: string;
    password: string;
  }
  
  interface FormErrors {
    email?: string;
    password?: string;
  }
const LoginModal = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // Validate form fields
  const validateField = (name, value) => {
    let error = '';

    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address.';
    } else if (name === 'password' && value.length < 6) {
      error = 'Password must be at least 6 characters long.';
    }

    return error;
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate individual field on change
    const fieldError = validateField(name, value);
    setErrors({ ...errors, [name]: fieldError });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setLoading(true);
    try {
      const response = await apiClient.post('/api/auth/login', formData);
      toast.success('Form submitted successfully!');
      console.log('API Response:', response.data);

      // Reset the form
      setFormData({ email: '', password: '' });
      setErrors({});
    } catch (error) {
      if (error.response) {
        // Display error message from the API
        toast.error(error.response.data.error || 'An error occurred.');
      } else if (error.request) {
        // No response from server
        toast.error('No response from server. Please try again later.');
      } else {
        // Request setup error
        toast.error('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'input-error' : ''}
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? 'input-error' : ''}
            required
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
