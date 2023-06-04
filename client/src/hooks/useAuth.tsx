import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import { useStore } from '../store/Store';
import { User } from '../types/types';

export const useAuth = () => {
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const baseUrl = import.meta.env.VITE_LOCAL_URL;

  const axiosInstance = axios.create({
    withCredentials: true, // Include credentials (cookies) with requests
  });

  const login = () => {
    window.location.href = `${baseUrl}/auth/microsoft`;
  };

  const getUser = useQuery<User, Error>('user', async () => {
    try {
      const { data } = await axiosInstance.get<User>(`${baseUrl}/auth/user`);
      setCurrentUser(data);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching user data');
    }
  }, {
    refetchOnWindowFocus: false,
  });

  const logout = useMutation(async () => {
    try {
      await axiosInstance.post(`${baseUrl}/auth/logout`);
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
      throw new Error('Error during logout');
    }
  });

  return { login, getUser, logout };
};
