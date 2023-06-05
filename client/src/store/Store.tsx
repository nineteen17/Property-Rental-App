import { create } from "zustand";

type Store = {
  user: null | { _id: string; name: string; email: string };
  setUser: (user: { _id: string; name: string; email: string }) => void;
  clearUser: () => void;
  loading: boolean;
};

export const useUserStore = create<Store>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  clearUser: () => set({ user: null, loading: false }),
  setLoading: (loading:boolean) => set({ loading }),
}));
