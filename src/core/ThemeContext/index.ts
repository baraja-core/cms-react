import { createContext } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

interface Store {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const localStorageKey = 'system__dark-mode';

export const resolveDefaultTheme = (): Theme =>
  typeof localStorage !== 'undefined' && localStorage.getItem(localStorageKey)
    ? (localStorage.getItem(localStorageKey) as Theme)
    : typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches
    ? Theme.Dark
    : Theme.Light;

export const ThemeContext = createContext<Store>({ theme: resolveDefaultTheme() } as Store);
