import React from "react";
import "../sub.css";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import ThemeIcon2 from "../components/themeButton2";
import arcanaLogo from "../assets/img/Arcana_logo.png";

export default function BotnavDark() {
    return (
        <div>
            <nav>
                {/* botnav */}
                <div>
                    <nav>
                        <div className="fixed bottom-0 left-0 h-16 w-screen sm:block md:hidden bg-white text-black dark:bg-secondary dark:text-white shadow-lg">
                            <ul className="flex flex-row justify-center">
                                <li>
                                    <a href="#" className="group ">
                                        <img
                                            src={arcanaLogo}
                                            alt=""
                                            id="logo"
                                            className="h-12 w-12 botbar-icon relative mt-2 mx-2"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group">
                                        <span className="tooltip-bot-home group-hover:scale-100">
                                            Home
                                        </span>
                                        <HomeIcon className="h-6 w-6 mt-5 mx-1.5   botbar-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group">
                                        <span className="tooltip-bot-user-profile group-hover:scale-100">
                                            User Profile
                                        </span>
                                        <UserCircleIcon className="h-6 w-6 mt-5 mx-1.5   botbar-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group">
                                        <span className="tooltip-bot-about group-hover:scale-100">
                                            About
                                        </span>
                                        <InformationCircleIcon className="h-6 w-6 mt-5 mx-1.5    botbar-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group">
                                        <span className="tooltip-bot-plans group-hover:scale-100">
                                            Plans
                                        </span>
                                        <BookOpenIcon className="h-6 w-6 mt-5 mx-1.5    botbar-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group">
                                        <span className="tooltip-bot-download group-hover:scale-100">
                                            Download
                                        </span>
                                        <CloudArrowDownIcon className="h-6 w-6 mt-5 mx-1.5    botbar-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group">
                                        <span className="tooltip-bot-contactus group-hover:scale-100">
                                            Contact Us
                                        </span>
                                        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 mt-5 mx-1.5    botbar-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="group">
                                        <span className="tooltip-bot-logout group-hover:scale-100">
                                            Logout
                                        </span>
                                        <UserIcon className="h-6 w-6 mt-5 mx-1.5   botbar-icon" />
                                    </a>
                                </li>
                                <li className="group" id="botdark">
                                    <ThemeIcon2 />
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    );
}
