import { MAIN_PATH, SECOND_PATH, REGISTRATION_PATH } from './Paths';
import MainPage from '../../pages/MainPage/mainPage';
import SecondPage from '../../pages/SecondPage/secondPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';


interface Route {
    path: string,
    Component: (() => JSX.Element) | (React.LazyExoticComponent<() => JSX.Element>)
}


// const MainPage = lazy(() => import('../../pages/MainPage/mainPage'))
// const SecondPage = lazy(() => import('../../pages/secondPage'))


export const publicRoutes: Route[] = [
    {
        path: MAIN_PATH,
        Component: MainPage
    },
    {
        path: SECOND_PATH,
        Component: SecondPage
    },

    {
        path: REGISTRATION_PATH,
        Component: RegistrationPage
    }
]