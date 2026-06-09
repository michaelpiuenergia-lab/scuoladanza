import { requireAdmin } from "@/lib/auth";
import { DashboardTopbar } from "@/components/dashboard/DashboardTopbar";

const NAV = [
  { label: "Panoramica", href: "/admin" },
  { label: "Clienti", href: "/admin/clienti" },
  { label: "Richieste", href: "/admin/richieste" },
  { label: "Corsi", href: "/admin/corsi" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireAdmin();

  return (
    <div className="min-h-screen bg-cream-2">
      <DashboardTopbar userName={user.name} roleLabel="Amministrazione" nav={NAV} />
      <main className="container-x py-10 sm:py-12">{children}</main>
    </div>
  );
}
