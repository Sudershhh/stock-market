// lib/authStore.ts
import { create } from "zustand";

interface AuthState {
  user: any;
  error: string | null;
  setUser: (user: any) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  setUser: (user) => set({ user }),
  setError: (error) => set({ error }),
}));
