"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [dictionary, setDictionary] = useState(null);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await import(`@/dictionaries/${language}.json`);
      setDictionary(dict.default);
    };
    loadDictionary();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}