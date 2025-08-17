import { render, screen, fireEvent } from "@testing-library/react";
import Book from "@/components/Book";
import BookList from "@/components/BookList";
import { BookType } from "@/utils/types";

const books: BookType[] = [
  { title: "Book One", author: "Author A", genre: "Fiction" },
  { title: "Book Two", author: "Author B", genre: "Non-fiction" },
];

describe("Book Component", () => {
  it("renders book details correctly", () => {
    let mockOnAdd = jest.fn();
    render(<Book {...books[0]} onAdd={mockOnAdd} />);

    expect(screen.getByText(books[0].title)).toBeInTheDocument();
    expect(screen.getByText(`by ${books[0].author}`)).toBeInTheDocument();
    expect(screen.getByText(books[0].genre)).toBeInTheDocument();
  });

  it("calls onAdd when 'Add to Library' button is clicked", () => {
    let mockOnAdd = jest.fn();
    render(<Book {...books[0]} onAdd={mockOnAdd} />);

    const button = screen.getByRole("button", { name: /Add to Library/i });
    fireEvent.click(button);
    expect(mockOnAdd).toHaveBeenCalledWith(books[0].title);
  });
});

describe("BookList Component", () => {
  it("renders all books passed as props", () => {
    let mockOnAdd = jest.fn();
    render(<BookList books={books} onAdd={mockOnAdd} />);

    books.forEach((book) => {
      expect(screen.getByText(book.title)).toBeInTheDocument();
      expect(screen.getByText(`by ${book.author}`)).toBeInTheDocument();
      expect(screen.getByText(book.genre)).toBeInTheDocument();
    });
  });

  it("calls onAdd with correct title when a book button is clicked", () => {
    let mockOnAdd = jest.fn();
    render(<BookList books={books} onAdd={mockOnAdd} />);

    const buttons = screen.getAllByRole("button", { name: /Add to Library/i });
    expect(buttons.length).toBe(books.length);

    fireEvent.click(buttons[1]);
    expect(mockOnAdd).toHaveBeenCalledWith(books[1].title);
  });
});
