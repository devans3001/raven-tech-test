import { useState, useEffect } from "react";

export function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialState;
    }
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}