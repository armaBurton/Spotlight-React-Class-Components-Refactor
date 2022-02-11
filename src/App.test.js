import { render, screen } from '@testing-library/react';
import App from './App';

test('Current Page', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/current page/i);
  expect(linkElement).toBeInTheDocument();
});
