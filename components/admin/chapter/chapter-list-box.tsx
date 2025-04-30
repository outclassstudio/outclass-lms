"use client";

import {
  deleteChapter,
  editChapter,
} from "@/app/(main)/admin/section/[id]/chapter/actions";
import DeleteConfirmModal from "@/components/common/delete-confirm-modal";
import { useState } from "react";

// import { usePathname, useRouter } from "next/navigation";

export default function ChapterListBox({
  title,
  chapterId,
  order,
  sectionId,
}: {
  title: string;
  chapterId: string;
  order: number;
  sectionId: string;
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [chapterTitle, setChapterTitle] = useState(title);
  // const router = useRouter();
  // const pathname = usePathname();

  const handleChapterEdit = async () => {
    await editChapter(chapterTitle, order, sectionId, chapterId);

    setIsEdit((prev) => !prev);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChapterTitle(e.target.value);
  };

  const handleDeleteModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    await deleteChapter(chapterId);
    window.location.reload();
  };

  return (
    <>
      {isEdit ? (
        <div
          className="p-3 sm:p-5 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs 
        hover:bg-neutral-200 gap-10"
          // onClick={() => router.push(`${pathname}/chapter/${chapterId}`)}
        >
          <div className="flex-1 flex gap-2 font-bold text-xl sm:text-2xl">
            🗂️
            <input
              type="text"
              className="input-style w-full"
              value={chapterTitle}
              onChange={handleChangeTitle}
              name="title"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <button
              onClick={handleChapterEdit}
              className="text-xs sm:text-base primary-btn bg-green-500 hover:bg-green-400 py-1 px-2"
            >
              확인
            </button>
          </div>
        </div>
      ) : (
        <div
          className="p-3 sm:p-5 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs 
        hover:bg-neutral-200"
          // onClick={() => router.push(`${pathname}/chapter/${chapterId}`)}
        >
          <div className="flex flex-col gap-2">
            <div className="font-bold text-xl sm:text-2xl flex gap-2">
              <span>🗂️</span>
              <span>{chapterTitle}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <button className="text-xs sm:text-base primary-btn bg-amber-500 hover:bg-amber-400 py-1 px-2">
              퀴즈
            </button>
            <button
              onClick={handleChapterEdit}
              className="text-xs sm:text-base primary-btn bg-neutral-500 hover:bg-neutral-400 py-1 px-2"
            >
              수정
            </button>
            <button
              onClick={handleDeleteModalOpen}
              className="text-xs sm:text-base primary-btn bg-rose-500 hover:bg-rose-400 py-1 px-2"
            >
              삭제
            </button>
          </div>
        </div>
      )}
      {isModalOpen ? (
        <DeleteConfirmModal
          setModalOpen={handleDeleteModalOpen}
          handleDelete={handleDelete}
        />
      ) : (
        ""
      )}
    </>
  );
}
