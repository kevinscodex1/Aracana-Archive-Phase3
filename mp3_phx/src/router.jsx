import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/mainLayout";
import GuestLayout from "./components/guestLayout";
import Dashboard from "./views/Dashboard";
import Download from "./views/Download";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Plans from "./views/Plans";
import Contact from "./views/Contact";
import Books from "./views/Books";
import BookView from "./views/BookView";
import BookPublicView from "./views/BookPublicView";
import UserLayout from "./components/userLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" />,
            },
            {
                path: "/home",
                element: <Dashboard />,
            },

            {
                path: "/plans",
                element: <Plans />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/download-app",
                element: <Download />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "/archive",
                element: <Books />,
            },
            {
                path: "/archive/create",
                element: <BookView />,
            },
            {
                path: "/archive/:id",
                element: <BookView />,
            },
            {
                path: "/archive/public/:slug",
                element: <BookPublicView />,
            },
        ],
    },
]);

export default router;
