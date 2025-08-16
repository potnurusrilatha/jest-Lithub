'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReadingListContextType {
  favoriteBooks: string[];
  addBook: (title: string) => void;
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(undefined);

export const ReadingListProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([]);

  const addBook = (title: string) => {
    setFavoriteBooks(prev => {
      if (!prev.includes(title)) return [...prev, title];
      return prev;
    });
  };

  return (
    <ReadingListContext.Provider value={{ favoriteBooks, addBook }}>
      {children}
    </ReadingListContext.Provider>
  );
};

export const useReadingList = () => {
  const context = useContext(ReadingListContext);
  if (!context) throw new Error('useReadingList must be used within ReadingListProvider');
  return context;
};
