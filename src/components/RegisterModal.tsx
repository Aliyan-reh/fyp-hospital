'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import apiClient from '../axios/apiClient'; // Import your Axios instance
import { toast } from 'react-toastify';

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

const RegisterModal = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state

  // Validate form fields
  const validateField = (name: keyof FormData, value: string): string => {
    let error = '';

    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address.';
    } else if (name === 'password' && value.length < 6) {
      error = 'Password must be at least 6 characters long.';
    } else if (name === 'username' && value.length < 3) {
      error = 'Username must be at least 3 characters long.';
    }

    return error;
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      const error = validateField(key as keyof FormData, value);
      if (error) {
        newErrors[key as keyof FormData] = error;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate individual field on change
    const fieldError = validateField(name as keyof FormData, value);
    setErrors({ ...errors, [name]: fieldError });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error('Please fix the errors in the form.');
      return;
    }

    setLoading(true);
    try {
      const response = await apiClient.post('/api/auth/register', formData);
      toast.success('Registration successful!');
      console.log('API Response:', response.data);

      // Reset the form
      setFormData({ username: '', email: '', password: '' });
      setErrors({});
      setIsOpen(false); // Close modal after success
    } catch (error: any) {
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
      {/* Button to open the modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Open Registration Modal
      </button>

      {/* Modal Component */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 max-w-md w-full">
            <Dialog.Title className="text-lg font-bold text-gray-800">
              Register
            </Dialog.Title>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.username ? 'border-red-500' : 'border-gray-300'
                  } shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
                  required
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
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
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
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
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  {loading ? 'Submitting...' : 'Register'}
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default RegisterModal;
