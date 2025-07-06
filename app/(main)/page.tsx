import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-noto-sans)] flex flex-col items-center bg-gray-100 min-h-[calc(100vh-64px)]">
      <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
        <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-4 flex gap-2 items-center">
          <span>📚 내 현황</span>
        </div>
        <div>
          <div
            className="p-5 sm:p-10 flex items-center justify-between bg-white border-neutral-200 border-[1px] 
            shadow-xs"
          >
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-col gap-4">
                <div className="font-bold text-xl sm:text-2xl">수강현황</div>
                <div className="flex gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex flex-col hover:bg-gray-100 cursor-pointer flex-1/2">
                    <div>수강중</div>
                    <div className="font-semibold text-lg">1 과목</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex flex-col hover:bg-gray-100 cursor-pointer flex-1/2">
                    <div>수강완료</div>
                    <div className="font-semibold text-lg">2 과목</div>
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-neutral-600"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
        <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-4 flex gap-2 items-center">
          <span>🎯 최근 학습</span>
        </div>
        <div>
          <div
            className="p-5 sm:p-10 flex items-center justify-between bg-white border-neutral-200 border-[1px] 
            shadow-xs"
          >
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-col gap-4">
                <div className="font-bold text-xl sm:text-2xl">수강목록</div>
                <div className="flex flex-col gap-4">
                  <div
                    className="p-3 sm:p-5 flex items-center justify-between cursor-pointer rounded-lg
                      hover:bg-neutral-200"
                  >
                    <div className="flex gap-2 items-center justify-between w-full">
                      <div className="flex gap-2 items-center">
                        <div className="font-bold text-xl sm:text-2xl cursor-pointer">
                          Python
                        </div>
                        <div className="flex gap-1">
                          <span className="first:bg-green-500 last:bg-indigo-500 text-white rounded-md p-1 text-xs">
                            SF 7TH
                          </span>
                        </div>
                      </div>
                      <div>
                        <ArrowRightIcon className="text-black size-5" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-3 sm:p-5 flex items-center justify-between cursor-pointer rounded-lg
                      hover:bg-neutral-200"
                  >
                    <div className="flex gap-2 items-center justify-between w-full">
                      <div className="flex gap-2 items-center">
                        <div className="font-bold text-xl sm:text-2xl cursor-pointer">
                          C++
                        </div>
                        <div className="flex gap-1">
                          <span className="first:bg-green-500 last:bg-indigo-500 text-white rounded-md p-1 text-xs">
                            SF 7TH
                          </span>
                        </div>
                      </div>
                      <div>
                        <ArrowRightIcon className="text-black size-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
