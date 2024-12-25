import axios from 'axios';

// Create Axios instance
const apiClient = axios.create({
  // baseURL: 'https://fyp-backend-n76b.onrender.com/api', 
  baseURL: 'http://localhost:5000', 
  timeout: 5000, // Optional: timeout in ms
});

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response, // Pass successful responses directly
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Other errors (e.g., in setting up the request)
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error); // Ensure the error is still propagated
  }
);

export default apiClient;
