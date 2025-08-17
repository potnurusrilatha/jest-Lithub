import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import '@testing-library/jest-dom';

describe('Footer Headings', () => {
  it('renders all h4 headings', () => {
    render(<Footer />);
    const headings = screen.getAllByRole('heading', { level: 4 });
    const expectedTexts = ['About LitHub', 'Quick Links', 'Legal', 'Connect with Us'];

    expect(headings.length).toBe(4);
    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(expectedTexts[index]);
    });
  });
});

describe('Footer Links', () => {
  it('renders all quick links', () => {
    render(<Footer />);
    const quickLinks = ['Home', 'Reading-list'];
    quickLinks.forEach((linkText) => {
      const link = screen.getByRole('link', { name: linkText });
      expect(link).toBeInTheDocument();
    });
  });

  it('renders all legal links', () => {
    render(<Footer />);
    const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];
    legalLinks.forEach((linkText) => {
      const link = screen.getByRole('link', { name: linkText });
      expect(link).toBeInTheDocument();
    });
  });
});

describe('Footer Social Media', () => {
  it('renders 4 social icons with proper links', () => {
    render(<Footer />);
    
    const socialLinks = [
      { name: 'Facebook',
        href: '#'
      },
      { name: 'Twitter', 
        href: '#' 
      },
      { name: 'Instagram', 
        href: '#'
      },
      { name: 'LinkedIn',
        href: '#'
      },
    ];

    const socialIcons = screen.getAllByTestId('social-icons');
    expect(socialIcons.length).toBe(4);

    socialLinks.forEach((item) => {
      const link = screen.getByRole('link', { name: item.name });
      expect(link).toHaveAttribute('href', item.href);
    });
  });
});

describe('Footer Copyright', () => {
  it('renders current year copyright', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} LitHub. All rights reserved.`)).toBeInTheDocument();
  });
});
describe('Footer About Section', () => {
  it('renders About LitHub heading and description', () => {
    render(<Footer />);
    expect(screen.getByText('About LitHub')).toBeInTheDocument();
    expect(screen.getByText(/LitHub is your daily source/i)).toBeInTheDocument();
  });
});
