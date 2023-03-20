import React from "react";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";
import ThemeIconAdmin from "./adminThemeButton";
import "../sub.css";
export default function adminSidebarLayout() {
  const [open, setOpen] = useState(true);
  return (
    <div className="">
      <div
        className={`bg-white dark:bg-secondary h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative flex flex-col`}
      >
        <ul className="flex flex-col">
          <li>
            <img
              src="/img/Arcana_logo.png"
              alt="Arcana Logo"
              className="bg-secondary text-black text-3xl rounded-full absolute left-3.5 top-6 h-12 w-12 cursor-pointer sidebar-icon"
              onClick={() => setOpen(!open)}
            />
            <h1
              className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 top-10 ${
                !open && "scale-0"
              }`}
            >
              ARCANA
            </h1>
          </li>
          <li>
            <a href="#" className="group" placeholder="Home">
              <HomeIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5" />
              <h1
                className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 home ${
                  !open && "scale-0"
                }`}
              >
                Home
              </h1>
            </a>
          </li>
          <li>
            <a href="#" className="group" placeholder="Home">
              <UserCircleIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 usercircle" />
              <h1
                className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 admin ${
                  !open && "scale-0"
                }`}
              >
                User Admin
              </h1>
            </a>
          </li>
          <li>
            <a href="#" className="group" placeholder="Home">
              <InformationCircleIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 infocircle" />
              <h1
                className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 about ${
                  !open && "scale-0"
                }`}
              >
                About
              </h1>
            </a>
          </li>
          <li>
            <a href="#" className="group" placeholder="Home">
              <BookOpenIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 bookopen" />
              <h1
                className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 plans ${
                  !open && "scale-0"
                }`}
              >
                Plans
              </h1>
            </a>
          </li>
          <li>
            <a href="#" className="group" placeholder="Home">
              <CloudArrowDownIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 cloud" />
              <h1
                className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 download ${
                  !open && "scale-0"
                }`}
              >
                Download
              </h1>
            </a>
          </li>
          <li>
            <a href="#" className="group" placeholder="Home">
              <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 chat" />
              <h1
                className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 contact ${
                  !open && "scale-0"
                }`}
              >
                Contact Us
              </h1>
            </a>
          </li>
          <li>
            <a href="#" className="group" placeholder="Home">
              <UserIcon className="h-12 w-12 my-20 sidebar-icon absolute left-3.5 user" />
              <h1
                className={`text-secondary dark:text-white origin-left font-medium text-2xl absolute left-20 logout ${
                  !open && "scale-0"
                }`}
              >
                Logout
              </h1>
            </a>
          </li>
          <li>
            <ThemeIconAdmin />
            <h1
              className={`text-secondary dark:text-white  origin-left font-medium text-2xl absolute left-20 theme ${
                !open && "scale-0"
              }`}
            >
              Theme
            </h1>
          </li>
        </ul>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="flex"></div>
      </div>

      <Outlet />
    </div>
  );
}
