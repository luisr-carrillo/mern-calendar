import { render, screen } from '../../../utils/test-utils';
import Navbar from './navbar';

describe('<navbar />', () => {
  test('should render correctly', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
  test('should render Navbar with Brand and Exit button', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('CalendarApp')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
  });
});
