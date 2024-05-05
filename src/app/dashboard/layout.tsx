import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remco Stoeten - Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex ">
        <Sidebar />
        <main className=" md:gap-8 flex-1 ">
          <div className="pt-20 pl-8 pr-10 pb-8">{children}</div>
        </main>
      </div>
    </>
  );
}
