import { Route, Routes, useNavigate } from 'react-router';
import { routes } from './helpers/constants';
import { useEffect, useId } from 'react';
import { MainLayout } from './components/Desktop/Layouts/MainLayout/MainLayout';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useMutation } from '@apollo/client';
import { setupUser } from './helpers/setupUser';
import { useCookies } from 'react-cookie';
import { userSlice } from './redux/user/slices/UserSlice';
import { REFRESH_USER } from './graphql/auth/refresh/mutations';

const AppMobile = () => {
    const navigate = useNavigate();

    const { user } = useAppSelector((state) => state.user);

    const [, setCookie] = useCookies();
    const dispatch = useAppDispatch();

    const { userSet } = userSlice.actions;

    const [handleRefresh] = useMutation(REFRESH_USER, {
        onCompleted: async (data) => {
            const { refresh } = data;
            setupUser(refresh.tokens, setCookie);
            await dispatch(userSet(refresh.user));
        },
    });

    useEffect(() => {
        (async () => {
            await handleRefresh();
        })();
    }, []);

    useEffect(() => {
        navigate({
            pathname: '/registration',
            // search: `?step=${user ? user.stepRegistration : 1}`,
            search: `?step=${3}`
        });
        console.log(navigate);
    }, [user]);
    return (
        <MainLayout>
            <Routes>
                {routes.map((route) => (
                    <Route key={useId()} path={route.path} element={route.component} />
                ))}
            </Routes>
        </MainLayout>
    );
};

export { AppMobile };
