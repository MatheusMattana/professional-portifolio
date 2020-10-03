import React, { createContext, useState, useContext } from 'react';

export const Language = createContext();

export default function LanguageProvider({ children }) {
  const [languageSelected, setLanguageSelected] = useState('English');
  return (
    <Language.Provider value={{ languageSelected, setLanguageSelected }}>
      {children}
    </Language.Provider>
  );
}

export function useLanguage() {
  const context = useContext(Language);
  const { languageSelected, setLanguageSelected } = context;
  return { languageSelected, setLanguageSelected };
}
