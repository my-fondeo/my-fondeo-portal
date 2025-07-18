import { create } from "zustand";

interface ProLanding {
  isEnabled: boolean;
  setEnabled: (value: boolean) => void;
}

export const useProLanding = create<ProLanding>((set) => ({
  isEnabled: false,
  setEnabled: (value) => set({ isEnabled: value }),
}));
