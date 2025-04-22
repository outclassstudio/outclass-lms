export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 h-[calc(100vh-64px)] flex flex-col items-center">
      {children}
    </div>
  );
}
