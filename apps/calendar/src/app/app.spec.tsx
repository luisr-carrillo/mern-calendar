import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('<App />', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    expect(await screen.findByText('my message')).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });
});
