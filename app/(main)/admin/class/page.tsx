import AdminMenuBox from "@/components/admin/admin-menu-box";

export default function ClassPage() {
  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-4">
        🏫 클래스 관리
      </div>
      <div className="flex gap-4">
        <AdminMenuBox title={"클래스 등록"} link={"/admin/class/list"} />
        <AdminMenuBox title={"학생 등록"} link={"/admin/class/crew"} />
      </div>
    </div>
  );
}
