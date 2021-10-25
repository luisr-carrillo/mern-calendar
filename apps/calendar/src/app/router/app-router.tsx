import { Switch, Route, Redirect } from 'react-router-dom';
import { Calendar, Login } from '../pages/index';

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Calendar} />
      <Redirect to="/" />
    </Switch>
  );
}
