import axios from "axios";

export const getHello = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/hello");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch hello");
  }
};
