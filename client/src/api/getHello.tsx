import axios from "axios";

export const getHello = async () => {
  try {
    const response = await axios.get("http://20.248.224.164/api/hello");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch hello");
  }
};
