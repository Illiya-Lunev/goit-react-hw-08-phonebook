import { useEffect, lazy, Suspense } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar/AppBar.js';
import s from './components/AppBar/appBar.module.css';
import authSelectors from './redux/Auth/auth-selectors';
import { fetchCurrentUser } from './redux/Auth/auth-operations';
import PublicRoute from './components/PublicRoute/PublicRoute.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

const HomeView = lazy(() =>
  import('./Views/HomeView' /* webpackChunkName: "home-page" */),
);

const RegisterView = lazy(() =>
  import('./Views/RegisterView' /* webpackChunkName: "register-page" */),
);

const LoginView = lazy(() =>
  import('./Views/LoginView' /* webpackChunkName: "login-page" */),
);

const ContactView = lazy(() =>
  import('./Views/ContactView' /* webpackChunkName: "contact-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return !isFetching ? (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
            display="flex"
            justify-content="center"
            className={s.loader}
          />
        }
      >
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute>
            <ContactView path="/contacts" redirectTo="/login" />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </div>
  ) : null;
}
