import "../sub.css";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import ThemeIcon from "../components/themeButton";
import arcanaLogo from "../assets/img/Arcana_logo.png";
import { Outlet } from "react-router-dom";
import BotnavDark from "./Botnav";
import { useEffect } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios";

export default function UserLayout() {
    const { currentUser, userToken, setCurrentUser, setUserToken } =
        useStateContext();
    if (!userToken) {
        return <Navigate to="login" />;
    }
    const logout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then((res) => {
            setCurrentUser({});
            setUserToken(null);
        });
    };

    useEffect(() => {
        if (userToken) {
            axiosClient.get("/me").then(({ data }) => {
                setCurrentUser(data);
            });
        }
    }, []);
    return (
        <>
            <nav>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
                <div>
                    <div className="fixed top-0 left-0 h-screen w-16 flex-col  hidden md:block bg-white text-black dark:bg-secondary dark:text-white shadow-lg">
                        <ul>
                            <li>
                                <a href="#" placeholder="Arcana Logo">
                                    <img
                                        src={arcanaLogo}
                                        alt=""
                                        id="logo"
                                        className="h-12 w-12 my-8 sidebar-icon group"
                                    />
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/archive"
                                    className="group"
                                    placeholder="Home"
                                >
                                    <span className="tooltip-home group-hover:scale-100">
                                        Home
                                    </span>
                                    <HomeIcon className="h-8 w-8 my-8   sidebar-icon" />
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="group"
                                    placeholder="User"
                                >
                                    <span className="tooltip-user-profile group-hover:scale-100">
                                        User Profile
                                    </span>
                                    <UserCircleIcon className="h-8 w-8 my-8  sidebar-icon" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="group"
                                    placeholder="About"
                                >
                                    <span className="tooltip-about group-hover:scale-100">
                                        About
                                    </span>
                                    <InformationCircleIcon className="h-8 w-8 my-8   sidebar-icon" />
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/plans"
                                    className="group"
                                    placeholder="Plans"
                                >
                                    <span className="tooltip-plans group-hover:scale-100">
                                        Plans
                                    </span>
                                    <BookOpenIcon className="h-8 w-8 my-8   sidebar-icon" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/download-app"
                                    className="group"
                                    placeholder="Download"
                                >
                                    <span className="tooltip-download group-hover:scale-100">
                                        Download
                                    </span>
                                    <CloudArrowDownIcon className="h-8 w-8 my-8   sidebar-icon" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="group"
                                    placeholder="Contact Us"
                                >
                                    <span className="tooltip-contactus group-hover:scale-100">
                                        Contact Us
                                    </span>
                                    <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 my-8   sidebar-icon" />
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="group"
                                    placeholder="Logout"
                                    onClick={(ev) => logout(ev)}
                                >
                                    <span className="tooltip-logout group-hover:scale-100">
                                        Logout
                                    </span>
                                    <UserIcon className="h-8 w-8 my-8  sidebar-icon" />
                                </a>
                            </li>
                            <li className="group">
                                <ThemeIcon />
                            </li>
                        </ul>
                    </div>
                </div>
                <Outlet />
            </nav>

            <nav className="block">
                <BotnavDark />
            </nav>
        </>
    );
}
