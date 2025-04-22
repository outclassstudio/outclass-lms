"use client";

import { useRouter } from "next/navigation";

export default function ClassListBox({
  title,
  period,
  classId,
}: {
  title: string;
  period: string;
  inProgress: boolean;
  classId: number;
}) {
  const router = useRouter();

  return (
    <div
      className="p-3 sm:p-5 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs cursor-pointer
    active:bg-neutral-200"
      onClick={() => router.push(`/admin/class/${classId}`)}
    >
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex">
            <span className="bg-green-500 text-white rounded-md p-1 text-xs">
              진행중
            </span>
          </div>

          <div className="font-bold text-xl sm:text-2xl">{title}</div>
        </div>
        <div className="text-xs sm:text-sm text-neutral-600">{period}</div>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
        <button className="text-xs sm:text-base primary-btn bg-neutral-500 hover:bg-neutral-400 py-1 px-2">
          수정
        </button>
        <button className="text-xs sm:text-base primary-btn bg-rose-500 hover:bg-rose-400 py-1 px-2">
          삭제
        </button>
      </div>
    </div>
  );
}
