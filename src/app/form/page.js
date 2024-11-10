"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { toast  } from 'react-toastify';

const ContactForm = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const questions = [
    { id: 1, key: 'firstName', question: 'What is your first name?', placeholder: 'Type your answer here...', type: 'text' },
    { id: 2, key: 'lastName', question: 'What is your last name?', placeholder: 'Type your answer here...', type: 'text' },
    { id: 3, key: 'email', question: 'What is your email address?', placeholder: 'Type your answer here...', type: 'email' },
    { id: 4, key: 'phone', question: 'What is your phone number?', placeholder: 'Type your answer here...', type: 'tel' },
    {
      id: 5,
      key: 'location',
      question: 'What is your location?',
      placeholder: '',
      type: 'dropdown',
      options: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
    },
    { id: 6, key: 'message', question: 'Let us know how we can help!', placeholder: 'Type your message here...', type: 'text' },
  ];

  const progress = ((slideIndex + 1) / questions.length) * 100;

  const validateField = (key, value) => {
    let error = '';
    if (!value) {
      error = 'This field is required.';
    } else if (key === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address.';
    } else if (key === 'phone' && !/^\d{10}$/.test(value)) {
      error = 'Please enter a valid 10-digit phone number.';
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleNext = () => {
    const currentKey = questions[slideIndex].key;
    const error = validateField(currentKey, formData[currentKey]);
    if (!error) {
      setSlideIndex(slideIndex + 1);
    } else {
      setErrors({ ...errors, [currentKey]: error });
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const currentKey = questions[slideIndex]?.key;
    const error = validateField(currentKey, formData[currentKey]);
  
    if (error) {
      setErrors({ ...errors, [currentKey]: error });
      return; 
    }
  
    try {
      const response = await axios.post('https://fyp-backend-n76b.onrender.com/api/forms/submit', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        message: '',
      });
      toast.success('Form submitted successfully')
      setSlideIndex(0)
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.response?.data || error.message);
    }
  };
  

  return (
    <>

<div className="bg-[#fdf4ef] p-8 max-w-lg mx-auto rounded-lg text-center">
      <div className="relative w-full h-2 bg-gray-200 rounded mb-4">
        <div
          className="absolute top-0 left-0 h-2 bg-[#73cfcf] rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="w-24 h-1 bg-[#d3e3de] mx-auto mb-8"></div>
      <form onSubmit={handleSubmit} className="text-left">
        <label className="block text-lg mb-2">
          <span className="font-bold">{questions[slideIndex].id} →</span> {questions[slideIndex].question}*
        </label>
        {questions[slideIndex].type === 'text' || questions[slideIndex].type === 'email' || questions[slideIndex].type === 'tel' ? (
          <>
            <input
              type={questions[slideIndex].type}
              name={questions[slideIndex].key}
              value={formData[questions[slideIndex].key]}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded mb-2 text-lg"
              placeholder={questions[slideIndex].placeholder}
              required
            />
            {errors[questions[slideIndex].key] && (
              <p className="text-red-500 text-sm">{errors[questions[slideIndex].key]}</p>
            )}
          </>
        ) : questions[slideIndex].type === 'dropdown' ? (
          <>
            <select
              name={questions[slideIndex].key}
              value={formData[questions[slideIndex].key]}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded mb-2 text-lg"
              required
            >
              <option value="" disabled>
                Select your location
              </option>
              {questions[slideIndex].options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors[questions[slideIndex].key] && (
              <p className="text-red-500 text-sm">{errors[questions[slideIndex].key]}</p>
            )}
          </>
        ) : null}
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-[#73cfcf] text-white py-2 px-4 rounded font-medium"
          >
           {slideIndex === questions.length - 1 ? 'Submit' : 'OK'}
          </button>
          <span className="ml-4 text-sm text-gray-500">press Enter ↵</span>
        </div>
        <div className="flex justify-end space-x-4 mt-8">
          <button
            type="button"
            onClick={handlePrev}
            className="bg-[#73cfcf] text-white p-2 rounded-full"
            disabled={slideIndex === 0}
          >
            &#9650;
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-[#73cfcf] text-white p-2 rounded-full"
            disabled={slideIndex === questions.length - 1}
          >
            &#9660;
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
