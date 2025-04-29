"use client";

import { useState } from "react";
import ClassSelectTab from "./class-select-tab";
import CrewListBox from "./crew-list-box";
import {
  ClassNameListType,
  CrewListType,
} from "@/app/(main)/admin/crew/actions";

export default function CrewList({
  crews,
  classList,
}: {
  crews: CrewListType;
  classList: ClassNameListType;
}) {
  const [selectedClass, setSelectedClass] = useState("all");
  const [crewList, setCrewList] = useState(crews ?? []);

  return (
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
            setCrewList(crews ?? []);
          }}
        >
          전체명단
        </div>
        {classList!.map((data, idx) => (
          <ClassSelectTab
            crews={crews}
            title={data.alias}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            setCrewList={setCrewList}
            key={idx}
          />
        ))}
      </div>
      {crewList.length > 0 ? (
        crewList.map((data, idx) => (
          <CrewListBox
            crewId={data.id}
            crewName={data.name}
            code={data.class!.alias}
            key={idx}
          />
        ))
      ) : (
        <div className="py-10 flex items-center justify-center bg-white border-neutral-200 border-[1px] shadow-xs">
          크루가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
}
