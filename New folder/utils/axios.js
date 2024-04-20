// Frontend: utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Set base URL for API requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
