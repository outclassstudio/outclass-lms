import ChapterListBox from "@/components/admin/chapter/chapter-list-box";
import { PageParams } from "@/lib/types/common";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import { getAllChapter, getSectionName } from "./chapter/actions";
import Link from "next/link";

export default async function SectionDeteil({
  params,
}: {
  params: PageParams;
}) {
  const { id } = await params;
  const chatperList = await getAllChapter(id);
  const sectioName = await getSectionName(id);

  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <span>{sectioName ? sectioName.title : ""}</span>
      </div>
      <div className="flex flex-col sm:flex-row mb-4 sm:mb-2 sm:justify-between gap-2">
        <div className="flex gap-2 border-[1px] border-neutral-200 items-center py-3 px-4 bg-white ">
          <input type="text" className="outline-none w-full" />
          <MagnifyingGlassIcon className="size-6 text-neutral-400" />
        </div>
        <Link
          href={`/admin/section/${id}/chapter/add`}
          className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
          flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
        >
          <PlusIcon className="size-5 sm:size-6" />
          챕터 추가
        </Link>
      </div>
      <div>
        {chatperList && chatperList.length > 0 ? (
          chatperList.map((data, idx) => (
            <ChapterListBox
              title={data.title}
              chapterId={data.id}
              key={idx}
              order={data.order}
              sectionId={id}
            />
          ))
        ) : (
          <div className="p-3 sm:p-5 flex items-center justify-center bg-white border-neutral-200 border-[1px] shadow-xs">
            챕터가 존재하지 않습니다.
          </div>
        )}
      </div>
    </div>
  );
}
