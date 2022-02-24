import Navigation from './utils/Navigation';
import './App.css';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRefresh } from './redux/auth/authOperations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  console.log(isLoading);
  useEffect(() => {
    dispatch(fetchRefresh());
  }, [dispatch]);
  return (
    !isLoading && (
      <div className="App">
        <Navigation />
        <Switch>
          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </div>
    )
  );
};

export default App;
