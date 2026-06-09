"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ExternalLink } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { logout } from "@/actions/auth";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };

export function DashboardTopbar({
  userName,
  roleLabel,
  nav = [],
}: {
  userName: string;
  roleLabel: string;
  nav?: NavItem[];
}) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === pathname || (href !== "/admin" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-cream/85 backdrop-blur-xl">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo subtitle={false} href="/" />
          {nav.length > 0 && (
            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    isActive(n.href)
                      ? "bg-gold/12 text-gold-deep"
                      : "u-body hover:text-gold-deep",
                  )}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium u-ink">{userName}</p>
            <p className="text-[0.7rem] uppercase tracking-[0.12em] u-mute">
              {roleLabel}
            </p>
          </div>
          <Link
            href="/"
            aria-label="Vai al sito"
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 u-body transition-colors hover:border-gold hover:text-gold-deep"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-full border border-gold/30 px-4 text-sm u-body transition-colors hover:border-terracotta/50 hover:text-terracotta-deep"
            >
              <LogOut className="h-4 w-4" /> Esci
            </button>
          </form>
        </div>
      </div>

      {/* Nav mobile (admin) */}
      {nav.length > 0 && (
        <nav className="flex items-center gap-1 overflow-x-auto border-t border-gold/10 px-4 py-2 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm transition-colors",
                isActive(n.href)
                  ? "bg-gold/12 text-gold-deep"
                  : "u-body hover:text-gold-deep",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
