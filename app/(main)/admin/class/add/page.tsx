import ClassListBox from "@/components/admin/class-list-box";
import { DUMMY_CLASS_LIST } from "@/lib/dummyData";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  SquaresPlusIcon,
} from "@heroicons/react/16/solid";

export default function AddClass() {
  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-6 flex gap-2 items-center">
        <SquaresPlusIcon className="size-8 sm:size-10" />
        <span>클래스 등록</span>
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
          클래스 추가
        </div>
      </div>
      <div>
        {DUMMY_CLASS_LIST.map((data, idx) => (
          <ClassListBox
            title={data.title}
            period={data.period}
            inProgress={data.inProgress}
            classId={data.id}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
