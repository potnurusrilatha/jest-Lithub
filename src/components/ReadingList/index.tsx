'use client';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

const ReadingList = () => {
  const dummyBooks = ["The Great Gatsby", "1984", "Pride and Prejudice"]; // example books

  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      <Header />
      <Navigation />

      <main className="flex-grow max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">My Reading List</h2>
        {dummyBooks.length > 0 ? (
          <ul className="list-disc list-inside text-white">
            {dummyBooks.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">You haven’t added any books yet.</p>
        )}
      </main>
    </div>
  );
};

export default ReadingList;
