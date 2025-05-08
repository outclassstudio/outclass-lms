"use client";

import { useState } from "react";

interface QuestionObjectiveProp {
  id: number;
  type: string;
  questionText: string;
  explanation: string;
  options: string[];
  answer: string[];
  subjective?: undefined;
}

interface QuestionSubjectiveProp {
  id: number;
  type: string;
  questionText: string;
  explanation: string;
  subjective: string;
  options?: undefined;
  answer?: undefined;
}

export default function QuestionItem({
  question,
}: {
  question: QuestionObjectiveProp | QuestionSubjectiveProp;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChoices = () => setIsOpen((prev) => !prev);

  return (
    <div className="p-3 sm:p-8 flex flex-col items-start bg-white border-neutral-200 border-[1px] shadow-xs gap-4">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-1">
          <div className="flex">
            <div
              className={`text-xs sm:text-sm p-1 rounded-md ${
                question.type === "OBJECTIVE" ? "bg-amber-500" : "bg-purple-500"
              } text-white text-center`}
            >
              {question.type === "OBJECTIVE" ? "객관식" : "주관식"}
            </div>
          </div>
          <div className="flex gap-2 flex-col sm:flex-row sm:justify-between">
            <div className="font-bold text-xl sm:text-2xl ">
              {question.questionText}
            </div>
            <div className="flex justify-end sm:justify-start gap-1">
              <button
                onClick={toggleChoices}
                className="text-xs sm:text-sm text-white rounded-md py-1 px-2 bg-neutral-500 hover:bg-neutral-400 cursor-pointer"
              >
                {isOpen ? "닫기" : "보기"}
              </button>
              <button className="text-xs sm:text-sm text-white rounded-md bg-red-500 hover:bg-red-400 py-1 px-2 cursor-pointer">
                편집
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex flex-col gap-4 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {question.options ? (
          <div className="flex flex-col gap-1 w-full">
            {question.options.map((option, idx) => (
              <div
                className="p-2 bg-neutral-100 rounded-sm text-sm sm:text-base text-neutral-800"
                key={idx}
              >
                {option}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        <div className="w-full flex flex-col gap-1">
          <div className="font-semibold">정답</div>
          {question.type === "OBJECTIVE" ? (
            question.answer!.map((asnwer, idx) => (
              <span
                className="p-2 bg-neutral-100 rounded-sm text-sm sm:text-base text-neutral-800"
                key={idx}
              >
                {asnwer}
              </span>
            ))
          ) : (
            <span className="p-2 bg-neutral-100 rounded-sm text-sm sm:text-base text-neutral-800">
              {question.subjective}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
