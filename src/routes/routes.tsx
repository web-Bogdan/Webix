
import Auth from "../pages/Auth";
import {RouteObject} from "react-router";
import Home from "../pages/Home";


export const publicRoutes: RouteObject[] = [
    {path: "/auth", element: <Auth/>},
    {path: "/home", element: <Home/>}
]
