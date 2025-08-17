import { render, screen } from '@testing-library/react';
import ReadingList from '@/components/ReadingList';

const mockBooks = ["The Great Gatsby", "1984", "Pride and Prejudice"];

describe('ReadingList component', () => {
  test('renders heading and books', () => {
    render(<ReadingList books={mockBooks} />);
    
    expect(screen.getByText(/My Reading List/i)).toBeInTheDocument();

    mockBooks.forEach(book => {
      expect(screen.getByText(book)).toBeInTheDocument();
    });
  });

  test('renders fallback message when no books', () => {
    render(<ReadingList books={[]} />);
    expect(screen.getByText(/haven['’]t added any books yet/i)).toBeInTheDocument();
  });
});
