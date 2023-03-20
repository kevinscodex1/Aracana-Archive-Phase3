import { PlusIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChapterEditor from "./ChapterEditor";

export default function BookChapters({ chapters, onChaptersUpdate }) {
    const [myChapters, setMyChapters] = useState([...chapters]);

    const addChapter = (index) => {
        index = index !== undefined ? index : myChapters.length;
        myChapters.splice(index, 0, {
            id: uuidv4(),
            chapter: "",
            content: "",
            created_at: {},
            data: {},
        });
        setMyChapters([...myChapters]);
        onChaptersUpdate(myChapters);
    };

    const chapterChange = (chapter) => {
        if (!chapter) return;
        const newChapters = myChapters.map((c) => {
            if (c.id == chapter.id) {
                return { ...chapter };
            }
            return c;
        });
        setMyChapters(newChapters);
        onChaptersUpdate(newChapters);
    };

    const deleteChapter = (chapter) => {
        const newChapters = myChapters.filter((c) => c.id !== chapter.id);
        setMyChapters(newChapters);
        onChaptersUpdate(newChapters);
    };

    useEffect(() => {
        setMyChapters(chapters);
    }, [chapters]);

    return (
        <>
            {" "}
            <div className="">
                <div className="flex justify-between md:mt-5">
                    <h3 className="text-2xl font-bold ml-5 mt-5">Chapters</h3>

                    <button
                        className="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700 mr-5 mt-5"
                        onClick={() => addChapter()}
                    >
                        <PlusIcon className="w-4 mr-2" />
                        Add Chapter
                    </button>
                </div>
                {myChapters.length ? (
                    myChapters.map((c, ind) => (
                        <ChapterEditor
                            key={c.id}
                            index={ind}
                            chapter={c}
                            chapterChange={chapterChange}
                            deleteChapter={deleteChapter}
                        />
                    ))
                ) : (
                    <div className="text-gray-400 text-center py-4">
                        You don't have any chapters created
                    </div>
                )}
            </div>
        </>
    );
}
