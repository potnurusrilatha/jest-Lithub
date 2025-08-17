import { render, screen } from "@testing-library/react";
import { ReadingListProvider, useReadingList } from "@/components/ReadingListProvider";
import ReadingList from "@/app/reading-list/page";
import { useEffect } from "react";

describe("ReadingList Component", () => {
  it("shows the message when no books are added", () => {
    render(
      <ReadingListProvider>
        <ReadingList />
      </ReadingListProvider>
    );

    expect(screen.getByText("You haven't added any books yet.")).toBeInTheDocument();
  });

  it("renders favorite books", () => {
    const TestWrapper = () => {
      const { addBook } = useReadingList();

      useEffect(() => {
        addBook("Book One");
        addBook("Book Two");
      }, [addBook]);

      return <ReadingList />;
    };

    render(
      <ReadingListProvider>
        <TestWrapper />
      </ReadingListProvider>
    );

    expect(screen.getByText("Book One")).toBeInTheDocument();
    expect(screen.getByText("Book Two")).toBeInTheDocument();
  });
});
