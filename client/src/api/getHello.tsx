import axios from "axios";

export const getHello = async () => {
  try {
    const response = await axios.get("http://4.237.17.178/api/hello");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch hello");
  }
};
