import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UserData } from "../types/types";
import { useUserStore } from "../store/Store";


axios.defaults.withCredentials = true;

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const useRegisterUser = () => {
  return useMutation(async (userData: any) => {
    const { data } = await axios.post(`${baseUrl}/register`, userData);
    return data;
  });
};

export const useAuthUser = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation(async (userData: UserData) => {
    const { data } = await axios.post(`${baseUrl}/auth`, userData);
    console.log("Server response: ", data);

    setUser(data);
    return data;

  });
};


export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  const clearUser = useUserStore((state) => state.clearUser);

  return useMutation(async () => {
    const { data } = await axios.post(`${baseUrl}/logout`);
    clearUser();
    queryClient.invalidateQueries("userProfile");
    return data;
  });
};

export const useUserProfile = () => {
  return useQuery("userProfile", async () => {
    const { data } = await axios.get(`${baseUrl}/profile`);
    return data;
  });
};

export const useAddToWishlist = () => {
  return useMutation(async (propertyId: string) => {
    const { data } = await axios.post(`${baseUrl}/wishlist/${propertyId}`);
    return data;
  });
};

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation(async (propertyId: string) => {
    const { data } = await axios.delete(`${baseUrl}/wishlist/${propertyId}`);
    queryClient.invalidateQueries("userProfile");
    return data;
  });
};
