"use client";

import {
  QuizListType,
  SectionChapterListType,
} from "@/app/(main)/admin/quiz/actions";
import QuizListBox from "@/components/admin/quiz/quiz-list-box";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import QuizSelectBox from "./quiz-select-box";
import { useQuizStore } from "@/stores/quizStore";
import { useRouter } from "next/navigation";

export interface ChapterState {
  id: string;
  title: string;
  order: number;
  sectionId: string | null;
}

export default function QuizListForm({
  sectionList,
  quizListProp,
}: {
  sectionList: SectionChapterListType;
  quizListProp: QuizListType;
}) {
  const {
    selectedSection,
    setIsSectionSelected,
    setSelectedSection,
    setSelectedChapter,
    setChapterList,
  } = useQuizStore();

  const [quizList, setQuizList] = useState<QuizListType>(quizListProp);
  const [filteredQuizList, setFilteredQuizList] =
    useState<QuizListType>(quizListProp);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setSelectedSection("ALL");
    setSelectedChapter("ALL");
  }, []);

  useEffect(() => {
    if (!sectionList) return;
    initChapterList();
    setLoading(false);
  }, [selectedSection]);

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
      setQuizList(quizListProp);
      setSelectedSection("ALL");
      setSelectedChapter("ALL");

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
      const filtered = quizListProp!.filter(
        (quiz) => quiz.chapter.section?.title === e.target.value
      );
      setQuizList(filtered);
      setFilteredQuizList(filtered);
      setSelectedSection(e.target.value);

      const filteredSection = sectionList?.filter(
        (section) => section.title === e.target.value
      );
      const chapter = filteredSection![0].chapters;
      setChapterList(chapter);
    }
    setIsSectionSelected(true);
  };

  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "ALL") {
      setQuizList(filteredQuizList);
    } else {
      setQuizList(() =>
        filteredQuizList!.filter(
          (quiz) => quiz.chapter.title === e.target.value
        )
      );
    }
    setSelectedChapter(e.target.value);
  };

  return (
    <div className="mt-6 mb-10 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <span>💯 퀴즈 관리</span>
      </div>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <QuizSelectBox
          handleSectionChange={handleSectionChange}
          handleChapterChange={handleChapterChange}
          sectionList={sectionList}
        />
      )}
      <div>
        <div className="flex flex-col sm:flex-row mb-6 sm:mb-4 sm:justify-between gap-2">
          <div className="flex gap-2 border-[1px] border-neutral-200 items-center py-3 px-4 bg-white ">
            <input
              type="text"
              className="outline-none w-full placeholder:text-sm"
              placeholder="퀴즈를 검색하세요."
            />
            <MagnifyingGlassIcon className="size-6 text-neutral-400" />
          </div>
          <div
            onClick={() => router.push("/admin/quiz/add")}
            className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
              flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
          >
            <PlusIcon className="size-5 sm:size-6" />
            퀴즈 만들기
          </div>
        </div>
        {quizList && quizList.length > 0 ? (
          quizList.map((quiz, idx) => <QuizListBox quiz={quiz} key={idx} />)
        ) : (
          <div className="py-10 flex items-center justify-center bg-white border-neutral-200 border-[1px] shadow-xs">
            퀴즈가 존재하지 않습니다.
          </div>
        )}
      </div>
    </div>
  );
}
