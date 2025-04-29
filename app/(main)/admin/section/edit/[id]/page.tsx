import EditSectionForm from "@/components/admin/section/section-edit-form";
import { getClassName } from "../../../crew/actions";
import { getSingleSection } from "../../actions";
import { PageParams } from "@/lib/types/common";

export default async function SectionEditPage({
  params,
}: {
  params: PageParams;
}) {
  const { id } = await params;
  const targetSection = await getSingleSection(id);
  const classNameList = await getClassName();
  return (
    <EditSectionForm
      classNameList={classNameList}
      targetSection={targetSection}
    />
  );
}
