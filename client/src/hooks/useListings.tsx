import { useQuery } from 'react-query';
import axios from 'axios';

export const usePropertyId = (id: any) => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL
  return useQuery(
    ['property', id], 
    async () => {
      const response = await axios.get(`${baseUrl}/api/properties/${id}`);
      return response.data;
    },
    { 
      enabled: !!id 
    }
  );
};
