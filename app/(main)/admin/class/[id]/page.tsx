type Params = Promise<{ id: string }>;

export default async function ClassDetail({ params }: { params: Params }) {
  const { id } = await params;
  return <div>class detail page {id}</div>;
}
