import Header from "@/components/common/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />
      <main className="pt-14 sm:pt-16">{children}</main>
    </div>
  );
}
