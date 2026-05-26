const navItems = [
  { label: "Dashboard", icon: "D" },
  { label: "Calendar", icon: "C" },
  { label: "Tasks", icon: "T" },
  { label: "Templates", icon: "P" },
  { label: "Settings", icon: "S" },
];

const stats = [
  { label: "Events today", value: "7", detail: "2 AI suggested" },
  { label: "Focus hours", value: "4.5h", detail: "Protected blocks" },
  { label: "Free slots", value: "3", detail: "Best at 5:30 PM" },
  { label: "Reminders", value: "9", detail: "4 voice alerts" },
];

const days = [
  {
    name: "Mon",
    date: "26",
    focus: "Design",
    load: "3 events",
    events: [
      { time: "09:00", title: "Daily brief", color: "bg-[#356859]" },
      { time: "14:00", title: "Template research", color: "bg-[#c75d4d]" },
    ],
  },
  {
    name: "Tue",
    date: "27",
    focus: "Study",
    load: "5 events",
    events: [
      { time: "10:30", title: "AI parser notes", color: "bg-[#8a6451]" },
      { time: "18:00", title: "Revision block", color: "bg-[#356859]" },
    ],
  },
  {
    name: "Wed",
    date: "28",
    focus: "Build",
    load: "4 events",
    events: [
      { time: "11:00", title: "Dashboard UI", color: "bg-[#c75d4d]" },
      { time: "16:30", title: "Voice states", color: "bg-[#356859]" },
    ],
  },
  {
    name: "Thu",
    date: "29",
    focus: "Review",
    load: "2 events",
    events: [
      { time: "12:00", title: "Sync planning", color: "bg-[#8a6451]" },
    ],
  },
  {
    name: "Fri",
    date: "30",
    focus: "Demo",
    load: "3 events",
    events: [
      { time: "15:00", title: "Project demo", color: "bg-[#c75d4d]" },
      { time: "19:00", title: "Weekly summary", color: "bg-[#356859]" },
    ],
  },
];

const reminders = [
  { time: "09:00", title: "Daily planning brief", type: "AI brief" },
  { time: "13:30", title: "Project research block", type: "Focus" },
  { time: "18:00", title: "Prepare tomorrow's schedule", type: "Reminder" },
];

const commands = [
  "Schedule a study session tomorrow at 6 PM",
  "Find me two free slots before Friday",
  "Remind me 30 minutes before my meeting",
];

const themes = [
  {
    name: "Minimal productivity",
    accent: "bg-[#356859]",
    colors: ["bg-white", "bg-[#20201d]", "bg-[#d9e8df]"],
  },
  {
    name: "Pastel planner",
    accent: "bg-[#c75d4d]",
    colors: ["bg-[#f8d8cf]", "bg-[#f7e7ad]", "bg-[#cfe5df]"],
  },
  {
    name: "Dark focus mode",
    accent: "bg-[#20201d]",
    colors: ["bg-[#20201d]", "bg-[#356859]", "bg-[#dbc7a4]"],
  },
];

const aiDetails = [
  ["Title", "Study session"],
  ["Date", "Tomorrow"],
  ["Time", "6:00 PM"],
  ["Reminder", "30 minutes before"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#20201d]">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-4 py-4 lg:px-6">
        <aside className="hidden w-64 shrink-0 flex-col justify-between rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm lg:flex">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-xl bg-[#20201d] text-lg font-semibold text-white">
                AC
              </div>
              <div>
                <p className="text-lg font-semibold">Aautocal</p>
                <p className="text-sm text-[#777064]">Voice calendar</p>
              </div>
            </div>

            <nav className="mt-9 space-y-2 text-sm font-medium">
              {navItems.map((item, index) => (
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    index === 0
                      ? "bg-[#20201d] text-white"
                      : "text-[#625c52] hover:bg-[#f1ece3]"
                  }`}
                  key={item.label}
                >
                  <span className="grid size-7 place-items-center rounded-lg bg-white/20 text-xs">
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl bg-[#f1ece3] p-4">
            <p className="text-sm font-semibold">Today&apos;s focus</p>
            <p className="mt-2 text-2xl font-semibold">4h 30m</p>
            <p className="mt-1 text-sm text-[#777064]">Protected planning time</p>
          </div>
        </aside>

        <section className="flex flex-1 flex-col gap-5">
          <div className="flex items-center justify-between rounded-2xl border border-[#ded7c9] bg-white/85 p-3 shadow-sm lg:hidden">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-[#20201d] text-sm font-semibold text-white">
                AC
              </div>
              <div>
                <p className="font-semibold">Aautocal</p>
                <p className="text-xs text-[#777064]">Dashboard</p>
              </div>
            </div>
            <button className="rounded-xl border border-[#ded7c9] px-3 py-2 text-sm font-semibold">
              Menu
            </button>
          </div>

          <header className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8a6451]">
                  AI planning workspace
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                  Good morning, Aayushi
                </h1>
                <p className="mt-2 max-w-2xl text-[#625c52]">
                  Speak a messy plan, get a clear calendar. Aautocal turns voice
                  commands into events, reminders, and smart schedules.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full border border-[#ded7c9] px-5 py-3 text-sm font-semibold text-[#356859] transition hover:bg-[#edf7f2]">
                  Today
                </button>
                <button className="rounded-full bg-[#356859] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2c574b]">
                  Connect Google Calendar
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <article
                  className="rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-4"
                  key={stat.label}
                >
                  <p className="text-sm text-[#777064]">{stat.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-[#8a6451]">
                    {stat.detail}
                  </p>
                </article>
              ))}
            </div>
          </header>

          <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-4 shadow-sm">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="flex flex-1 items-center rounded-2xl border border-[#ded7c9] bg-[#fbfaf7] px-4 py-3">
                <span className="mr-3 text-sm font-semibold text-[#8a6451]">
                  Ask
                </span>
                <p className="text-sm text-[#777064]">
                  Try: plan my week around my project deadline
                </p>
              </div>
              <button className="rounded-2xl bg-[#20201d] px-5 py-3 text-sm font-semibold text-white">
                Run AI plan
              </button>
            </div>
          </section>

          <div className="grid gap-5 xl:grid-cols-[1.45fr_0.85fr]">
            <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h2 className="text-xl font-semibold">Weekly command view</h2>
                  <p className="text-sm text-[#777064]">
                    Flexible calendar blocks with AI-suggested workload.
                  </p>
                </div>
                <div className="flex rounded-full bg-[#f1ece3] p-1 text-sm font-medium">
                  {["Day", "Week", "Month"].map((view, index) => (
                    <button
                      className={`rounded-full px-4 py-2 ${
                        index === 1 ? "bg-white shadow-sm" : "text-[#777064]"
                      }`}
                      key={view}
                    >
                      {view}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-5">
                {days.map((day, index) => (
                  <article
                    className={`min-h-64 rounded-2xl border p-4 transition hover:-translate-y-1 hover:shadow-md ${
                      index === 2
                        ? "border-[#356859] bg-[#edf7f2]"
                        : "border-[#e7dfd1] bg-[#fbfaf7]"
                    }`}
                    key={day.name}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{day.name}</p>
                        <p className="text-xs text-[#777064]">{day.focus}</p>
                      </div>
                      <p className="rounded-full bg-white px-3 py-1 text-sm">
                        {day.date}
                      </p>
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6451]">
                      {day.load}
                    </p>
                    <div className="mt-3 space-y-3">
                      {day.events.map((event) => (
                        <div
                          className="rounded-xl border border-[#e7dfd1] bg-white p-3 shadow-sm"
                          key={event.title}
                        >
                          <div
                            className={`mb-2 h-1.5 w-12 rounded-full ${event.color}`}
                          />
                          <p className="font-mono text-xs text-[#8a6451]">
                            {event.time}
                          </p>
                          <p className="mt-1 text-sm font-semibold">
                            {event.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#ded7c9] bg-[#20201d] p-5 text-white shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#dbc7a4]">
                  Voice assistant
                </p>
                <span className="rounded-full bg-[#356859] px-3 py-1 text-xs font-semibold">
                  Listening ready
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold">What should I plan?</h2>
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-white/70">Transcript preview</p>
                <p className="mt-2 text-lg">
                  &quot;Schedule a study session tomorrow at 6 PM.&quot;
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-white p-4 text-[#20201d]">
                <p className="text-sm font-semibold text-[#8a6451]">
                  AI interpretation
                </p>
                <div className="mt-3 grid gap-2">
                  {aiDetails.map(([label, value]) => (
                    <div
                      className="flex items-center justify-between rounded-xl bg-[#f8f5ef] px-3 py-2 text-sm"
                      key={label}
                    >
                      <span className="text-[#777064]">{label}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-semibold">
                {["Idle", "Listening", "Confirm"].map((state, index) => (
                  <span
                    className={`rounded-full px-3 py-2 text-center ${
                      index === 1
                        ? "bg-[#dbc7a4] text-[#20201d]"
                        : "bg-white/10 text-white/70"
                    }`}
                    key={state}
                  >
                    {state}
                  </span>
                ))}
              </div>

              <button className="mt-5 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#20201d] transition hover:bg-[#f1ece3]">
                Start voice command
              </button>
            </section>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Upcoming reminders</h2>
              <div className="mt-4 space-y-3">
                {reminders.map((item) => (
                  <article
                    className="flex items-center justify-between rounded-2xl bg-[#fbfaf7] p-4"
                    key={item.title}
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-[#777064]">{item.type}</p>
                    </div>
                    <p className="font-mono text-sm text-[#8a6451]">
                      {item.time}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">LLM skill showcase</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {commands.map((command) => (
                  <article
                    className="rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-4 text-sm text-[#625c52] transition hover:border-[#c75d4d]"
                    key={command}
                  >
                    {command}
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl font-semibold">Aesthetic templates</h2>
                <p className="text-sm text-[#777064]">
                  Visual planning modes inspired by productivity dashboards.
                </p>
              </div>
              <span className="rounded-full bg-[#edf7f2] px-3 py-1 text-xs font-semibold text-[#356859]">
                Theme switching soon
              </span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {themes.map((theme) => (
                <article
                  className="rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-4"
                  key={theme.name}
                >
                  <div className="flex gap-2">
                    {theme.colors.map((color) => (
                      <span
                        className={`h-10 flex-1 rounded-xl border border-[#ded7c9] ${color}`}
                        key={color}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold">{theme.name}</p>
                    <span className={`size-3 rounded-full ${theme.accent}`} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
