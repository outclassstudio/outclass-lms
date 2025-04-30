import AddChapterForm from "@/components/admin/chapter/chapter-add-form";
import { PageParams } from "@/lib/types/common";

export default async function AddChapterPapge({
  params,
}: {
  params: PageParams;
}) {
  const { id } = await params;

  console.log("check", id);

  return <AddChapterForm sectionId={id} />;
}
