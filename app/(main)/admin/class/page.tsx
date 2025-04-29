import ClassListBox from "@/components/admin/class/class-list-box";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { getClasses } from "./actions";

export default async function ClassList() {
  const classes = await getClasses();

  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <span>🏫 클래스 관리</span>
      </div>
      <div className="flex flex-col sm:flex-row mb-4 sm:mb-2 sm:justify-between gap-2">
        <div className="flex gap-2 border-[1px] border-neutral-200 items-center py-3 px-4 bg-white ">
          <input type="text" className="outline-none w-full" />
          <MagnifyingGlassIcon className="size-6 text-neutral-400" />
        </div>
        <Link
          href={"/admin/class/add"}
          className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
          flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
        >
          <PlusIcon className="size-5 sm:size-6" />
          클래스 추가
        </Link>
      </div>
      <div>
        {classes.map((data, idx) => (
          <ClassListBox
            title={data.name}
            startDate={data.startDate}
            endDate={data.endDate}
            classId={data.id}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
