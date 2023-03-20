import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaGithubSquare,
} from "react-icons/fa";
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    BellIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axios.js";
import Toast from "./Toast";

const navigation = [
    { name: "Home", to: "/home#hero" },
    { name: "Plans", to: "/plans" },
    { name: "Download", to: "/download-app" },
    { name: "Contact", to: "/contact" },
    { name: "Library", to: "/archive" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DefaultLayout() {
    const { currentUser, userToken, setCurrentUser, setUserToken } =
        useStateContext();

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
            <div className="min-h-full font-montserrat">
                <Disclosure as="nav" className="bg-[#000300] ">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-11">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <h1 className="w-full text-3xl font-bold text-white">
                                                <span className=" text-amber-500">
                                                    ARC
                                                </span>
                                                ANA
                                            </h1>
                                        </div>
                                        <div className="hidden md:block ">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <NavLink
                                                        key={item.name}
                                                        to={item.to}
                                                        className={({
                                                            isActive,
                                                        }) =>
                                                            classNames(
                                                                isActive
                                                                    ? "bg-gray-900 text-white"
                                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                                "px-3 py-2 rounded-md text-sm font-medium"
                                                            )
                                                        }
                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {/* Profile dropdown */}
                                            <Menu
                                                as="div"
                                                className="relative ml-3"
                                            >
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">
                                                            Open user menu
                                                        </span>
                                                        <UserIcon className="w-8 h-8 rounded-full text-black bg-amber-500" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {userToken ? (
                                                                <a
                                                                    href="#"
                                                                    onClick={(
                                                                        ev
                                                                    ) =>
                                                                        logout(
                                                                            ev
                                                                        )
                                                                    }
                                                                    className={
                                                                        "block px-4 py-2 text-sm text-gray-700"
                                                                    }
                                                                >
                                                                    Sign Out
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    to="/login"
                                                                    className={
                                                                        "block px-4 py-2 text-sm text-gray-700"
                                                                    }
                                                                >
                                                                    Sign in
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-amber-500 p-2 text-black hover:bg-amber-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            {open ? (
                                                <XMarkIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className={({ isActive }) =>
                                                classNames(
                                                    isActive
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "block px-3 py-2 rounded-md text-base font-medium"
                                                )
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pt-4 pb-3">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <UserIcon className="w-8 h-8 rounded-full text-black bg-amber-500" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">
                                                {currentUser.user_name}
                                            </div>
                                            <div className="text-sm font-medium leading-none text-gray-400">
                                                {currentUser.email}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userToken ? (
                                            <Disclosure.Button
                                                href="#"
                                                onClick={(ev) => logout(ev)}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                Sign Out
                                            </Disclosure.Button>
                                        ) : (
                                            <Link to="/login">
                                                <Disclosure.Button
                                                    href="#"
                                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                                >
                                                    Sign in
                                                </Disclosure.Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Toast />
                <Outlet />
                <section id="footer">
                    <div className="max-[1240px] mx-8 py-16 px grid lg:grid-cols-3 grid-rows-2 gap-8 text-white">
                        <div>
                            <h1 className="w-full text-3xl font-bold text-amber-500">
                                ARCANA
                            </h1>
                            <div className="text-xs">
                                <p className="py-4">
                                    PRIVACY POLICY <br />
                                    We respect your privacy and are committed to
                                    protecting your personal data. This privacy
                                    policy explains how we collect, use, and
                                    store your personal data when you visit our
                                    website or use our services. By using our
                                    website or services, you agree to the terms
                                    of this privacy policy.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 flex justify-between mt-6">
                            <div>
                                <h6 className="font-medium">COMPANY</h6>
                                <ul>
                                    <li className="py-2 text-sm">About</li>
                                    <li className="py-2 text-sm">Jobs</li>
                                    <li className="py-2 text-sm">
                                        For the Record
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="font-medium">COMMUNITIES</h6>
                                <ul>
                                    <li className="py-2 text-sm">
                                        For Artists
                                    </li>
                                    <li className="py-2 text-sm">Developers</li>
                                    <li className="py-2 text-sm">
                                        Advertising
                                    </li>
                                    <li className="py-2 text-sm">Vendors</li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="font-medium">Useful Links</h6>
                                <ul>
                                    <li></li>
                                    <li className="py-2 text-sm">Support</li>
                                    <li className="py-2 text-sm">Web Player</li>
                                    <li className="py-2 text-sm">
                                        Free Mobile App
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-sm pt-6 lg:col-span-3 text-centered">
                            &copy; ARCANA ARCHIVE ltd. 2023 All Rights Reserved
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
