import ChapterListBox from "@/components/admin/chapter-list-box";
import { PageParams } from "@/lib/types/common";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";

export default async function SectionDeteil({
  params,
}: {
  params: PageParams;
}) {
  const { id } = await params;
  const DUMMY_CLASS_LIST = [
    {
      id: 1,
      title: "1. 파이썬 개요",
    },
    {
      id: 2,
      title: "2. 변수와 자료형",
    },
    {
      id: 3,
      title: "3. 산술 연산자",
    },
    {
      id: 4,
      title: "4. 조건문",
    },
    {
      id: 5,
      title: "5. 반복문",
    },
  ];

  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <span>{id} 파이썬</span>
      </div>
      <div className="flex flex-col sm:flex-row mb-4 sm:mb-2 sm:justify-between gap-2">
        <div className="flex gap-2 border-[1px] border-neutral-200 items-center py-3 px-4 bg-white ">
          <input type="text" className="outline-none w-full" />
          <MagnifyingGlassIcon className="size-6 text-neutral-400" />
        </div>
        <div
          className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
          flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
        >
          <PlusIcon className="size-5 sm:size-6" />
          챕터 추가
        </div>
      </div>
      <div>
        {DUMMY_CLASS_LIST.map((data, idx) => (
          <ChapterListBox title={data.title} chapterId={data.id} key={idx} />
        ))}
      </div>
    </div>
  );
}
