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
import { StepEnum } from './helpers/constants/registration/enums/step';
import { TypeRegistration } from './helpers/constants/registration/enums/typeRegistration';
import { StepConnect } from './helpers/constants/registration/enums/stepConnect';

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
      setFirstLoading(false);
    },
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
    if (
      user &&
      ((user.typeRegistration === TypeRegistration.REGISTRATION_DEFAULT &&
        +user.stepRegistration === StepEnum.COMPLETE) ||
        (user.typeRegistration === TypeRegistration.REGISTRATION_BY_CODE &&
          +user.stepRegistration === StepConnect.CONNECT_COMPLETE))
    ) {
      navigate({
        pathname: '/complete',
      });
    } else if (user && user.typeRegistration === TypeRegistration.REGISTRATION_DEFAULT) {
      navigate({
        pathname: '/registration',
        search: `?step=${user.stepRegistration}`,
      });
    } else if (user && user.typeRegistration === TypeRegistration.REGISTRATION_BY_CODE) {
      navigate({
        pathname: '/connect-with-code',
        search: `?step=${user.stepRegistration}`,
      });
    } else {
      navigate({
        pathname: '/registration',
        search: `?step=${StepEnum.REGISTRATION}`,
      });
    }
  }, [user]);

  useEffect(() => {
    navigate({
      pathname: '/dashboard',
    });
  }, []);
  return (
    <MainLayout>
      {isFirstLoading && <Loader isBackground={true} />}
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
