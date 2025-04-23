"use client";

import { useRouter } from "next/navigation";

export default function SectionListBox({
  title,
  sectionId,
  classList,
}: {
  title: string;
  sectionId: number;
  classList: string[];
}) {
  const router = useRouter();

  return (
    <div
      className="p-3 sm:p-5 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs cursor-pointer
    active:bg-neutral-200"
      onClick={() => router.push(`/admin/section/${sectionId}`)}
    >
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl sm:text-2xl">{title}</div>
        <div className="flex gap-1">
          {classList.map((data, idx) => (
            <span
              className="first:bg-green-500 last:bg-indigo-500 text-white rounded-md p-1 text-xs"
              key={idx}
            >
              {data}
            </span>
          ))}
        </div>
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
