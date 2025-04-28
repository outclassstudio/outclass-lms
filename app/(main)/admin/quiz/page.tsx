"use client";

import QuizListBox from "@/components/admin/quiz/quiz-list-box";
import {
  DUMMY_CHAPTER_LIST,
  DUMMY_QUIZ_LIST,
  DUMMY_SECTION_LIST,
} from "@/lib/dummyData";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function QuizAdmin() {
  const [isSectionSelected, setIsSectionSelected] = useState(false);
  const [quizList, setQuizList] = useState(DUMMY_QUIZ_LIST);
  const [filteredQuizList, setFilteredQuizList] = useState(DUMMY_QUIZ_LIST);

  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "전체보기") {
      setQuizList(DUMMY_QUIZ_LIST);
    } else {
      const filtered = DUMMY_QUIZ_LIST.filter(
        (quiz) => quiz.section === e.target.value
      );
      setQuizList(filtered);
      setFilteredQuizList(filtered);
    }
    setIsSectionSelected(true);
  };

  const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "전체보기") {
      setQuizList(filteredQuizList);
    } else {
      setQuizList(() =>
        filteredQuizList.filter((quiz) => quiz.chapter === e.target.value)
      );
    }
  };

  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <span>🎯 퀴즈 관리</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-lg">섹션 선택</div>
          <select
            onChange={handleSectionChange}
            className="bg-white py-4 px-2 sm:p-4 text-sm sm:text-base border-[1px] border-neutral-200"
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled hidden>
              섹션을 선택해주세요.
            </option>
            <option>전체보기</option>
            {DUMMY_SECTION_LIST.map((section) => (
              <option key={section.id}>{section.title}</option>
            ))}
          </select>
        </div>
        {isSectionSelected ? (
          <div className="flex flex-col gap-2">
            <div className="font-bold text-lg">챕터 선택</div>
            <select
              onChange={handleChapterChange}
              className="bg-white py-4 px-2 sm:p-4 text-sm sm:text-base border-[1px] border-neutral-200"
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled hidden>
                챕터를 선택해주세요.
              </option>
              <option>전체보기</option>
              {DUMMY_CHAPTER_LIST.map((chapter) => (
                <option key={chapter.id}>{chapter.title}</option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}
      </div>
      {isSectionSelected ? (
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
              className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
      flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
            >
              <PlusIcon className="size-5 sm:size-6" />
              퀴즈 만들기
            </div>
          </div>
          {quizList.length > 0 ? (
            quizList.map((quiz, idx) => (
              <QuizListBox
                title={quiz.title}
                chapter={quiz.chapter}
                key={idx}
              />
            ))
          ) : (
            <div className="py-10 flex items-center justify-center bg-white border-neutral-200 border-[1px] shadow-xs">
              퀴즈가 존재하지 않습니다.
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
