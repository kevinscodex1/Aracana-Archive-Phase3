import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Signup() {
    const { setCurrentUser, setUserToken } = useStateContext();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/signup", {
                first_name: firstName,
                last_name: lastName,
                email: email,
                user_name: userName,
                password: password,
                password_confirmation: passwordConfirmation,
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
                    console.log(finalErrors);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    return (
        <>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                Sign Up for a free account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-200">
                <Link
                    to="/plans"
                    className="font-medium text-amber-500 hover:text-amber-500"
                >
                    {" "}
                    View Our Subscription Plans Here
                </Link>
            </p>

            <p className="mt-2 text-center text-sm text-gray-200">
                Or{" "}
                <Link
                    to="/login"
                    className="font-medium text-amber-500 hover:text-amber-500"
                >
                    {" "}
                    Log in to your existing account
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
                        <label htmlFor="first-name" className="sr-only">
                            First Name
                        </label>
                        <input
                            id="first-name"
                            name="first_name"
                            type="text"
                            required
                            value={firstName}
                            onChange={(ev) => setFirstName(ev.target.value)}
                            className="relative block w-full appearance-none rounded-md my-3 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:ring-3 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="sr-only">
                            Last Name
                        </label>
                        <input
                            id="last-name"
                            name="last_name"
                            type="text"
                            required
                            value={lastName}
                            onChange={(ev) => setLastName(ev.target.value)}
                            className="relative block w-full appearance-none rounded-md my-3 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:ring-3 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            className="relative block w-full appearance-none rounded-md my-3 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:ring-3 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="user-name" className="sr-only">
                            User Name
                        </label>
                        <input
                            id="user-name"
                            name="user_name"
                            type="text"
                            required
                            value={userName}
                            onChange={(ev) => setUserName(ev.target.value)}
                            className="relative block w-full appearance-none rounded-md my-3 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:ring-3 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                            placeholder="User Name"
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
                            required
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            className="relative block w-full appearance-none rounded-md my-3 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:ring- focus:outline-none focus:ring-amber-500 focus:ring-inset-1 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password-confirmation"
                            className="sr-only"
                        >
                            Password Confirmation
                        </label>
                        <input
                            id="password-confirmation"
                            name="password_confirmation"
                            type="password"
                            required
                            value={passwordConfirmation}
                            onChange={(ev) =>
                                setPasswordConfirmation(ev.target.value)
                            }
                            className="relative block w-full appearance-none rounded-md my-3 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:ring-3 focus:outline-none focus:ring-amber-500 focus:ring-inset-1 sm:text-sm"
                            placeholder="Password Confirmation"
                        />
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
                        Sign Up
                    </button>
                </div>
            </form>
        </>
    );
}
