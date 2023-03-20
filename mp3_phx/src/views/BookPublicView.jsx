import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axios.js";
import PublicChapterView from "../components/PublicChapterView";

export default function BookPublicView() {
    const [book, setBooks] = useState({
        chapters: [],
    });
    const [loading, setLoading] = useState(false);
    const { slug } = useParams();

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/archive/get-by-slug/${slug}`)
            .then(({ data }) => {
                setLoading(false);
                setBooks(data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div className=" container mx-auto p-4 text-white">
            {loading && (
                <div className="flex justify-center text-5xl">Loading..</div>
            )}
            {!loading && (
                <div>
                    <div className="grid grid-cols-6">
                        <div className="mr-4">
                            <img src={book.image_url} alt="" />
                        </div>
                        <div className="inline-block col-span-5">
                            <h1 className="text-3xl">{book.title}</h1>
                            <p className="text-sm">{book.author}</p>
                            <p className="text-sm">{book.summary}</p>
                        </div>
                    </div>
                    <div className="mr-20 p-6">
                        Chapters:
                        {book.chapters.map((chapter, index, created_at) => (
                            <PublicChapterView
                                key={chapter.id}
                                chapter={chapter}
                                created_at={created_at}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
