import AdminMenuBox from "@/components/admin/admin-menu-box";

export default function Admin() {
  const ADMIN_MENU = [
    { title: "클래스 관리", link: "/admin/class" },
    { title: "섹션 등록", link: "/admin/add/section" },
    { title: "퀴즈 만들기", link: "/admin/add/quiz" },
    { title: "현황 조회", link: "/admin/status" },
  ];

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
