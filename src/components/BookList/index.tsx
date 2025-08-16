import React from "react";
import { BookType } from "@/utils/types";
import Book from "@/components/Book";

interface BookListProps {
  books: BookType[];
  onAdd: (title: string) => void;
}

const BookList = ({ books, onAdd }:BookListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {books.map((book) => (
        <Book key={book.title} {...book} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default BookList;
