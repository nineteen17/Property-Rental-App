import { useQuery } from 'react-query';
import axios from 'axios';

export const usePropertyId = (id: any) => {
  return useQuery(
    ['property', id], 
    async () => {
      const response = await axios.get(`${import.meta.env.VITE_LOCAL_URL}/api/properties/${id}`);
      return response.data;
    },
    { 
      enabled: !!id // This ensures that the query does not run until the `id` is truthy
    }
  );
};
