import { Switch, Route } from 'wouter';
import routes from './routes/routes';
import './App.css';

function App() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path || 'Not Found'}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default App;

// Font created by Barry Schwartz
