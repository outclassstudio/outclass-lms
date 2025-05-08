import QuestionItem from "@/components/admin/quiz/question-item";
import { DUMMY_QUESTION_LIST } from "@/lib/dummyData";
import { PageParams } from "@/lib/types/common";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default async function QuizDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { id } = await params;

  return (
    <div className="mt-6 mb-10 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <span>📝 문제 관리</span>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row mb-6 sm:mb-4 sm:justify-between gap-2">
          <div className="flex gap-2 border-[1px] border-neutral-200 items-center py-3 px-4 bg-white ">
            <input
              type="text"
              className="outline-none w-full placeholder:text-sm"
              placeholder="문제를 검색하세요."
            />
            <MagnifyingGlassIcon className="size-6 text-neutral-400" />
          </div>
          <Link
            href={`/admin/quiz/${id}/add`}
            className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
              flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
          >
            <PlusIcon className="size-5 sm:size-6" />
            문제 만들기
          </Link>
        </div>
      </div>
      {DUMMY_QUESTION_LIST.length > 0 ? (
        DUMMY_QUESTION_LIST.map((question, idx) => (
          <QuestionItem question={question} key={idx} />
        ))
      ) : (
        <div className="py-10 flex items-center justify-center bg-white border-neutral-200 border-[1px] shadow-xs">
          문제가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
}
