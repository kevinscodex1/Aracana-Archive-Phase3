import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

export default function ChapterEditor({
    index = 0,
    chapter,
    deleteChapter,
    chapterChange,
}) {
    const [model, setModel] = useState({ ...chapter });

    useEffect(() => {
        chapterChange(model);
    }, [model]);

    return (
        <div>
            <div className="ml-5 mt-3 flex justify-between mb-3">
                <h4>
                    {index + 1}. {model.chapter}
                </h4>
                <div className="flex items-center mr-5 mt-3">
                    <button
                        type="button"
                        className="
            flex
            items-center
            text-xs
            py-1
            px-3
            rounded-sm
            border border-transparent
            text-red-500
            hover:border-red-600
            font-semibold
          "
                        onClick={() => deleteChapter(chapter)}
                    >
                        <TrashIcon className="w-4" />
                        Delete
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="ml-5 mb-3 flex flex-col">
                    <label
                        htmlFor="chapter"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Chapter title and number
                    </label>
                    <input
                        type="text"
                        name="chapter"
                        id="chapter"
                        value={model.chapter}
                        onChange={(ev) =>
                            setModel({ ...model, chapter: ev.target.value })
                        }
                        className="mt-1 block w-80 p-2 rounded-md border-black border sm:text-sm"
                    />
                </div>
                {/* ChapterContent */}
                <div className="ml-5 mb-5 flex flex-col">
                    <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Content
                    </label>
                    <textarea
                        name="content"
                        id="content"
                        value={model.content || ""}
                        onChange={(ev) =>
                            setModel({ ...model, content: ev.target.value })
                        }
                        className="mt-1 block md:w-[700px] w-80 p-3 rounded-md border-black border sm:text-sm"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}
