import { render, screen } from '../../utils/test-utils';
import Login from './login';

describe('<Login />', () => {
  test('should render correctly', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });
  test('should render sign in and register forms', () => {
    render(<Login />);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });
});
