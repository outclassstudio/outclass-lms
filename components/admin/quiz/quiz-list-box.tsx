"use client";

import {
  deleteQuiz,
  editQuiz,
  QuizType,
} from "@/app/(main)/admin/quiz/actions";
import DeleteConfirmModal from "@/components/common/delete-confirm-modal";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function QuizListBox({ quiz }: { quiz: QuizType }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [quizTitle, setQuizTitle] = useState(quiz?.title);
  const router = useRouter();
  const pathname = usePathname();

  const handleDeleteModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const handleQuizEdit = async () => {
    if (quizTitle && quiz && isEdit) {
      await editQuiz(quizTitle, quiz.id, quiz.chapter.id, quiz.id, quiz.order);
    }
    setIsEdit((prev) => !prev);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizTitle(e.target.value);
  };

  const handleDelete = async () => {
    await deleteQuiz(quiz!.id);
    window.location.reload();
  };

  return (
    <>
      {isEdit ? (
        <div
          className="py-3 px-4 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs
        hover:bg-neutral-200"
        >
          <div className="flex-1 flex flex-col gap-2 items-baseline">
            <div className="text-sm text-neutral-500">
              {quiz?.chapter.title}
            </div>
            <input
              className="input-style"
              value={quizTitle}
              onChange={handleChangeTitle}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <button
              onClick={handleQuizEdit}
              className="text-xs sm:text-base primary-btn bg-green-500 hover:bg-green-400 py-1 px-2"
            >
              확인
            </button>
          </div>
        </div>
      ) : (
        <div
          className="py-3 px-4 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs
        hover:bg-neutral-200"
        >
          <div className="flex flex-col gap-2 items-baseline">
            <div className="text-sm text-neutral-500">
              {quiz?.chapter.title}
            </div>
            <div
              onClick={() => router.push(`${pathname}/${quiz?.id}`)}
              className="font-bold cursor-pointer"
            >
              {quiz?.title}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <button
              onClick={handleQuizEdit}
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
