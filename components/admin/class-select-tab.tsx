import { DUMMY_CREW_LIST } from "@/lib/dummyData";
import { Dispatch, SetStateAction } from "react";

interface ClassSelectTabProps {
  title: string;
  selectedClass: string;
  setSelectedClass: (value: SetStateAction<string>) => void;
  setCrewList: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
        class: string;
      }[]
    >
  >;
}

export default function ClassSelectTab({
  title,
  selectedClass,
  setSelectedClass,
  setCrewList,
}: ClassSelectTabProps) {
  return (
    <div
      className={`${
        selectedClass === title
          ? "bg-white border-[1px] border-neutral-200 border-b-0 font-bold"
          : ""
      } py-3 px-4 cursor-pointer`}
      onClick={() => {
        setSelectedClass(title);
        setCrewList(() =>
          DUMMY_CREW_LIST.filter((data) => data.class === title)
        );
      }}
    >
      {title}
    </div>
  );
}
