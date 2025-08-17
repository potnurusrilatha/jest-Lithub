import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { ReadingListProvider } from "@/components/ReadingListProvider";
import { books } from "@/data/books";

describe("Home Page", () => {
  it("shows message when adding a new book", () => {
    render(
      <ReadingListProvider>
        <Home />
      </ReadingListProvider>
    );

    const addButton = screen.getAllByRole("button", { name: /Add to Library/i })[0];
    fireEvent.click(addButton);

    expect(screen.getByText(`"${books[0].title}" added to your reading list!`)).toBeInTheDocument();
  });

  it("shows message if book is already in favorites", () => {
    render(
      <ReadingListProvider>
        <Home />
      </ReadingListProvider>
    );

    const addButton = screen.getAllByRole("button", { name: /Add to Library/i })[0];

    fireEvent.click(addButton); 
    fireEvent.click(addButton);

    expect(screen.getByText(`"${books[0].title}" is already in your reading list!`)).toBeInTheDocument();
  });
});
