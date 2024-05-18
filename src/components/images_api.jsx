import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "2DH6lactwWLae3-7XulkiKhy7oD9Pq2nH5MpqxO88Qw";
export const getImages = async (topic, currentPage) => {
  const response = await axios.get("/search/photos", {
      params: {
          client_id: API_KEY,
      query: topic,
      page: currentPage,
      per_page: 5,
    },
  });

  return response.data.results;
};
