import { render, screen } from '@testing-library/react';
import FeaturedBook from '@/components/FeaturedBook';

describe('FeaturedBook component', () => {
  const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic'
  };

  test('renders the main heading and description', () => {
    render(<FeaturedBook {...book} />);

    expect(screen.getByText(/Welcome to LitHub Picks/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Discover the world of literature through our curated collection/i)
    ).toBeInTheDocument();
  });

  test('renders the featured book details correctly', () => {
    render(<FeaturedBook {...book} />);

    const featured = screen.getByRole('region', { name: /Featured Book/i });

    // Check that the featured container contains the correct title, author, and genre
    expect(featured).toHaveTextContent(book.title);
    expect(featured).toHaveTextContent(book.author);
    expect(featured).toHaveTextContent(book.genre);
  });

  test('has proper accessibility roles and labels', () => {
    render(<FeaturedBook {...book} />);

    const region = screen.getByRole('region', { name: /Featured Book/i });
    expect(region).toBeInTheDocument();
  });
});
