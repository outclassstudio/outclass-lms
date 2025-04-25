import { UserCircleIcon } from "@heroicons/react/16/solid";
import {
  BookOpenIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

export default function UserDropdown() {
  return (
    <div className="absolute right-6 top-13 border-1 border-neutral-200 bg-white rounded-xl">
      <div className="border-b border-neutral-200 p-2">
        <div className="flex gap-2 items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-md">
          <UserCircleIcon className="size-10 text-neutral-700" />
          <div className="flex flex-col w-48">
            <div className="text-sm font-semibold">이민형</div>
            <div className="text-xs text-neutral-500">
              outclassstudio@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm font-semibold border-b border-neutral-200 p-2">
        <div className="flex gap-2 items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-md">
          <UserIcon className="size-6" />
          <div>계정 관리</div>
        </div>
        <div className="flex gap-2 items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-md">
          <BookOpenIcon className="size-6" />
          <div>나의 수업</div>
        </div>
        <div className="flex gap-2 items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-md">
          <QuestionMarkCircleIcon className="size-6" />
          <div>퀴즈 현황</div>
        </div>
      </div>
      <div className=" border-b border-neutral-200 p-2">
        <div className="flex gap-2 items-center p-2 hover:bg-neutral-100 cursor-pointer rounded-md">
          <ArrowRightStartOnRectangleIcon className="size-6 text-red-500" />
          <div className="text-sm font-semibold text-red-500">로그아웃</div>
        </div>
      </div>
    </div>
  );
}
