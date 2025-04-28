"use client";

import { usePathname, useRouter } from "next/navigation";
import ClassDeleteModal from "./class-delete-modal";
import { useState } from "react";
import { deleteCrew } from "@/app/(main)/admin/class/crew/actions";

export default function CrewListBox({
  crewId,
  crewName,
  code,
}: {
  crewId: string;
  crewName: string;
  code: string;
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleDeleteModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    await deleteCrew(crewId);
    window.location.reload();
  };

  return (
    <div
      className="py-3 px-4 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs
    hover:bg-neutral-200"
    >
      <div className="flex gap-2 items-baseline">
        <div className="font-bold">{crewName}</div>
        <div className="text-sm font-light text-neutral-500">{code}</div>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
        <button
          onClick={() => router.push(`${pathname}/edit/${crewId}`)}
          className="text-xs sm:text-base primary-btn bg-neutral-500 hover:bg-neutral-400 py-1 px-2"
        >
          수정
        </button>
        <button
          onClick={handleDeleteModalOpen}
          className="text-xs sm:text-base primary-btn bg-rose-500 hover:bg-rose-400 py-1 px-2"
        >
          삭제
        </button>
      </div>
      {isModalOpen ? (
        <ClassDeleteModal
          setModalOpen={handleDeleteModalOpen}
          handleDelete={handleDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
}
