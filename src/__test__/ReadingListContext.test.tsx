// __tests__/ReadingListContext.test.tsx
import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { ReadingListProvider, useReadingList } from '@/components/ReadingListProvider';

describe('ReadingListContext', () => {
  
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ReadingListProvider>
      {children}
    </ReadingListProvider>
  );

  test('provides an empty initial favoriteBooks array', () => {
    const { result } = renderHook(() => useReadingList(), { wrapper });
    expect(result.current.favoriteBooks).toEqual([]);
  });

  test('adds a book to the favoriteBooks list', () => {
    const { result } = renderHook(() => useReadingList(), { wrapper });

    act(() => {
      result.current.addBook('The Great Gatsby');
    });

    expect(result.current.favoriteBooks).toContain('The Great Gatsby');
  });

  test('does not add duplicate books', () => {
    const { result } = renderHook(() => useReadingList(), { wrapper });

    act(() => {
      result.current.addBook('1984');
      result.current.addBook('1984'); 
    });

    expect(result.current.favoriteBooks).toEqual(['1984']); 
  });
});
