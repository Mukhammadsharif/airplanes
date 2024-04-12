import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
  const [categories, setCategories] = useState(0);
  const [item, setItem] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        categories,
        setCategories,
        item,
        setItem,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
