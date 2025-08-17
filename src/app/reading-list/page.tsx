'use client';

import Footer from '@/components/Footer';
import { useReadingList } from '@/components/ReadingListContext';

export default function ReadingList() {
  const { favoriteBooks } = useReadingList();

  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">My Reading List</h2>
        {favoriteBooks.length > 0 ? (
          <ul className="list-disc list-inside text-white">
            {favoriteBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">You haven’t added any books yet.</p>
        )}
      </main>
    
    </div>
  );
}
