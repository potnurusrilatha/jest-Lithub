import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  test('renders the logo', () => {
    render(<Header title='sample_text' />);
    const logo = screen.getByTestId('logo_image');
    expect(logo).toBeInTheDocument();
  });

  test('renders the title passed as prop', () => {
    render(<Header title='sample_text' />);
    const headerTitle = screen.getByRole('heading', { level: 1, name: 'sample_text' });
    expect(headerTitle).toBeInTheDocument();
  });
});
