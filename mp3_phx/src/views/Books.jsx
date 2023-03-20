import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TButton from "../components/core/TButton";
import PageComponent from "../components/PageComponent";
import BookListItem from "../components/BookListItem";
import { useStateContext } from "../context/ContextProvider";
import { useEffect, useState } from "react";
import axiosClient from "../axios";
import PaginationLinks from "../components/PaginationLinks";

export default function Books() {
    // const { books } = useStateContext();
    const { showToast } = useStateContext();
    const [books, setBooks] = useState([]);
    const [meta, setMeta] = useState({});

    const [loading, setLoading] = useState(false);

    const onDeleteClick = (id) => {
        if (window.confirm(`Are you sure you want to delete this survey?`)) {
            axiosClient.delete(`/archive/${id}`).then(() => {
                getBooks();
                showToast("The Book was deleted");
            });
        }
    };

    const onPageClick = (link) => {
        getBooks(link.url);
    };

    const getBooks = (url) => {
        url = url || "/archive";
        setLoading(true);
        axiosClient.get(url).then(({ data }) => {
            setBooks(data.data);
            setMeta(data.meta);
            setLoading(false);
        });
    };
    useEffect(() => {
        getBooks();
    }, []);
    return (
        <PageComponent
            title="The Archive"
            buttons={
                <TButton
                    color="green"
                    to="/archive/create"
                    className="text-black"
                >
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create new
                </TButton>
            }
        >
            {loading && (
                <div className="text-center text-lg text-white">Loading...</div>
            )}
            {!loading && (
                <div>
                    {books.length === 0 && (
                        <div className="py-8 text-center text-white">
                            Archive is Empty
                        </div>
                    )}
                    <div className=" first-letter:grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                        {books.map((book) => (
                            <BookListItem
                                book={book}
                                key={book.id}
                                onDeleteClick={onDeleteClick}
                            />
                        ))}
                    </div>
                    {books.length > 0 && (
                        <PaginationLinks
                            meta={meta}
                            onPageClick={onPageClick}
                        />
                    )}
                </div>
            )}
        </PageComponent>
    );
}
