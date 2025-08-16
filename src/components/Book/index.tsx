import React from "react";
import { BookType } from "@/utils/types";

interface BookProps extends BookType {
  onAdd: (title: string) => void;
}

const Book = ({ title, author, genre, onAdd }:BookProps) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-64 flex flex-col justify-between hover:bg-gray-700 transition-colors duration-300">
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300 mb-1">by {author}</p>
        <p className="text-sm italic text-yellow-400">{genre}</p>
      </div>
      <button
        onClick={() => onAdd(title)}
        className="mt-4 bg-yellow-500 text-black font-bold py-1 rounded hover:bg-yellow-400 transition-colors duration-300"
      >
        Add to Library
      </button>
    </div>
  );
};

export default Book;
