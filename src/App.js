import Navigation from './utils/Navigation';
import './App.css';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
