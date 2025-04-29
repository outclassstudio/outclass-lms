import ClassEditForm from "@/components/admin/class/class-edit-form";
import { PageParams } from "@/lib/types/common";
import { getSingleClass } from "../../actions";

export default async function AddClassForm({ params }: { params: PageParams }) {
  const { id } = await params;
  const targetClass = await getSingleClass(id);

  return <ClassEditForm id={id} targetClass={targetClass} />;
}
