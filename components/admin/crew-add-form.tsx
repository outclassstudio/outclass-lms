"use client";

import { createCrew } from "@/app/(main)/admin/class/crew/actions";
import Input from "@/components/common/input";
import { FormError } from "@/lib/types/common";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import { useActionState, useState } from "react";

export default function AddCrewForm({
  classNameList,
}: {
  classNameList: { id: string; name: string }[];
}) {
  const [state, dispatch] = useActionState(interceptAction, null);
  const [password, setPassword] = useState("1234");
  const [selectedClass, setSelectedClass] = useState(classNameList[0].name);

  function interceptAction(_: FormError | null, formData: FormData) {
    const filtered = classNameList.filter((data) => data.name == selectedClass);
    formData.set("class", filtered[0].id);

    return createCrew(_, formData);
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeClass = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  return (
    <form
      action={dispatch}
      className="mt-6 sm:mt-10 w-full md:w-[768px] flex flex-col gap-4 sm:gap-8 p-4"
    >
      <div className="text-3xl sm:text-4xl font-black flex gap-2 items-center">
        <SquaresPlusIcon className="size-8 sm:size-10" />
        <span>크루 등록</span>
      </div>
      <div className="mb-4 sm:mb-2 text-sm sm:text-base">
        <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
        항목이에요.
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex-2 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">크루 이름</div>
          <Input name="name" required errors={state?.fieldErrors.name} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">이메일</div>
          <Input
            type="email"
            name="email"
            required
            errors={state?.fieldErrors.email}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">비밀번호</div>
          <Input
            name="password"
            onChange={handleChangePassword}
            value={password}
            required
            errors={state?.fieldErrors.password}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">클래스</div>
          <select
            onChange={handleChangeClass}
            className="input-style bg-white p-2"
            name="class"
          >
            {classNameList.map((data, idx) => (
              <option key={idx}>{data.name}</option>
            ))}
          </select>
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
