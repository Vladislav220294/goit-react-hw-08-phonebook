import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getIsLoggedin } from '../redux/auth/authSelector';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLoggedin = useSelector(getIsLoggedin);

  return (
    <Route {...routeProps}>
      {isLoggedin && restricted ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};

export default PublicRoute;
