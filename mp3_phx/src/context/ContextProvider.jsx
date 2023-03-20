import React, { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    books: [],
    setCurrentUser: () => {},
    setUserToken: () => {},
    toast: {
        message: null,
        show: false,
    },
});

const tmpBooks = [
    {
        id: 1,
        image_url:
            "https://www.cloudways.com/blog/wp-content/uploads/Laravel-9.jpg",
        title: "TheCodeholic YouTube channel",
        slug: "thecodeholic-youtube-channel",
        status: true,
        summary: "",
        created_at: "2022-01-07 13:23:41",
        updated_at: "2022-01-18 16:34:19",
        chapters: [
            {
                id: 15,

                chapter: "From which country are you?",
                content: null,
            },
        ],
    },
    {
        id: 2,
        image_url:
            "https://www.cloudways.com/blog/wp-content/uploads/Laravel-9.jpg",
        title: "TheCodeholic YouTube channel",
        slug: "thecodeholic-youtube-channel",
        status: true,
        summary: "",
        created_at: "2022-01-07 13:23:41",
        updated_at: "2022-01-18 16:34:19",
        chapters: [
            {
                id: 15,

                chapter: "From which country are you?",
                content: null,
            },
        ],
    },
];

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(
        localStorage.getItem("TOKEN") || ""
    );
    const [books, setBooks] = useState(tmpBooks);
    const [toast, setToast] = useState({ message: "", show: false });
    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN");
        }
        _setUserToken(token);
    };

    const showToast = (message) => {
        setToast({ message, show: true });
        setTimeout(() => {
            setToast({ message: "", show: false });
        }, 5000);
    };
    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                books,
                toast,
                showToast,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
