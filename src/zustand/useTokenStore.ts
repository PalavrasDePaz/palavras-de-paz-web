// useTokenStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

const LOCAL_STORAGE_KEY = "authToken";

// Defina uma função para obter o token do Local Storage no início.
const getInitialToken = () => localStorage.getItem(LOCAL_STORAGE_KEY) || "";

export const useTokenStore = create(
  persist(
    (set) => ({
      token: getInitialToken(),

      setToken: (newToken: string) => {
        set({ token: newToken });
        localStorage.setItem(LOCAL_STORAGE_KEY, newToken);
      },

      clearToken: () => {
        set({ token: "" });
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      },
    }),
    {
      name: "token-storage",
    }
  )
);
