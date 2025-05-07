import { DUMMY_QUESTION_LIST } from "@/lib/dummyData";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";

export default function QuizDetailPage() {
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
          <div
            // onClick={() => router.push("/admin/quiz/add")}
            className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
              flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
          >
            <PlusIcon className="size-5 sm:size-6" />
            문제 만들기
          </div>
        </div>
      </div>
      {DUMMY_QUESTION_LIST.length > 0 ? (
        DUMMY_QUESTION_LIST.map((question, idx) =>
          question.type === "OBJECTIVE" ? (
            <div
              className="p-3 sm:p-8 flex flex-col items-start bg-white border-neutral-200 border-[1px] shadow-xs 
            gap-4"
              key={idx}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <div className="text-xs sm:text-sm p-1 rounded-md bg-amber-500 text-white text-center">
                      {question.type === "OBJECTIVE" ? "객관식" : "주관식"}
                    </div>
                  </div>
                  <div className="font-bold text-xl sm:text-2xl ">
                    {question.questionText}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                {question.options!.map((option, idx) => (
                  <div
                    className="p-2 bg-neutral-100 rounded-sm text-neutral-800"
                    key={idx}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col">
                <div className="font-semibold">정답</div>
                {question.answer!.map((asnwer, idx) => (
                  <span
                    className="p-2 bg-neutral-100 rounded-sm text-neutral-800"
                    key={idx}
                  >
                    {asnwer}
                  </span>
                ))}
              </div>
              <div className="flex justify-end w-full">
                <span className="text-xs sm:text-base text-white rounded-md bg-red-500 hover:bg-red-400 py-1 px-2 cursor-pointer">
                  편집
                </span>
              </div>
            </div>
          ) : (
            <div
              className="p-3 sm:p-8 flex flex-col items-start bg-white border-neutral-200 border-[1px] shadow-xs 
          gap-4"
              key={idx}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <div className="text-xs sm:text-sm p-1 rounded-md bg-purple-500 text-white text-center">
                      {question.type === "OBJECTIVE" ? "객관식" : "주관식"}
                    </div>
                  </div>
                  <div className="font-bold text-xl sm:text-2xl ">
                    {question.questionText}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="font-semibold">정답</div>
                <div className="p-2 bg-neutral-100 rounded-sm text-neutral-800">
                  {question.subjective}
                </div>
              </div>
              <div className="flex justify-end w-full">
                <span className="text-xs sm:text-base text-white rounded-md bg-red-500 hover:bg-red-400 py-1 px-2 cursor-pointer">
                  편집
                </span>
              </div>
            </div>
          )
        )
      ) : (
        <div className="py-10 flex items-center justify-center bg-white border-neutral-200 border-[1px] shadow-xs">
          문제가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
}
