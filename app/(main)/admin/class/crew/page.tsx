import CrewList from "@/components/admin/crew-list";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { getClassName, getCrews } from "./actions";

export default async function CrewPage() {
  const crewList = await getCrews();
  const classList = await getClassName();

  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <span>🧑🏻‍🎓 학생 등록</span>
      </div>
      <div className="flex flex-col sm:flex-row mb-4 sm:mb-2 sm:justify-between gap-2">
        <div className="flex gap-2 border-[1px] border-neutral-200 items-center py-3 px-4 bg-white ">
          <input type="text" className="outline-none w-full" />
          <MagnifyingGlassIcon className="size-6 text-neutral-400" />
        </div>
        <Link
          href={"/admin/class/crew/add"}
          className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
          flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
        >
          <PlusIcon className="size-5 sm:size-6" />
          학생 추가
        </Link>
      </div>
      {crewList && classList ? (
        <CrewList crews={crewList} classList={classList} />
      ) : (
        <div>크루가 없어요</div>
      )}
    </div>
  );
}
