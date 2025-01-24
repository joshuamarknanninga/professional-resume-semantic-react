// src/utils/helpers.js

// Example helper function to format dates
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  
  // Add more helper functions as needed
  