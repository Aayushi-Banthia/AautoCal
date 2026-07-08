import type { ReactNode } from "react";
import Link from "next/link";
import {
  CalendarIcon,
  CheckSquareIcon,
  FocusIcon,
  GearIcon,
  HomeIcon,
  TimetableIcon,
} from "./Icons";

const navItems = [
  { label: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  { label: "Calendar", icon: CalendarIcon, href: "/calendar" },
  { label: "Tasks", icon: CheckSquareIcon, href: "/tasks" },
  { label: "Templates", icon: TimetableIcon, href: "/templates" },
  { label: "Focus", icon: FocusIcon, href: "/focus" },
  { label: "Settings", icon: GearIcon, href: "/settings" },
];

type AppFrameProps = {
  active: string;
  eyebrow: string;
  title: string;
  description: string;
  action?: string;
  children: ReactNode;
};

export function AppFrame({
  active,
  eyebrow,
  title,
  description,
  action,
  children,
}: AppFrameProps) {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#2e2e2e]">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-5 px-4 py-4 lg:px-6">
        <aside className="hidden w-64 shrink-0 flex-col justify-between rounded-3xl border border-[#f0e9e9] bg-white p-5 shadow-sm lg:flex">
          <div>
            <Link className="flex items-center gap-2.5" href="/dashboard">
              <div className="grid size-10 place-items-center rounded-xl bg-[#f89cac] text-white">
                <CalendarIcon className="size-5" />
              </div>
              <p className="text-lg font-semibold">
                Auto<span className="text-[#f89cac]">Cal</span>
              </p>
            </Link>

            <nav className="mt-8 space-y-1.5 text-sm font-medium">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.label === active;
                return (
                  <Link
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left transition ${
                      isActive
                        ? "bg-[#fdeef1] text-[#e8628a]"
                        : "text-[#8a8a8a] hover:bg-[#f7f7f7]"
                    }`}
                    href={item.href}
                    key={item.label}
                  >
                    <Icon className="size-4.5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="rounded-2xl border border-[#f0e9e9] bg-[#f7f7f7] p-4">
            <p className="text-sm font-semibold">Google Calendar</p>
            <p className="mt-2 text-2xl font-semibold">Not synced</p>
            <p className="mt-1 text-sm text-[#8a8a8a]">OAuth setup later</p>
          </div>
        </aside>

        <section className="flex flex-1 flex-col gap-5">
          <div className="flex items-center justify-between rounded-2xl border border-[#f0e9e9] bg-white p-3 shadow-sm lg:hidden">
            <Link className="flex items-center gap-2.5" href="/dashboard">
              <div className="grid size-9 place-items-center rounded-xl bg-[#f89cac] text-white">
                <CalendarIcon className="size-4.5" />
              </div>
              <div>
                <p className="font-semibold">
                  Auto<span className="text-[#f89cac]">Cal</span>
                </p>
                <p className="text-xs text-[#8a8a8a]">{active}</p>
              </div>
            </Link>
            <div className="flex gap-2 text-xs font-semibold">
              <Link
                className="rounded-xl border border-[#f0e9e9] px-3 py-2 text-[#8a8a8a]"
                href="/dashboard"
              >
                Home
              </Link>
              <Link
                className="rounded-xl border border-[#f0e9e9] px-3 py-2 text-[#8a8a8a]"
                href="/calendar"
              >
                Calendar
              </Link>
            </div>
          </div>

          <header className="rounded-3xl border border-[#f0e9e9] bg-white p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f89cac]">
                  {eyebrow}
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                  {title}
                </h1>
                <p className="mt-2 max-w-2xl text-[#8a8a8a]">{description}</p>
              </div>
              {action ? (
                <button className="rounded-full bg-[#f89cac] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e8628a]">
                  {action}
                </button>
              ) : null}
            </div>
          </header>

          {children}
        </section>
      </div>
    </main>
  );
}
