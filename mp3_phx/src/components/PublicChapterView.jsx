export default function PublicChapterView({ chapter, index }) {
    return (
        <>
            <div className="flex mb-4 text-base font-medium text-amber-500">
                Chapter {index + 1} : {chapter.chapter} <br />
                {chapter.created_at}
            </div>
        </>
    );
}
