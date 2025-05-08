import { CheckIcon } from "@heroicons/react/24/solid";

export default function CustomCheckbox() {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="peer hidden" id="customCheck" />
      <div
        className="rounded ring-2 focus:ring-4 ring-neutral-200 bg-white
                peer-checked:bg-green-500 peer-checked:border-green-500 
                  flex items-center justify-center transition-colors duration-100"
      >
        <CheckIcon className="size-6 text-white" />
      </div>
    </label>
  );
}
