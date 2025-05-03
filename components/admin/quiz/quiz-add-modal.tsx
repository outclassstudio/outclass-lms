"use client";

import Input from "@/components/common/input";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import QuizSelectBox from "./quiz-select-box";
import {
  createQuiz,
  SectionChapterListType,
} from "@/app/(main)/admin/quiz/actions";
// import { ChapterState } from "./quiz-list-form";
import { useActionState } from "react";
import { FormError } from "@/lib/types/common";
import { useQuizStore } from "@/stores/quizStore";

interface AddQuizModalProps {
  sectionList: SectionChapterListType;
  setModalOpen: () => void;
  handleSectionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChapterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // selectedSection: string;
  // isSectionSelected: boolean;
  // chapterList: ChapterState[];
  // selectedChapter: string;
}

export default function AddQuizModal({
  sectionList,
  setModalOpen,
  handleSectionChange,
  handleChapterChange,
}: AddQuizModalProps) {
  const { selectedChapter, chapterList } = useQuizStore();
  const [state, dispatch] = useActionState(intercetpAcion, null);

  function intercetpAcion(_: FormError | null, formData: FormData) {
    const chapter = chapterList.filter(
      (chapter) => chapter.title === selectedChapter
    );
    formData.set("chapterId", chapter[0]!.id);
    setModalOpen();
    return createQuiz(null, formData);
  }

  return (
    <div
      className="fixed h-screen w-full top-0 left-0 flex flex-col z-10
      justify-center items-center"
    >
      <div
        className="bg-white px-14 sm:px-24 py-8 sm:py-14 z20 shadow-lg rounded-md
      flex flex-col gap-2"
      >
        <form
          action={dispatch}
          className="w-full sm:w-[640px] flex flex-col gap-4 p-4"
        >
          <div className="text-3xl sm:text-4xl font-black flex gap-2 items-center">
            <SquaresPlusIcon className="size-8 sm:size-10" />
            <span>퀴즈 등록</span>
          </div>
          <div className="mb-4 sm:mb-2 text-sm sm:text-base">
            <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
            항목이에요.
          </div>
          <div className="flex-2 flex flex-col gap-2">
            <QuizSelectBox
              handleSectionChange={handleSectionChange}
              sectionList={sectionList}
              handleChapterChange={handleChapterChange}
              isDisabled={true}
            />
            <div className="flex-2 flex flex-col gap-2 mb-4">
              <div className="sm:text-lg font-semibold add-asterisk">
                퀴즈 이름
              </div>
              <Input name="title" required errors={state?.fieldErrors.title} />
            </div>
            <div className="flex-2 flex flex-col gap-2 mb-8">
              <div className="sm:text-lg font-semibold add-asterisk">
                퀴즈 설명
              </div>
              <Input
                name="description"
                required
                errors={state?.fieldErrors.description}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="primary-btn p-2 font-semibold sm:text-lg bg-orange-500 hover:bg-orange-400">
              등록하기
            </button>
            <button
              onClick={setModalOpen}
              className="primary-btn p-2 font-semibold sm:text-lg bg-neutral-500 hover:bg-neutral-400"
            >
              닫기
            </button>
          </div>
        </form>
      </div>
      <div
        className="fixed h-screen w-full top-0 left-0 bg-neutral-800 opacity-30 -z-10"
        onClick={setModalOpen}
      />
    </div>
  );
}
