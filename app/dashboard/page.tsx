import Link from "next/link";
import { auth } from "@/auth";
import { AuthStatus } from "../components/AuthStatus";
import { ReminderNotifications } from "../components/ReminderNotifications";
import { VoiceAssistant } from "../components/VoiceAssistant";
import { ReggiePlaceholder } from "../components/ReggiePlaceholder";
import {
  BellIcon,
  CalendarIcon,
  CheckSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  FocusIcon,
  GearIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  StreakIcon,
  TimetableIcon,
} from "../components/Icons";

const navItems = [
  { label: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  { label: "Calendar", icon: CalendarIcon, href: "/calendar" },
  { label: "Tasks", icon: CheckSquareIcon, href: "/tasks" },
  { label: "Templates", icon: TimetableIcon, href: "/templates" },
  { label: "Focus", icon: FocusIcon, href: "/focus" },
  { label: "Settings", icon: GearIcon, href: "/settings" },
];

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const eventPalette = [
  { label: "DBMS Lecture", classes: "bg-[#f3cfe5] text-[#8a3f66]" },
  { label: "Mid Sem Exam", classes: "bg-[#fde3cf] text-[#96591a]" },
  { label: "Club Meeting", classes: "bg-[#cdeeec] text-[#1f7d78]" },
];

function getMonthGrid(reference: Date) {
  const year = reference.getFullYear();
  const month = reference.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: { date: number; inMonth: boolean }[] = [];

  for (let i = firstWeekday - 1; i >= 0; i--) {
    cells.push({ date: daysInPrevMonth - i, inMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: d, inMonth: true });
  }
  let trailing = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ date: trailing, inMonth: false });
    trailing += 1;
  }

  const weeks: { date: number; inMonth: boolean }[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export default async function Home() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] ?? "there";

  const today = new Date();
  const monthLabel = today.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const weeks = getMonthGrid(today);
  const todayDate = today.getDate();

  // Demo event tags anchored to today so the grid always looks populated,
  // regardless of which real month/day it renders on.
  const dayEvents: Record<number, (typeof eventPalette)[number]> = {
    [todayDate]: eventPalette[0],
    [Math.min(todayDate + 3, 28)]: eventPalette[1],
    [Math.max(todayDate - 4, 1)]: eventPalette[2],
  };

  const stats = [
    { label: "Today's Tasks", value: "8", detail: "Tasks planned", icon: CheckSquareIcon },
    { label: "Events Today", value: "3", detail: "Upcoming", icon: CalendarIcon },
    { label: "Focus Time", value: "2h 15m", detail: "Protected blocks", icon: FocusIcon, href: "/focus" },
    { label: "Streak", value: "12", detail: "Days in a row", icon: StreakIcon },
  ];

  const todaysPlan = [
    { title: "Attend DBMS Lecture", time: "9:00 AM \u2013 10:00 AM", done: true },
    { title: "UI/UX Project Work", time: "11:30 AM \u2013 1:00 PM", done: false },
    { title: "DSA Practice", time: "5:00 PM \u2013 6:30 PM", done: false },
    { title: "Read Research Paper", time: "8:00 PM \u2013 9:00 PM", done: false },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#2e2e2e]">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-5 px-4 py-4 lg:px-6">
        {/* Sidebar */}
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
                const active = item.label === "Dashboard";
                return (
                  <Link
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left transition ${
                      active
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

          <div className="rounded-2xl bg-[#fdeef1] p-4">
            <div className="flex items-center gap-3">
              <ReggiePlaceholder size="sm" />
              <div>
                <p className="text-sm font-semibold">Hey, I&apos;m Reggie! 🐾</p>
                <p className="text-xs text-[#8a6d75]">Let&apos;s make today productive!</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex flex-1 flex-col gap-5">
          {/* Mobile top bar */}
          <div className="flex items-center justify-between rounded-2xl border border-[#f0e9e9] bg-white p-3 shadow-sm lg:hidden">
            <Link className="flex items-center gap-2.5" href="/dashboard">
              <div className="grid size-9 place-items-center rounded-xl bg-[#f89cac] text-white">
                <CalendarIcon className="size-4.5" />
              </div>
              <p className="font-semibold">
                Auto<span className="text-[#f89cac]">Cal</span>
              </p>
            </Link>
            <button
              aria-label="Open menu"
              className="grid size-9 place-items-center rounded-xl border border-[#f0e9e9]"
              type="button"
            >
              <MenuIcon className="size-4.5" />
            </button>
          </div>

          {/* Header */}
          <header className="flex flex-col justify-between gap-4 rounded-3xl border border-[#f0e9e9] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Good morning, {firstName} 👋
              </h1>
              <p className="mt-1 text-sm text-[#8a8a8a]">Let&apos;s make today count.</p>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
              <button
                aria-label="Search"
                className="grid size-10 place-items-center rounded-full border border-[#f0e9e9] text-[#8a8a8a] transition hover:bg-[#f7f7f7]"
                type="button"
              >
                <SearchIcon className="size-4.5" />
              </button>
              <button
                aria-label="Notifications"
                className="grid size-10 place-items-center rounded-full border border-[#f0e9e9] text-[#8a8a8a] transition hover:bg-[#f7f7f7]"
                type="button"
              >
                <BellIcon className="size-4.5" />
              </button>
              <AuthStatus />
            </div>
          </header>

          {/* Stat cards */}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const cardContent = (
                <>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-[#8a8a8a]">{stat.label}</p>
                    <span className="grid size-8 place-items-center rounded-full bg-[#fdeef1] text-[#f89cac]">
                      <Icon className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs text-[#a8a8a8]">{stat.detail}</p>
                </>
              );
              const cardClasses =
                "rounded-2xl border border-[#f0e9e9] bg-white p-4 shadow-sm transition hover:border-[#f89cac]";

              return stat.href ? (
                <Link className={cardClasses} href={stat.href} key={stat.label}>
                  {cardContent}
                </Link>
              ) : (
                <article className={cardClasses} key={stat.label}>
                  {cardContent}
                </article>
              );
            })}
          </div>

          {/* Calendar + Today's plan */}
          <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <section className="rounded-3xl border border-[#f0e9e9] bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold">{monthLabel}</h2>
                  <div className="flex items-center gap-1">
                    <button
                      aria-label="Previous month"
                      className="grid size-7 place-items-center rounded-full text-[#8a8a8a] hover:bg-[#f7f7f7]"
                      type="button"
                    >
                      <ChevronLeftIcon className="size-4" />
                    </button>
                    <button
                      aria-label="Next month"
                      className="grid size-7 place-items-center rounded-full text-[#8a8a8a] hover:bg-[#f7f7f7]"
                      type="button"
                    >
                      <ChevronRightIcon className="size-4" />
                    </button>
                  </div>
                </div>
                <div className="flex rounded-full bg-[#f7f7f7] p-1 text-xs font-semibold">
                  {["Week", "Month", "Agenda"].map((view) => (
                    <button
                      className={`rounded-full px-3.5 py-1.5 ${
                        view === "Month"
                          ? "bg-white text-[#2e2e2e] shadow-sm"
                          : "text-[#8a8a8a]"
                      }`}
                      key={view}
                      type="button"
                    >
                      {view}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#a8a8a8]">
                {weekdayLabels.map((day) => (
                  <p className="py-1" key={day}>
                    {day}
                  </p>
                ))}
              </div>

              <div className="mt-1 space-y-1">
                {weeks.map((week, weekIndex) => (
                  <div className="grid grid-cols-7 gap-0.5 sm:gap-1" key={weekIndex}>
                    {week.map((cell, cellIndex) => {
                      const event = cell.inMonth ? dayEvents[cell.date] : undefined;
                      const isToday = cell.inMonth && cell.date === todayDate;
                      return (
                        <div
                          className={`flex min-h-12 flex-col items-center gap-1 rounded-xl p-0.5 sm:min-h-16 sm:p-1 ${
                            cell.inMonth ? "" : "opacity-30"
                          }`}
                          key={cellIndex}
                        >
                          <span
                            className={`grid size-6 place-items-center rounded-full text-xs sm:size-7 sm:text-sm ${
                              isToday ? "bg-[#f89cac] text-white font-semibold" : "text-[#4a4a4a]"
                            }`}
                          >
                            {cell.date}
                          </span>
                          {event ? (
                            <>
                              <span
                                className={`size-1.5 rounded-full sm:hidden ${event.classes.split(" ")[0]}`}
                                aria-label={event.label}
                              />
                              <span
                                className={`hidden w-full truncate rounded-md px-1 py-0.5 text-center text-[10px] font-medium sm:block ${event.classes}`}
                              >
                                {event.label}
                              </span>
                            </>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-col gap-5">
              <section className="rounded-3xl border border-[#f0e9e9] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Today&apos;s Plan</h2>
                  <Link className="text-xs font-semibold text-[#f89cac]" href="/tasks">
                    View all
                  </Link>
                </div>
                <div className="mt-4 space-y-3">
                  {todaysPlan.map((item) => (
                    <div className="flex items-center gap-3" key={item.title}>
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded-md border ${
                          item.done
                            ? "border-[#47cfcb] bg-[#47cfcb] text-white"
                            : "border-[#e0e0e0]"
                        }`}
                      >
                        {item.done ? (
                          <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M5 12.5 10 17 19 7" />
                          </svg>
                        ) : null}
                      </span>
                      <div className="min-w-0">
                        <p
                          className={`truncate text-sm font-medium ${
                            item.done ? "text-[#a8a8a8] line-through" : "text-[#2e2e2e]"
                          }`}
                        >
                          {item.title}
                        </p>
                        <p className="text-xs text-[#a8a8a8]">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-[#f3cfe5] bg-[#fdf3f7] p-5">
                <div className="flex items-start gap-3">
                  <ReggiePlaceholder size="sm" />
                  <div>
                    <p className="text-sm font-semibold text-[#c65b7c]">Reggie&apos;s tip</p>
                    <p className="mt-1 text-sm text-[#8a6d75]">
                      Small steps every day lead to big results.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Voice assistant + reminders */}
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <VoiceAssistant />
            <ReminderNotifications />
          </div>
        </section>
      </div>
    </main>
  );
}
