import axios from "axios";

export const getHello = async () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  try {
    const response = await axios.get(`${baseUrl}/api/hello`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch hello");
  }
};
