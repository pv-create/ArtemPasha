import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {privateRouts, publicRouts, routeNames} from "../Router";
import Login from "./Pages/LoginPage/login";

const appRouter = () => {
    let auth:boolean=true
    return (

            <BrowserRouter>
                {auth ?
                    //роуты авторизованных пользователей
                    <Routes>
                        {privateRouts.map(route =>
                            <Route key={route.path} path={route.path} element={<route.component/>}></Route>
                        )}
                        <Route
                            path="*"
                            element={<Login/>}
                        />
                    </Routes>
                    //роуты неавторизованных пользователей
                    :
                    <Routes>
                        {publicRouts.map(route =>
                            <Route key={route.path} path={route.path} element={<route.component/>}></Route>
                        )}

                        <Route
                            path="*"
                            element={<Login/>}
                        />
                    </Routes>

                }
            </BrowserRouter>

    );
}

export default appRouter;
