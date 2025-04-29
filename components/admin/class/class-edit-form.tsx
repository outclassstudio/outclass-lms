"use client";

import { ClassType, editClass } from "@/app/(main)/admin/class/actions";
import { useActionState, useState } from "react";
import Input from "../../common/input";
import { dateFormatter } from "@/lib/utils";
import { FormError } from "@/lib/types/common";

interface EditClassProps {
  id: string;
  targetClass: ClassType;
}

export default function ClassEditForm({ id, targetClass }: EditClassProps) {
  const [state, dispatch] = useActionState(interceptAction, null);
  const [name, setName] = useState(targetClass?.name);
  const [alias, setAlias] = useState(targetClass?.alias);
  const [startDate, setStartDate] = useState(targetClass?.startDate);
  const [endDate, setEndDate] = useState(targetClass?.endDate);

  function interceptAction(_: FormError | null, formdata: FormData) {
    return editClass(id, formdata);
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(e.target.value);
  };
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value));
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value));
  };

  return (
    <form
      action={dispatch}
      className="mt-6 sm:mt-10 w-full md:w-[768px] flex flex-col gap-4 sm:gap-8 p-4"
    >
      <div className="text-3xl sm:text-4xl font-black flex gap-2 items-center">
        <span>🛠️ 클래스 수정</span>
      </div>
      <div className="mb-4 sm:mb-2 text-sm sm:text-base">
        <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
        항목이에요.
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-2 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">클래스명</div>
          <Input
            name="name"
            required
            errors={state?.fieldErrors.name}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">
            별칭(약칭)
          </div>
          <Input
            name="alias"
            required
            errors={state?.fieldErrors.alias}
            value={alias}
            onChange={handleAliasChange}
          />
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
            value={dateFormatter(startDate!)}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 mb-4">
          <div className="sm:text-lg font-semibold add-asterisk">종료일</div>
          <input
            className="input-style py-2 px-3 bg-white w-full"
            type="date"
            name="endDate"
            required
            value={dateFormatter(endDate!)}
            onChange={handleEndDateChange}
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
          수정하기
        </button>
      </div>
    </form>
  );
}
