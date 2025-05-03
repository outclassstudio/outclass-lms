"use client";

import Input from "@/components/common/input";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import {
  editQuiz,
  QuizType,
  SectionChapterListType,
} from "@/app/(main)/admin/quiz/actions";
import { useActionState, useEffect, useState } from "react";
import { FormError } from "@/lib/types/common";
import { ChapterState, useQuizStore } from "@/stores/quizStore";
import QuizSelectBox from "@/components/admin/quiz/quiz-select-box";

export default function EditQuizForm({ quiz }: { quiz: QuizType }) {
  const {
    selectedSection,
    selectedChapter,
    chapterList,
    setSelectedSection,
    setSelectedChapter,
    setChapterList,
  } = useQuizStore();
  const [state, dispatch] = useActionState(intercetpAcion, null);
  const [sectionList, setSectionList] = useState<SectionChapterListType>();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(quiz?.title);
  const [description, setDescription] = useState(quiz?.description);

  useEffect(() => {
    fetch("/api/quiz/section")
      .then((res) => res.json())
      .then((data) => {
        setSectionList(data);
        setSelectedSection(quiz!.chapter!.section!.title);
        setSelectedChapter(quiz!.chapter!.title);
      });
  }, []);

  useEffect(() => {
    if (!sectionList) return;
    initChapterList();
    setLoading(false);
  }, [selectedSection]);

  function intercetpAcion(_: FormError | null, formData: FormData) {
    const chapter = chapterList.filter(
      (chapter) => chapter.title === selectedChapter
    );
    formData.set("chapterId", chapter[0]!.id);

    return editQuiz(
      title!,
      description!,
      chapter[0]!.id,
      quiz!.id,
      quiz!.order
    );
  }

  function initChapterList() {
    if (selectedSection === "ALL") {
      let chapterList: ChapterState[] = [];
      sectionList?.forEach((section) => {
        if (chapterList.length > 0) {
          chapterList = [...chapterList, ...section.chapters];
        } else {
          chapterList = [...section.chapters];
        }
      });

      setChapterList(chapterList);
    } else {
      const filteredSection = sectionList?.filter(
        (section) => section.title === selectedSection
      );
      const chapter = filteredSection![0].chapters;

      setChapterList(chapter);
    }
  }

  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "ALL") {
      setSelectedSection("ALL");

      let chapterList: ChapterState[] = [];
      sectionList?.forEach((section) => {
        if (chapterList.length > 0) {
          chapterList = [...chapterList, ...section.chapters];
        } else {
          chapterList = [...section.chapters];
        }
      });

      setChapterList(chapterList);
    } else {
      setSelectedSection(e.target.value);

      const filteredSection = sectionList?.filter(
        (section) => section.title === e.target.value
      );
      const chapter = filteredSection![0].chapters;
      setChapterList(chapter);
    }
  };

  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChapter(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form
      action={dispatch}
      className="mt-6 sm:mt-10 w-full md:w-[768px] flex flex-col gap-4 sm:gap-8 p-4"
    >
      <div className="w-full sm:w-[640px] flex flex-col gap-4 p-4">
        <div className="text-3xl sm:text-4xl font-black flex gap-2 items-center">
          <SquaresPlusIcon className="size-8 sm:size-10" />
          <span>퀴즈 수정</span>
        </div>
        <div className="mb-4 sm:mb-2 text-sm sm:text-base flex flex-col gap-2">
          <div>
            ✅ <span className="text-red-500">*</span> 표시가 된 항목은 필수
            입력 항목이에요.
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-2">
          {loading ? (
            <div>Loading..</div>
          ) : (
            <QuizSelectBox
              sectionList={sectionList}
              handleSectionChange={handleSectionChange}
              handleChapterChange={handleChapterChange}
              isDisabled={true}
            />
          )}
          <div className="flex-2 flex flex-col gap-2 mb-4">
            <div className="sm:text-lg font-semibold add-asterisk">
              퀴즈 이름
            </div>
            <Input
              value={title}
              onChange={handleTitleChange}
              name="title"
              required
              errors={state?.fieldErrors.title}
            />
          </div>
          <div className="flex-2 flex flex-col gap-2 mb-8">
            <div className="sm:text-lg font-semibold add-asterisk">
              퀴즈 설명
            </div>
            <Input
              value={description}
              onChange={handleDescriptionChange}
              name="description"
              required
              errors={state?.fieldErrors.description}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="primary-btn p-2 font-semibold sm:text-lg bg-orange-500 hover:bg-orange-400 
            disabled:cursor-not-allowed disabled:bg-neutral-600"
            disabled={
              selectedChapter !== "ALL" && selectedSection !== "ALL"
                ? false
                : true
            }
          >
            수정하기
          </button>
        </div>
      </div>
    </form>
  );
}
