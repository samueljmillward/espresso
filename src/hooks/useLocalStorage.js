import { useState, useEffect } from 'react';

export default function useLocalStorage(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const storage = localStorage.getItem(key);
    return storage !== null ? JSON.parse(storage) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
