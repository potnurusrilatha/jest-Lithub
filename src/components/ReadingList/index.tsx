'use client';
import { ReadingListProps } from "@/utils/types";


const ReadingList = ({ books }: ReadingListProps) => {
  const displayBooks = books ?? ["The Great Gatsby", "1984", "Pride and Prejudice"];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">My Reading List</h2>
        {displayBooks.length > 0 ? (
          <ul className="list-disc list-inside text-white">
            {displayBooks.map((book, index) => (
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
