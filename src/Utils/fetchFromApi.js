import axios from "axios";

export const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
  params: {
    
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    //console.log(response);
    return response.data; // Assuming you want to return the response data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error to the caller
  }
};
