import type { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: "D", href: "/dashboard" },
  { label: "Calendar", icon: "C", href: "/calendar" },
  { label: "Tasks", icon: "T", href: "/tasks" },
  { label: "Templates", icon: "P", href: "/templates" },
  { label: "Focus", icon: "F", href: "/focus" },
  { label: "Settings", icon: "S", href: "/settings" },
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
    <main className="min-h-screen bg-[#f8f5ef] text-[#20201d]">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-4 py-4 lg:px-6">
        <aside className="hidden w-64 shrink-0 flex-col justify-between rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm lg:flex">
          <div>
            <Link className="flex items-center gap-3" href="/dashboard">
              <div className="grid size-11 place-items-center rounded-xl bg-[#20201d] text-lg font-semibold text-white">
                AC
              </div>
              <div>
                <p className="text-lg font-semibold">Aautocal</p>
                <p className="text-sm text-[#777064]">Voice calendar</p>
              </div>
            </Link>

            <nav className="mt-9 space-y-2 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    item.label === active
                      ? "bg-[#20201d] text-white"
                      : "text-[#625c52] hover:bg-[#f1ece3]"
                  }`}
                  href={item.href}
                  key={item.label}
                >
                  <span className="grid size-7 place-items-center rounded-lg bg-white/20 text-xs">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl bg-[#f1ece3] p-4">
            <p className="text-sm font-semibold">Google Calendar</p>
            <p className="mt-2 text-2xl font-semibold">Not synced</p>
            <p className="mt-1 text-sm text-[#777064]">OAuth setup later</p>
          </div>
        </aside>

        <section className="flex flex-1 flex-col gap-5">
          <div className="flex items-center justify-between rounded-2xl border border-[#ded7c9] bg-white/85 p-3 shadow-sm lg:hidden">
            <Link className="flex items-center gap-3" href="/dashboard">
              <div className="grid size-10 place-items-center rounded-xl bg-[#20201d] text-sm font-semibold text-white">
                AC
              </div>
              <div>
                <p className="font-semibold">Aautocal</p>
                <p className="text-xs text-[#777064]">{active}</p>
              </div>
            </Link>
            <div className="flex gap-2 text-xs font-semibold">
              <Link className="rounded-xl border border-[#ded7c9] px-3 py-2" href="/dashboard">
                Home
              </Link>
              <Link
                className="rounded-xl border border-[#ded7c9] px-3 py-2"
                href="/calendar"
              >
                Calendar
              </Link>
            </div>
          </div>

          <header className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8a6451]">
                  {eyebrow}
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                  {title}
                </h1>
                <p className="mt-2 max-w-2xl text-[#625c52]">{description}</p>
              </div>
              {action ? (
                <button className="rounded-full bg-[#356859] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2c574b]">
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
