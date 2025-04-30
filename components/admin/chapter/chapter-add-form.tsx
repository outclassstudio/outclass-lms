"use client";

import { createChapter } from "@/app/(main)/admin/section/[id]/chapter/actions";
import Input from "@/components/common/input";
import { FormError } from "@/lib/types/common";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";
import { useActionState } from "react";

export default function AddChapterForm({ sectionId }: { sectionId: string }) {
  const [state, dispatch] = useActionState(interceptAction, null);

  function interceptAction(_: FormError | null, formData: FormData) {
    formData.set("section", sectionId);

    return createChapter(_, formData);
  }

  return (
    <form
      action={dispatch}
      className="mt-6 sm:mt-10 w-full md:w-[768px] flex flex-col gap-4 sm:gap-8 p-4"
    >
      <div className="text-3xl sm:text-4xl font-black flex gap-2 items-center">
        <SquaresPlusIcon className="size-8 sm:size-10" />
        <span>챕터 등록</span>
      </div>
      <div className="mb-4 sm:mb-2 text-sm sm:text-base">
        <span className="text-red-500">*</span>표시가 된 항목은 필수 입력
        항목이에요.
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex-2 flex flex-col gap-2">
          <div className="sm:text-lg font-semibold add-asterisk">챕터 이름</div>
          <Input name="title" required errors={state?.fieldErrors.title} />
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
