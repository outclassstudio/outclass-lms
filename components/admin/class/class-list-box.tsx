"use client";

import { dateFormatter } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { deleteClass } from "@/app/(main)/admin/class/list/actions";
import DeleteConfirmModal from "@/components/common/delete-confirm-modal";

export default function ClassListBox({
  title,
  classId,
  startDate,
  endDate,
}: {
  title: string;
  classId: string;
  startDate: Date;
  endDate: Date;
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const tag = {
    closed: (
      <span className="bg-amber-500 text-white rounded-md p-1 text-xs">
        종료
      </span>
    ),
    inProgress: (
      <span className="bg-green-500 text-white rounded-md p-1 text-xs">
        진행중
      </span>
    ),
    planToProceed: (
      <span className="bg-purple-500 text-white rounded-md p-1 text-xs">
        진행예정
      </span>
    ),
  };

  const createTag = () => {
    const current = new Date();

    if (endDate < current) return tag["closed"];
    else if (current < startDate) return tag["planToProceed"];
    else return tag["inProgress"];
  };

  const handleDeleteModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    await deleteClass(classId);
    router.refresh();
  };

  const moveToEditPage = () => {
    router.push(`/admin/class/list/edit/${classId}`);
  };

  return (
    <div
      className="p-3 sm:p-5 flex items-center justify-between bg-white border-neutral-200 border-[1px] 
      shadow-xs hover:bg-neutral-100 "
    >
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex">{createTag()}</div>
          <div
            onClick={moveToEditPage}
            className="font-bold text-xl sm:text-2xl cursor-pointer rounded-md"
          >
            {title}
          </div>
        </div>
        <div className="text-xs sm:text-sm text-neutral-600">{`${dateFormatter(
          startDate
        )} ~ ${dateFormatter(endDate)}`}</div>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
        <button
          onClick={moveToEditPage}
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
        <DeleteConfirmModal
          setModalOpen={handleDeleteModalOpen}
          handleDelete={handleDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
}
