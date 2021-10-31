import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router';

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
