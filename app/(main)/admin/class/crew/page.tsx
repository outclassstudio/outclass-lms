"use client";

import ClassSelectTab from "@/components/admin/class-select-tab";
import CrewListBox from "@/components/admin/crew-list-box";
import { DUMMY_CLASS_LIST, DUMMY_CREW_LIST } from "@/lib/dummyData";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function CrewPage() {
  const [selectedClass, setSelectedClass] = useState("all");
  const [crewList, setCrewList] = useState(DUMMY_CREW_LIST);

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
        <div
          className="text-white text-lg sm:text-xl font-bold py-3 px-5 bg-orange-500 rounded-lg 
          flex gap-2 items-center justify-center hover:bg-orange-400 cursor-pointer"
        >
          <PlusIcon className="size-5 sm:size-6" />
          학생 추가
        </div>
      </div>
      <div className="">
        <div className="flex">
          <div
            className={`${
              selectedClass === "all"
                ? "bg-white border-[1px] border-neutral-200 border-b-0 font-bold"
                : ""
            } py-3 px-4 cursor-pointer`}
            onClick={() => {
              setSelectedClass("all");
              setCrewList(DUMMY_CREW_LIST);
            }}
          >
            전체명단
          </div>
          {DUMMY_CLASS_LIST.map((data, idx) => (
            <ClassSelectTab
              title={data.code}
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
              setCrewList={setCrewList}
              key={idx}
            />
          ))}
        </div>
        {crewList.length > 0 ? (
          crewList.map((data, idx) => (
            <CrewListBox crewName={data.name} code={data.class} key={idx} />
          ))
        ) : (
          <div className="py-10 flex items-center justify-center bg-white border-neutral-200 border-[1px] shadow-xs">
            크루가 존재하지 않습니다.
          </div>
        )}
      </div>
    </div>
  );
}
