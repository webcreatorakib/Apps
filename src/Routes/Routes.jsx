import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import InstallApps from "../Pages/Apps/InstallApps";
import Details from "../Pages/Details/Details";
import PageNotFound from "../Pages/Error/PageNotFound";
import NotFound from "../Pages/Error/NotFound";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                loader: async ()=>{
                    const res = await fetch('https://raw.githubusercontent.com/webcreatorakib/Apps/refs/heads/main/public/App.json');
                    return res.json();
                },
                Component:Home,
            },
            {
                path: "apps",
                loader: async () => {
                    const res = await fetch('https://raw.githubusercontent.com/webcreatorakib/Apps/refs/heads/main/public/App.json');
                    return res.json();
                },
                Component: Apps,
            },
            {
                path: 'installation',
                loader: async () => {
                    const res = await fetch('https://raw.githubusercontent.com/webcreatorakib/Apps/refs/heads/main/public/App.json');
                    return res.json();
                },
                Component:InstallApps,
            },
            {
                path: 'apps/details/:id',
                loader: async ({ params }) => {

                    const response = await fetch(`https://raw.githubusercontent.com/webcreatorakib/Apps/refs/heads/main/public/App.json`)
                    const apps = await response.json()
                    const app = apps.filter(item => item.id === Number(params.id))
                    return app;
                },
                Component: Details
            },
            {
                path: "/apps",
                Component: NotFound,
            },
            {
                path: "*",
                Component : PageNotFound,
            },
        ]
    },
]);
