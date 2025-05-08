"use client";

import CustomCheckbox from "@/components/common/custom-checkbox";
import Input from "@/components/common/input";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface ChoiceItem {
  id: number;
  content: string;
}

export default function QuestionAddPage() {
  const [isObjective, setIsObjective] = useState(true);
  const [choices, setChoices] = useState<ChoiceItem[]>();
  const [nextId, setNextId] = useState(1);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "OBJECTIVE") {
      setIsObjective(true);
    } else {
      setIsObjective(false);
    }
  };

  const handleAddChoice = () => {
    if (choices && choices.length > 0) {
      setChoices((prev) => [...prev!, { id: nextId, content: "" }]);
    } else {
      setChoices(() => [{ id: nextId, content: "" }]);
    }
    setNextId((prev) => prev + 1);
  };

  const handleRemoveChoice = (id: number) => {
    if (choices && choices.length > 0) {
      setChoices((prev) => prev!.filter((item) => item.id !== id));
    }
  };

  return (
    <form className="mt-6 sm:mt-10 w-full md:w-[768px] flex flex-col gap-4 sm:gap-8 p-4">
      <div className="text-3xl sm:text-4xl font-black flex gap-2 items-center">
        <SquaresPlusIcon className="size-8 sm:size-10" />
        <span>문제 만들기</span>
      </div>
      <div className="mb-4 sm:mb-2 text-sm sm:text-base">
        <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
        항목이에요.
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 p-1">
          <div className="sm:text-lg font-semibold add-asterisk">문제분류</div>
          <select
            onChange={handleTypeChange}
            className="input-style bg-white p-2"
            name="type"
            required
            // errors={state?.fieldErrors.name}
          >
            <option value={"OBJECTIVE"}>객관식</option>
            <option value={"SUBJECTIVE"}>주관식</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 p-1">
          <div className="sm:text-lg font-semibold add-asterisk">문제</div>
          <Input
            name="questionText"
            required
            // errors={state?.fieldErrors.name}
          />
        </div>
        <div className="flex flex-col gap-2 p-1">
          <div className="sm:text-lg font-semibold">문제 설명</div>
          <Input
            name="explanation"
            required
            // errors={state?.fieldErrors.alias}
          />
        </div>
        <div
          className={`flex flex-col gap-2 transition-all duration-400 ease-in-out overflow-hidden p-1 ${
            isObjective ? "max-h-0" : "max-h-96"
          }`}
        >
          <div className="sm:text-lg font-semibold">주관식 정답</div>
          <Input
            name="subjective"
            // errors={state?.fieldErrors.alias}
          />
        </div>
        <div
          className={`flex flex-col gap-2 transition-all duration-400 ease-in-out overflow-hidden p-1 ${
            isObjective ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="sm:text-lg font-semibold">객관식 지문 추가</div>
          <div
            onClick={handleAddChoice}
            className="border-[1px] border-dashed border-neutral-400 rounded-md flex justify-center p-2 
        bg-neutral-50 hover:bg-white cursor-pointer mb-2"
          >
            <PlusIcon className="size-6 text-neutral-800" />
          </div>
          <div className="flex flex-col gap-4">
            {choices && choices.length > 0
              ? choices.map((choice, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <Input name={`option`} />
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-neutral-700">정답</span>
                      <CustomCheckbox />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-neutral-700">삭제</span>
                      <div
                        onClick={() => handleRemoveChoice(choice.id)}
                        className="rounded-sm bg-red-500 hover:bg-red-400 cursor-pointer"
                      >
                        <XMarkIcon className="size-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      <div>
        <button className="primary-btn p-2 font-semibold sm:text-lg bg-orange-500 hover:bg-orange-400">
          등록하기
        </button>
      </div>
    </form>
  );
}
