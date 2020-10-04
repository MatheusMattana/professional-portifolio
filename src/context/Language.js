import React, { createContext, useState, useContext } from 'react';

export const Language = createContext();

export default function LanguageProvider({ children }) {
  let localLanguage;
  window.localStorage.getItem('local-language') === undefined
    ? (localLanguage = 'English')
    : (localLanguage = window.localStorage.getItem('local-language'));
  const [languageSelected, setLanguageSelected] = useState(localLanguage);
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
