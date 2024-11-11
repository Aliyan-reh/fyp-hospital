'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
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
const LoginModal = ({handleCloseModal, open}) => {


  // Form state
  const [formData, setFormData] =useState<FormData>({ email: '', password: '' })
 const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false)

  const validateField = (name, value) => {
    let error = ''
    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address.'
    } else if (name === 'password' && value.length < 6) {
      error = 'Password must be at least 6 characters long.'
    }
    return error
  }

  const validateForm = () => {
    const newErrors = {}
    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key, value)
      if (error) {
        newErrors[key] = error
      }
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    const fieldError = validateField(name, value)
    setErrors({ ...errors, [name]: fieldError })
  }

  

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
      toast.success('Login successful!');
      console.log('API Response:', response.data);
  
      // Save user data to localStorage
      const userData = response.data.user; 
      const token = response.data.token; 
  
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token);
  
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
    <Dialog open={open} onClose={handleCloseModal} className="relative z-10">
      <DialogBackdrop
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="text-center">
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  Login to Your Account
                </DialogTitle>
                <div className="mt-4">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full rounded-md border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Your Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full rounded-md border ${
                          errors.password ? 'border-red-500' : 'border-gray-300'
                        } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                        required
                      />
                      {errors.password && (
                        <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                      )}
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="inline-flex w-full justify-center rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-200 sm:w-auto"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:w-auto"
                      >
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
