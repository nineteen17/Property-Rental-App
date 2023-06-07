import { create } from "zustand";

type User = { _id: string; name: string; email: string; watchlist: any } | null;

interface Store {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<Store>((set) => {
  let user: User = null;

  const userData = localStorage.getItem('user');
  if (userData !== null) {
    try {
      user = JSON.parse(userData);
    } catch (err) {
      console.error('Error parsing user data from local storage:', err);
    }
  }

  return {
    user,
    setUser: (user: User) => {
      console.log("User before storing in localStorage: ", user);
      
      localStorage.setItem('user', JSON.stringify(user));
      set({ user });
    },
    clearUser: () => {
      localStorage.removeItem('user');
      set({ user: null });
    },
    loading: false,
    setLoading: (loading: boolean) => set(() => ({ loading })),
  };
});




