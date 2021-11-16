import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import authSelectors from '../../redux/Auth/auth-selectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
