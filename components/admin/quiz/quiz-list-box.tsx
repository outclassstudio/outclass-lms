"use client";

// import { usePathname, useRouter } from "next/navigation";

export default function QuizListBox({
  title,
  chapter,
}: {
  title: string;
  chapter: string;
}) {
  // const router = useRouter();
  // const pathname = usePathname();

  return (
    <div
      className="py-3 px-4 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs cursor-pointer
    active:bg-neutral-200"
      // onClick={() => router.push(`${pathname}/chapter/${chapterId}`)}
    >
      <div className="flex flex-col gap-2 items-baseline">
        <div className="text-sm text-neutral-500">{chapter}</div>
        <div className="font-bold">{title}</div>
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
