import Image from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  CheckSquareIcon,
  GearIcon,
  HeartIcon,
  MenuIcon,
  PawIcon,
  SearchIcon,
  TimetableIcon,
} from "./components/Icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const checklistRows = [
  { classes: "bg-[#f89cac]/80" },
  { classes: "bg-[#47cfcb]/60" },
  { classes: "bg-[#47cfcb]/80" },
  { classes: "bg-[#f6b26b]/70" },
];

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#fdf6f2] text-[#2e2e2e]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Nav */}
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
          <Link className="flex items-center gap-2.5" href="/">
            <div className="grid size-9 place-items-center rounded-xl bg-[#f89cac] text-white">
              <CalendarIcon className="size-4.5" />
            </div>
            <p className="text-lg font-semibold">
              Auto<span className="text-[#f89cac]">Cal</span>
            </p>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#4a4a4a] md:flex">
            {navLinks.map((link) => (
              <a className="transition hover:text-[#f89cac]" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              className="rounded-full bg-[#f89cac] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e8628a]"
              href="/dashboard"
            >
              Get Started
            </Link>
            <button
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-full border border-[#f0e9e9] text-[#8a8a8a] md:hidden"
              type="button"
            >
              <MenuIcon className="size-4.5" />
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-6 grid gap-10 rounded-3xl border border-white bg-white/60 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Plan Smart.
              <br />
              <span className="text-[#f89cac]">Stay Ahead.</span>
            </h1>
            <p className="mt-5 max-w-md text-[#5a5a5a]">
              AutoCal is your intelligent calendar and task companion built for
              students who want structure, clarity and calm.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-[#f89cac] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e8628a]"
                href="/dashboard"
              >
                Get Started
              </Link>
              <a
                className="rounded-full border border-[#f3b6c4] px-7 py-3.5 text-sm font-semibold text-[#e8628a] transition hover:bg-white"
                href="#features"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative flex min-h-[380px] items-center justify-center">
            <div className="absolute inset-0 m-auto size-[320px] rounded-full bg-[#f89cac]/15 sm:size-[380px]" />

            {/* App card mockup */}
            <div className="absolute right-0 top-2 w-56 rounded-2xl border border-[#f0e9e9] bg-white p-3 shadow-lg sm:w-64">
              <div className="flex items-center gap-2 rounded-lg bg-[#f7f7f7] px-2 py-1.5 text-[#8a8a8a]">
                <MenuIcon className="size-3.5" />
                <SearchIcon className="size-3.5" />
                <TimetableIcon className="size-3.5" />
                <CheckSquareIcon className="size-3.5" />
                <GearIcon className="ml-auto size-3.5" />
              </div>
              <div className="mt-3 space-y-2">
                {checklistRows.map((row, i) => (
                  <div className="flex items-center gap-2" key={i}>
                    <span className="grid size-4 shrink-0 place-items-center rounded-full bg-[#47cfcb] text-white">
                      <svg className="size-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M5 12.5 10 17 19 7" />
                      </svg>
                    </span>
                    <span className={`h-4 flex-1 rounded-md ${row.classes}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky note */}
            <div className="absolute right-2 top-40 w-28 rotate-6 rounded-lg bg-[#fdf3d6] p-3 text-xs font-semibold leading-relaxed text-[#8a7a3e] shadow-md sm:right-4">
              Focus
              <br />
              Plan
              <br />
              Achieve
            </div>

            {/* Speech bubble */}
            <div className="absolute left-2 top-4 rounded-2xl rounded-bl-sm border border-[#f0e9e9] bg-white px-4 py-2.5 shadow-sm sm:left-8">
              <HeartIcon className="size-5 text-[#f89cac]" />
            </div>

            {/* Reggie */}
            <div className="relative mt-10 flex flex-col items-center">
              <Image
                alt="Reggie the AutoCal mascot, a dog working on a laptop"
                className="drop-shadow-sm"
                height={222}
                src="/reggie/reggie-laptop.png"
                width={237}
              />
            </div>
          </div>
        </section>

        {/* Quote bar */}
        <section className="mt-6 grid gap-6 rounded-3xl border border-white bg-white/60 p-6 sm:grid-cols-3 sm:p-8">
          <div className="sm:col-span-1">
            <p className="text-[#4a4a4a]">
              &quot;Discipline is the bridge between goals and accomplishment.&quot;
            </p>
            <p className="mt-1 text-sm text-[#8a8a8a]">
              &ndash; Reggie <PawIcon className="inline size-3 text-[#f89cac]" />
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-[#e2352f]">ti</span>
            <div>
              <p className="text-sm font-semibold">Made for</p>
              <p className="text-sm font-semibold">Thaparians</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HeartIcon className="size-6 shrink-0 text-[#f89cac]" />
            <div>
              <p className="text-sm font-semibold">Designed with</p>
              <p className="text-sm font-semibold">and Reggie</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
