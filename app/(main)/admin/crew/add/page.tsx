import AddCrewForm from "@/components/admin/crew/crew-add-form";
import { getClassName } from "../actions";

export default async function AddCrewPage() {
  const classNameList = await getClassName();
  if (!classNameList) return <div>추가할 클래스가 없어요</div>;

  return <AddCrewForm classNameList={classNameList} />;
}
