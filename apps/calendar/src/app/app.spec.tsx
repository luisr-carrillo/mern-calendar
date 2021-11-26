import App from './app';
import { render } from './utils/test-utils';

describe('<App />', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
