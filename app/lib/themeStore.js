import { create } from 'zustand';

export const useThemeStore = create((set) => {
  let storedTheme = 'dark';

  if (typeof window !== 'undefined') {
    storedTheme = localStorage.getItem('theme') || 'dark';
  }

  return {
    theme: storedTheme,
    setTheme: (theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
      set({ theme });
    },
  };
});
