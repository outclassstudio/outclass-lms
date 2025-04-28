interface DeleteClassModalProps {
  setModalOpen: () => void;
  handleDelete: () => void;
}

export default function DeleteConfirmModal({
  setModalOpen,
  handleDelete,
}: DeleteClassModalProps) {
  return (
    <div
      className="fixed h-screen w-full top-0 left-0 flex flex-col z-10
      justify-center items-center"
    >
      <div
        className="bg-white px-14 sm:px-24 py-6 sm:py-10 z20 shadow-lg rounded-md
      flex flex-col gap-2"
      >
        <div className="text-center text-2xl sm:text-3xl">⚠️</div>
        <div className="text-neutral-900 font-bold text-base sm:text-lg mb-4">
          정말 삭제하시겠어요?
        </div>
        <div
          className="flex gap-3 *:rounded-md justify-center *:cursor-pointer 
        *:text-white *:px-4 *:py-2 text-sm sm:text-base"
        >
          <span onClick={handleDelete} className="bg-red-500 hover:bg-red-400">
            확인
          </span>
          <span
            onClick={setModalOpen}
            className="bg-neutral-800 hover:bg-neutral-700"
          >
            취소
          </span>
        </div>
      </div>
      <div
        className="fixed h-screen w-full top-0 left-0 bg-neutral-800 opacity-30 -z-10"
        onClick={setModalOpen}
      />
    </div>
  );
}
