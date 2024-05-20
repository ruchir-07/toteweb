export const fetchUrl = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('API not found', url);
      console.log('API failed', error);
      return { error };
    }
  };