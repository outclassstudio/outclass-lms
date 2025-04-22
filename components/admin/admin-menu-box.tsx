"use client";

import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function AdminMenuBox({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  const router = useRouter();

  return (
    <div
      className="w-full rounded-lg text-xl sm:text-2xl font-bold bg-white p-4 sm:p-10 shadow-xs 
    border-neutral-50 border-[1px] cursor-pointer
    active:bg-gray-200 flex justify-between items-center"
      onClick={() => router.push(link)}
    >
      <span>{title}</span>
      <ChevronRightIcon className="size-8" />
    </div>
  );
}
