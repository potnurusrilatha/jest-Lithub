'use client';

import { useState, useEffect } from 'react';
import FeaturedBook from '@/components/FeaturedBook';
import BookList from '@/components/BookList';
import Result from '@/components/Result';
import { books } from '@/data/books';
import { useReadingList } from '@/components/ReadingListProvider';

export default function Home() {
  const [featuredBook, setFeaturedBook] = useState(books[0]);
  const [message, setMessage] = useState<string | null>(null);
  const { favoriteBooks, addBook } = useReadingList();

  const handleAddToFavorites = (title: string) => {
    if (!favoriteBooks.includes(title)) {
      addBook(title);
      setMessage(`"${title}" added to your reading list!`);
    } else {
      setMessage(`"${title}" is already in your reading list!`);
    }
  };

  useEffect(() => {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    setFeaturedBook(randomBook);
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow max-w-6xl mx-auto p-4">
        {featuredBook && <FeaturedBook {...featuredBook} />}
        <BookList books={books} onAdd={handleAddToFavorites} />
        <section className="mt-6">
          <Result message={message} />
        </section>
      </main>
    </div>
  );
}
