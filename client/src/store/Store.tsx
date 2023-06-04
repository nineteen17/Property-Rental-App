import { create }from "zustand";
import { User } from "../types/types";

type Store = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

export const useStore = create<Store>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
