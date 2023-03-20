import {
    ArrowTopRightOnSquareIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import TButton from "./core/TButton";

export default function BookListItem({ book, onDeleteClick }) {
    return (
        <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
            <img
                src={book.image_url}
                alt={book.title}
                className="w-full h-48 object-cover"
            />
            <h4 className="mt-4 text-lg font-bold">Title: {book.title}</h4>
            <h4 className="mt-4 text-lg font-bold">Author: {book.author}</h4>
            <h4 className="mt-4 text-lg font-bold">Summary:</h4>

            <div
                dangerouslySetInnerHTML={{ __html: book.summary }}
                className="overflow-hidden flex-1"
            ></div>

            <div className="flex justify-between items-center mt-3">
                <TButton to={`/archive/${book.id}`}>
                    <PencilIcon className="w-5 h-5 mr-2 " />
                    Edit
                </TButton>
                <div className="flex items-center">
                    <TButton href={`/view/archive/${book.slug}`} circle link>
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </TButton>

                    {book.id && (
                        <TButton
                            onClick={(ev) => onDeleteClick(book.id)}
                            circle
                            link
                            color="red"
                        >
                            <TrashIcon className="w-5 h-5" />
                        </TButton>
                    )}
                </div>
            </div>
        </div>
    );
}
