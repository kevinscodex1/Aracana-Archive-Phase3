import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios.js";
import { useStateContext } from "../context/ContextProvider";

export default function Login() {
    const { setCurrentUser, setUserToken } = useStateContext();

    const [login, setLogin] = useState("");
    // const [email, setEmail] = useState("");
    // const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/login", {
                login: login,
                password: password,
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    return (
        <>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                Sign In
            </h2>
            <p className="mt-2 text-center text-sm text-gray-200">
                Or{" "}
                <Link
                    to="/signup"
                    className="font-medium text-amber-500 hover:text-amber-500"
                >
                    Sign Up For Free
                </Link>
            </p>

            {error.__html && (
                <div
                    className="bg-red-500 rounded py-2 px-3 text-white"
                    dangerouslySetInnerHTML={error}
                ></div>
            )}

            <form
                onSubmit={onSubmit}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
            >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="login" className="sr-only">
                            Email or username
                        </label>
                        <input
                            id="login"
                            name="login"
                            type="text"
                            autoComplete="login"
                            required
                            value={login}
                            onChange={(ev) => setLogin(ev.target.value)}
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:ring-3 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                            placeholder="Email or username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:ring-3 focus:outline-none focus:ring-amber-500 focus:ring-inset-1 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-amber-500"
                        >
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a
                            href="#"
                            className="font-medium text-white hover:text-indigo-500"
                        >
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-500 py-2 px-4 text-sm font-bold text-black hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                                className="h-5 w-5 text-black group-hover:text-black"
                                aria-hidden="true"
                            />
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
}
