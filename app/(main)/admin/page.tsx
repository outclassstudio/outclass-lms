import AdminMenuBox from "@/components/admin/admin-menu-box";
import { ADMIN_MENU } from "@/lib/menus/menus";

export default function Admin() {
  return (
    <div className="mt-6 sm:mt-10 w-full lg:w-[1024px] flex flex-col gap-4 p-4">
      <div className="text-3xl sm:text-4xl font-black mb-2 sm:mb-4">
        🧰 관리자 메뉴
      </div>
      {ADMIN_MENU.map((menu, idx) => (
        <AdminMenuBox title={menu.title} link={menu.link} key={idx} />
      ))}
    </div>
  );
}
