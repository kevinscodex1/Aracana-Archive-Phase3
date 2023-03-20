import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import TButton from "../components/core/TButton";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios.js";
import { useNavigate, useParams } from "react-router-dom";
import BookChapters from "../components/BookChapters";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";
import { LinkIcon, TrashIcon } from "@heroicons/react/20/solid";

export default function BookView() {
    const { showToast } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const [book, setBooks] = useState({
        title: "",
        author: "",
        slug: "",
        status: false,
        summary: "",
        image: null,
        image_url: null,
        chapters: [],
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onImageChoose = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setBooks({
                ...book,
                image: file,
                image_url: reader.result,
            });
            ev.target.value = "";
        };
        reader.readAsDataURL(file);
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = { ...book };
        if (payload.image) {
            payload.image = payload.image_url;
        }
        delete payload.image_url;
        let res = null;
        if (id) {
            res = axiosClient.put(`/archive/${id}`, payload);
        } else {
            res = axiosClient.post("/archive", payload);
        }
        res.then((res) => {
            console.log(res);
            navigate("/archive");
            if (id) {
                showToast("Book is Updated");
            } else {
                showToast("Book is Created");
            }
        }).catch((err) => {
            if (err && err.response) {
                setError(err.response.data.message);
            }
            console.log(err, err.response);
        });
    };
    function onChaptersUpdate(chapters) {
        setBooks({ ...book, chapters });
    }

    const addChapter = () => {
        book.chapters.push({
            id: uuidv4(),
            chapter: "",
            description: "",
            content: "",
            data: {},
        });
        setBooks({ ...book });
    };

    const onDelete = () => {};

    useEffect(() => {
        if (id) {
            setLoading(true);
            axiosClient.get(`/archive/${id}`).then(({ data }) => {
                setBooks(data.data);
                setLoading(false);
            });
        }
    }, []);

    return (
        <PageComponent
            title={!id ? "Create a new World" : "Update Book"}
            buttons={
                <div className="flex gap-2">
                    <TButton
                        color="green"
                        href={`/archive/public/${book.slug}`}
                        className="text-black"
                    >
                        <LinkIcon className="h-4 w-4 mr-2" />
                        Public Link
                    </TButton>
                    <TButton
                        color="red"
                        onClick={onDelete}
                        className="text-black"
                    >
                        <TrashIcon className="h-4 w-4 mr-2" />
                        Delete
                    </TButton>
                </div>
            }
        >
            {loading && (
                <div className="text-center text-lg text-white">Loading...</div>
            )}
            {!loading && (
                <form action="" method="POST" onSubmit={onSubmit}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            {error && (
                                <div className="bg-red-500 text-white py-3 px-3">
                                    {error}
                                </div>
                            )}
                            {/* Image */}
                            <div>
                                <label
                                    htmlFor=""
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Thumbnail
                                </label>
                                <div className="mt-1 flex items-center">
                                    {book.image_url && (
                                        <img
                                            src={book.image_url}
                                            alt=""
                                            className="w-32 h-32 object-cover"
                                        />
                                    )}

                                    {!book.image_url && (
                                        <span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                            <PhotoIcon className="w-8 h-8" />
                                        </span>
                                    )}
                                    <button
                                        type="button"
                                        className=" relative ml-5 rounded-md border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <input
                                            type="file"
                                            className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                                            onChange={onImageChoose}
                                        />
                                        Change
                                    </button>
                                </div>
                            </div>
                            {/* Image */}

                            {/* Title */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Book Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={book.title}
                                    onChange={(ev) =>
                                        setBooks({
                                            ...book,
                                            title: ev.target.value,
                                        })
                                    }
                                    placeholder="Book Title"
                                    className="mt-1 block w-full p-3 border-black border rounded-md  shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="author"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Author
                                </label>
                                <input
                                    type="text"
                                    name="author"
                                    id="author"
                                    value={book.author}
                                    onChange={(ev) =>
                                        setBooks({
                                            ...book,
                                            author: ev.target.value,
                                        })
                                    }
                                    placeholder="Book Author"
                                    className="mt-1 block w-full p-3 border-black border rounded-md  shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            {/* Title */}

                            {/* description */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="summary"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Summary
                                </label>
                                <textarea
                                    type="text"
                                    name="summary"
                                    id="summary"
                                    value={book.summary}
                                    onChange={(ev) =>
                                        setBooks({
                                            ...book,
                                            summary: ev.target.value,
                                        })
                                    }
                                    placeholder="Summary"
                                    className="mt-1 block w-full p-3 border-black border rounded-md  shadow-sm focus:border-indigo-50 focus:ring-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            {/* description */}

                            {/* Active */}
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input
                                        id="status"
                                        name="status"
                                        type="checkbox"
                                        checked={book.status}
                                        onChange={(ev) =>
                                            setBooks({
                                                ...book,
                                                status: ev.target.checked,
                                            })
                                        }
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="comments"
                                        className="font-medium text-gray-700"
                                    >
                                        Active
                                    </label>
                                    <p className="text-gray-500">
                                        Whether to publish the book or keep it
                                        private
                                    </p>
                                </div>
                            </div>

                            {/* Active */}
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 ">
                            <TButton color="amber-light" className="text-black">
                                Save
                            </TButton>
                        </div>
                    </div>
                </form>
            )}
            <div className="bg-white mt-5 shadow sm:overflow-hidden sm:rounded-md">
                <BookChapters
                    chapters={book.chapters}
                    onChaptersUpdate={onChaptersUpdate}
                />
            </div>
        </PageComponent>
    );
}
