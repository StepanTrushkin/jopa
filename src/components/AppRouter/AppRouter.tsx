import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes";
import MainPage from "../../pages/MainPage/mainPage";

function AppRouter() {

    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component/>} />
            ))}

            <Route path="*" element={<MainPage />} />
        </Routes>
    );
}

export default AppRouter;
