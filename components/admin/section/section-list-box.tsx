"use client";

import { deleteSection } from "@/app/(main)/admin/section/actions";
import DeleteConfirmModal from "@/components/common/delete-confirm-modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SectionListBox({
  title,
  sectionId,
  className,
}: {
  title: string;
  sectionId: string;
  className: string;
}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleDeleteModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  const handleDelete = async () => {
    await deleteSection(sectionId);
    window.location.reload();
  };

  return (
    <div
      className="p-3 sm:p-5 flex items-center justify-between bg-white border-neutral-200 border-[1px] shadow-xs
    hover:bg-neutral-200"
    >
      <div className="flex gap-2 items-center">
        <div
          onClick={() => router.push(`/admin/section/${sectionId}`)}
          className="font-bold text-xl sm:text-2xl cursor-pointer"
        >
          {title}
        </div>
        <div className="flex gap-1">
          <span className="first:bg-green-500 last:bg-indigo-500 text-white rounded-md p-1 text-xs">
            {className}
          </span>
          {/* {classList.map((data, idx) => (
          ))} */}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
        <button
          onClick={() => router.push(`/admin/section/edit/${sectionId}`)}
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
