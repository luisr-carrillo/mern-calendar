import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

describe('<navbar />', () => {
  test('should render correctly', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
  test('should render Navbar with Brand and Exit button', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /salir/i })).toBeInTheDocument();
  });
});
