import AddSectionForm from "@/components/admin/section/section-add-form";
import { getClassName } from "../../crew/actions";

export default async function AddSectionPage() {
  const classNameList = await getClassName();
  if (!classNameList) return <div>없어요</div>;
  return <AddSectionForm classNameList={classNameList} />;
}
