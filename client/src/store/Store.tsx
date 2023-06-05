import { create } from "zustand";

type Store = {
  user: null | { _id: string; name: string; email: string };
  setUser: (user: { _id: string; name: string; email: string }) => void;
  clearUser: () => void;
};

export const useUserStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
