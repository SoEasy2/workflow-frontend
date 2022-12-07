import { Route, Routes, useNavigate } from 'react-router';
import { routes } from './helpers/constants';
import { useEffect, useId, useState } from 'react';
import { MainLayout } from './components/Desktop/Layouts/MainLayout/MainLayout';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useMutation } from '@apollo/client';
import { setupUser } from './helpers/setupUser';
import { useCookies } from 'react-cookie';
import { userSlice } from './redux/user/slices/UserSlice';
import { REFRESH_USER } from './graphql/auth/refresh/mutations';
import { Loader } from './components/UI-Kit/Loader/Loader';

const App = () => {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  const [, setCookie] = useCookies();
  const dispatch = useAppDispatch();

  const [isFirstLoading, setFirstLoading] = useState<boolean>(true);

  const { userSet } = userSlice.actions;

  const [handleRefresh] = useMutation(REFRESH_USER, {
    onCompleted: async (data) => {
      const { refresh } = data;
      setupUser(refresh.tokens, setCookie);
      await dispatch(userSet(refresh.user));
      setFirstLoading(false);
    },
    onError: () => {
      setFirstLoading(false)
    }
  });

  useEffect(() => {
    addEventListener('resize', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.body.style.zoom = 1 / window.devicePixelRatio;
    });
    (async () => {
      await handleRefresh();
    })();

    return () =>
      removeEventListener('resize', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.body.style.zoom = 1 / window.devicePixelRatio;
      });
  }, []);

  useEffect(() => {
    navigate({
      pathname: '/registration',
      search: `?step=${user ? user.stepRegistration : 1}`,
    });
    console.log(navigate);
  }, [user]);
  return (
    <MainLayout>
      { isFirstLoading && <Loader isBackground={true} /> }
      <Routes>
        {routes.map((route) => (
          <Route
            key={useId()}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </MainLayout>
  );
};

export { App };
