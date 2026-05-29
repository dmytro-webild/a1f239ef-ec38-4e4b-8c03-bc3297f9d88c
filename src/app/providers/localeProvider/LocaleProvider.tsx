'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface LocaleContextType {
  locale: string;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<string>('en'); // Default to English

  useEffect(() => {
    // Initialize locale from localStorage or set default
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      localStorage.setItem('locale', 'en');
    }
  }, []);

  useEffect(() => {
    // Update the HTML lang attribute when locale changes
    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'fr' : 'en'));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
