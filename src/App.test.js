import { render, screen } from '@testing-library/react';
import SamurajJsApp from './App';
import App from './App';

test('renders learn react link', () => {
  render(<SamurajJsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
