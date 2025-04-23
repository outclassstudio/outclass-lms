import { PageParams } from "@/lib/types/common";

export default async function ClassDetail({ params }: { params: PageParams }) {
  const { id } = await params;
  return <div>class detail page {id}</div>;
}
