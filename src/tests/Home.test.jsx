import { render, screen } from '@testing-library/react';
import Home from '../component/Home';

describe('Home Component', () => {
  test('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/welcome to my little corner/i)).toBeInTheDocument();
  });

  test('renders navbar with all items', () => {
    render(<Home />);
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('displays Sarah Atici name', () => {
    render(<Home />);
    expect(screen.getByText(/Sarah Atici/i)).toBeInTheDocument();
  });

  test('has profile section ID', () => {
    const { container } = render(<Home />);
    const profileSection = container.querySelector('#profile');
    expect(profileSection).toBeInTheDocument();
  });
});
