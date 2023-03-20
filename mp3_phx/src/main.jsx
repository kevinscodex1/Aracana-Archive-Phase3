import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import "./main.css";
import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="dark:bg-[#000300] h-screen overflow-auto">
        <React.StrictMode>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </React.StrictMode>
    </div>
);
