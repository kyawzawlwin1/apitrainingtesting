
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAccountStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (newToken) => set({ token: newToken }),
      logout: () => set({ token: null }),
    }),
    {
      name: "account-storage", // key in localStorage
      // optionally, you can provide serialize/deserialize or whitelist/blacklist
    }
  )
);

export default useAccountStore;
