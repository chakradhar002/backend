// src/apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api'; // Replace with your API base URL

export const sendContactForm = async (formData) => {
  try {
    console.log(".........."+JSON.stringify(formData));
    const response = await axios.post(`${API_BASE_URL}/contact`, formData);
    console.log(".........."+JSON.stringify(response));
    return response.data;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};
