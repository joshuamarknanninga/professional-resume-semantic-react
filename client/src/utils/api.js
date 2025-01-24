// src/utils/api.js

/**
 * Fetch data from a given API endpoint.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<Object>} - The fetched data as a JSON object.
 */
export const fetchData = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  /**
   * Submit form data to an API endpoint.
   * @param {string} endpoint - The API endpoint to submit data to.
   * @param {Object} formData - The form data to submit.
   * @returns {Promise<Object>} - The response data as a JSON object.
   */
  export const submitForm = async (endpoint, formData) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Error submitting form: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  