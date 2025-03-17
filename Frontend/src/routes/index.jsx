import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import HomePage from '../pages/HomePage/HomePage';

const routes = [
    {
        component: HomePage,
        path: '/',
        layout: 'primary',
    },
    {
        component: LoginPage,
        path: '/login',
        layout: 'none',
    },
    {
        component: RegisterPage,
        path: '/register',
        layout: 'none',
    },
];

export default routes;
