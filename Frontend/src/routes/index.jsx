import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';

const routes = [
    {
        component: HomePage,
        path: '/',
    },
    {
        component: LoginPage,
        path: '/login',
    },
    {
        component: RegisterPage,
        path: '/register',
    },
    {
        component: DetailPage,
        path: '/detail',
    },
    {
        component: CheckoutPage,
        path: '/checkout',
    },
];

export default routes;
