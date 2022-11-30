import { Route, Routes, useNavigate } from 'react-router';
import { previewMobileTransition, routes } from './helpers/constants';
import { useEffect, useId, useState } from 'react';
import { MainLayout } from './components/Desktop/Layouts/MainLayout/MainLayout';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useMutation } from '@apollo/client';
import { setupUser } from './helpers/setupUser';
import { useCookies } from 'react-cookie';
import { userSlice } from './redux/user/slices/UserSlice';
import { REFRESH_USER } from './graphql/auth/refresh/mutations';
import { Preview } from './components/Mobile/Preview/Preview';

const AppMobile = () => {
  const navigate = useNavigate();

  const [isPreview, setPreview] = useState<boolean>(false);

  const { user } = useAppSelector((state) => state.user);

  const [, setCookie] = useCookies();
  const dispatch = useAppDispatch();

  const { userSet } = userSlice.actions;

  const transition = previewMobileTransition(isPreview);

  const [handleRefresh] = useMutation(REFRESH_USER, {
    onCompleted: async (data) => {
      const { refresh } = data;
      setupUser(refresh.tokens, setCookie);
      await dispatch(userSet(refresh.user));
    },
  });

  useEffect(() => {
    setPreview(true);
    setTimeout(() => {
      setPreview(false);
    }, 3000);
    (async () => {
      await handleRefresh();
    })();
  }, []);

  useEffect(() => {
    !isPreview && navigate({
      pathname: '/registration',
      // search: `?step=${user ? user.stepRegistration : 1}`,
      search: `?step=${3}`,
    });
  }, [user, isPreview]);
  return (
    <MainLayout>
      { transition((style, item) => item && <Preview style={style} />) }
      <Routes>
        {routes.map((route) => (
          <Route key={useId()} path={route.path} element={route.component} />
        ))}
      </Routes>
    </MainLayout>
  );
};

export { AppMobile };
