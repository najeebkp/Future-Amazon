import axios from "axios";

export const APIFetcher = async (url) => {
  try {
    const response = await axios.get(
      `https://future-amazon-backend.vercel.app/${url}`,
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
