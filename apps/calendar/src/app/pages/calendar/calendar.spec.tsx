import { render, screen } from '@testing-library/react';
import Calendar from './calendar';

describe('<Calendar />', () => {
  test('should render correctly', () => {
    const { baseElement } = render(<Calendar />);
    expect(baseElement).toBeTruthy();
  });
  test('should render navbar', () => {
    render(<Calendar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
