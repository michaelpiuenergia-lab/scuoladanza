import { requireUser } from "@/lib/auth";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";

export default async function AreaRiservataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireUser();

  return (
    <div className="min-h-screen bg-cream-2">
      <DashboardTopbar userName={user.name} roleLabel="Area allievo" />
      <main className="container-x py-10 sm:py-12">{children}</main>
    </div>
  );
}
