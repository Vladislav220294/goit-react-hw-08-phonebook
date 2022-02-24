import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedin } from '../redux/auth/authSelector';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedin = useSelector(getIsLoggedin);
  return (
    <Route {...routeProps}>
      {isLoggedin ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
