"use client";

import { CrewType, editCrew } from "@/app/(main)/admin/crew/actions";
import Input from "@/components/common/input";
import { FormError } from "@/lib/types/common";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import { useActionState, useState } from "react";

interface EditcrewProps {
  id: string;
  targetCrew: CrewType;
  classNameList: { id: string; name: string }[];
}

export default function EditCrewForm({
  id,
  targetCrew,
  classNameList,
}: EditcrewProps) {
  const [state, dispatch] = useActionState(interceptAction, null);
  const [name, setName] = useState(targetCrew!.name);
  const [email, setEmail] = useState(targetCrew!.email);
  const [password, setPassword] = useState(targetCrew!.password);
  const [selectedClass, setSelectedClass] = useState(targetCrew?.class?.name);

  function interceptAction(_: FormError | null, formData: FormData) {
    const filtered = classNameList.filter((data) => data.name == selectedClass);
    formData.set("class", filtered[0].id);

    return editCrew(id, formData);
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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
        <span>크루 정보 수정</span>
      </div>
      <div className="mb-4 sm:mb-2 text-sm sm:text-base">
        <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
        항목이에요.
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex-2 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">크루 이름</div>
          <Input
            name="name"
            value={name}
            required
            errors={state?.fieldErrors.name}
            onChange={handleChangeName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">이메일</div>
          <Input
            type="email"
            name="email"
            value={email}
            required
            errors={state?.fieldErrors.email}
            onChange={handleChangeEmail}
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
            defaultValue={selectedClass}
          >
            {classNameList.map((data, idx) => (
              <option key={idx}>{data.name}</option>
            ))}
          </select>
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
