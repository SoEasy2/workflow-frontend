import { render, screen } from '@testing-library/react';
import { TestError } from './pages';

test('renders learn react link', () => {
  render(<TestError />);
  const linkElement = screen.getByText(/TEST ERROR/i);
  expect(linkElement).toBeInTheDocument();
});
