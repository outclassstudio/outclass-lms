"use client";

import { UserCircleIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import UserDropdown from "./user-dropdown";

export default function Header() {
  const [isDropdwonOpen, setIsDropDownOpen] = useState(false);

  const router = useRouter();
  const pahtname = usePathname();

  const handleDropdownOpen = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  return (
    <div
      className="w-full fixed border-b border-neutral-200 shadow-xs top-0 left-0
      flex items-center px-6 py-3 justify-between bg-white"
    >
      <div className="flex sm:gap-12 items-center">
        {/* <Bars3Icon className="size-6 text-neutral-800" /> */}
        <div
          className="text-xl sm:text-2xl font-extrabold mr-3 sm:mr-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          MY LMS
        </div>
        <div className="flex items-center">
          <div
            className={`py-2 px-1 sm:px-5 sm:text-base text-sm  rounded-md cursor-pointer ${
              pahtname === "/quiz"
                ? "bg-orange-50 text-orange-500 hover:bg-orange-100"
                : "hover:bg-neutral-100"
            }`}
            onClick={() => router.push("/quiz")}
          >
            📝 문제풀기
          </div>
          <div
            className={`py-2 px-1 sm:px-5 sm:text-base text-sm  rounded-md cursor-pointer ${
              pahtname === "/admin"
                ? "bg-orange-50 text-orange-500 hover:bg-orange-100"
                : "hover:bg-neutral-100"
            }`}
            onClick={() => router.push("/admin")}
          >
            ⚙️ 관리자
          </div>
        </div>
      </div>
      <div className="relative">
        <UserCircleIcon
          onClick={handleDropdownOpen}
          className="size-7 sm:size-8 text-neutral-600 cursor-pointer"
        />
      </div>
      {isDropdwonOpen ? <UserDropdown /> : ""}
    </div>
  );
}
