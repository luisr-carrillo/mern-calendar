import { render, screen } from '@testing-library/react';
import Login from './login';

describe('<Login />', () => {
  test('should render correctly', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });
  test('should render sign in and register forms', () => {
    render(<Login />);
    expect(screen.getByText(/ingreso/i)).toBeInTheDocument();
    expect(screen.getByText(/registro/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /crear cuenta/i })).toBeInTheDocument();
  });
});
