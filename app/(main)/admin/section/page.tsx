import SectionListBox from "@/components/admin/section/section-list-box";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  SquaresPlusIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { getAllSection } from "./actions";

export default async function SectionPage() {
  const sections = await getAllSection();

  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <SquaresPlusIcon className="size-8 sm:size-10" />
        <span>섹션 관리</span>
      </div>
      <div className="flex flex-col sm:flex-row mb-4 sm:mb-2 sm:justify-between gap-2">
        <div className="flex gap-2 border-[1px] border-neutral-200 items-center py-3 px-4 bg-white ">
          <input type="text" className="outline-none w-full" />
          <MagnifyingGlassIcon className="size-6 text-neutral-400" />
        </div>
        <Link
          href={"/admin/section/add"}
          className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
          flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
        >
          <PlusIcon className="size-5 sm:size-6" />
          섹션 추가
        </Link>
      </div>
      <div>
        {sections ? (
          sections.map((data, idx) => (
            <SectionListBox
              title={data.title}
              sectionId={data.id}
              className={data.class!.alias}
              key={idx}
            />
          ))
        ) : (
          <div>섹션이 없습니다</div>
        )}
      </div>
    </div>
  );
}
