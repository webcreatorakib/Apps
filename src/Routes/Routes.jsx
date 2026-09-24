import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import InstallApps from "../Pages/Apps/InstallApps";
import Details from "../Pages/Details/Details";
import NotFound from "../Pages/Error/NotFound";
import PageNotFound from "../Pages/Error/PageNotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
                loader: () => fetch('/App.json'),
            },
            {
                path: "apps",
                loader: ()=> fetch('/App.json'),
                Component: Apps,
            },
            {
                path: 'installation',
                Component:InstallApps,
            },
            {
                path: 'apps/details/:id',
                loader: () => fetch('/App.json'),
                Component: Details
            },
            {
                path: "*",
                Component : PageNotFound,
            }
        ]
    },
]);
