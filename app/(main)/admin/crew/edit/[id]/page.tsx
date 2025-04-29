import { PageParams } from "@/lib/types/common";
import { getClassName, getSingleCrew } from "../../actions";
import EditCrewForm from "@/components/admin/crew/crew-edit-form";

export default async function AddClassForm({ params }: { params: PageParams }) {
  const { id } = await params;
  const targetCrew = await getSingleCrew(id);
  const classNameList = await getClassName();

  return (
    <EditCrewForm
      id={id}
      targetCrew={targetCrew}
      classNameList={classNameList!}
    />
  );
}
