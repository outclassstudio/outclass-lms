"use client";

import Input from "@/components/common/input";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import { useActionState } from "react";
import { createClass } from "../actions";

export default function AddClassPage() {
  const [state, dispatch] = useActionState(createClass, null);

  return (
    <form
      action={dispatch}
      className="mt-6 sm:mt-10 w-full md:w-[768px] flex flex-col gap-4 sm:gap-8 p-4"
    >
      <div className="text-3xl sm:text-4xl font-black flex gap-2 items-center">
        <SquaresPlusIcon className="size-8 sm:size-10" />
        <span>클래스 등록</span>
      </div>
      <div className="mb-4 sm:mb-2 text-sm sm:text-base">
        <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
        항목이에요.
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-2 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">클래스명</div>
          <Input name="name" required errors={state?.fieldErrors.name} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">
            별칭(약칭)
          </div>
          <Input name="alias" required errors={state?.fieldErrors.alias} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">시작일</div>
          <input
            className="input-style py-2 px-3 bg-white w-full"
            type="date"
            name="startDate"
            required
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 mb-4">
          <div className="sm:text-lg font-semibold add-asterisk">종료일</div>
          <input
            className="input-style py-2 px-3 bg-white w-full"
            type="date"
            name="endDate"
            required
          />
          {state?.fieldErrors.endDate ? (
            <div className="text-red-500 text-sm">
              {state?.fieldErrors.endDate}
            </div>
          ) : (
            ""
          )}
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
