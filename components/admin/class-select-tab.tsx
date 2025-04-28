import { CrewListType } from "@/app/(main)/admin/class/crew/actions";
import { $Enums } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

interface ClassSelectTabProps {
  title: string;
  crews: CrewListType;
  selectedClass: string;
  setSelectedClass: (value: SetStateAction<string>) => void;
  setCrewList: Dispatch<
    SetStateAction<
      ({
        Class: {
          id: string;
          name: string;
          alias: string;
          startDate: Date;
          endDate: Date;
        } | null;
      } & {
        id: string;
        name: string;
        email: string;
        password: string;
        role: $Enums.Role;
        createdAt: Date;
        classId: string | null;
      })[]
    >
  >;
}

export default function ClassSelectTab({
  title,
  crews,
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
        setCrewList(() => crews!.filter((data) => data.Class?.alias === title));
      }}
    >
      {title}
    </div>
  );
}
