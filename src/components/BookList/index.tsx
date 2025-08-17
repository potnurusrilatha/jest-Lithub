import React from "react";
import Book from "@/components/Book";
import { BookListProps } from "@/utils/types";

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
