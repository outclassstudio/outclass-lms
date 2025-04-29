"use client";

import { ClassNameListType } from "@/app/(main)/admin/crew/actions";
import {
  editSection,
  TargetSectionType,
} from "@/app/(main)/admin/section/actions";
import Input from "@/components/common/input";
import { FormError } from "@/lib/types/common";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import { useActionState, useState } from "react";

export default function EditSectionForm({
  targetSection,
  classNameList,
}: {
  targetSection: TargetSectionType;
  classNameList: ClassNameListType;
}) {
  const [state, dispatch] = useActionState(interceptAction, null);
  const [title, setTitle] = useState(targetSection?.title);
  const [selectedClass, setSelectedClass] = useState(
    targetSection?.class?.name
  );

  function interceptAction(_: FormError | null, formData: FormData) {
    const filtered = classNameList!.filter(
      (data) => data.name == selectedClass
    );
    console.log(classNameList, filtered, selectedClass);
    formData.set("class", filtered[0].id);

    return editSection(targetSection!.id, targetSection!.order, formData);
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
        <span>섹션 등록</span>
      </div>
      <div className="mb-4 sm:mb-2 text-sm sm:text-base">
        <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
        항목이에요.
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex-2 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">색션 이름</div>
          <Input
            name="title"
            value={title}
            onChange={handleChangeTitle}
            required
            errors={state?.fieldErrors.title}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">
            클래스 선택
          </div>
          <select
            value={selectedClass}
            onChange={handleChangeClass}
            className="input-style bg-white py-2 px-3 text-sm sm:text-base border-[1px] border-neutral-200"
            name="class"
          >
            {classNameList?.map((data) => (
              <option key={data.id} value={data.name}>
                {data.name} {`(${data.alias})`}
              </option>
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
