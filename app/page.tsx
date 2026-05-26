const days = [
  { name: "Mon", date: "26", focus: "Design", load: "3 events" },
  { name: "Tue", date: "27", focus: "Study", load: "5 events" },
  { name: "Wed", date: "28", focus: "Build", load: "4 events" },
  { name: "Thu", date: "29", focus: "Review", load: "2 events" },
  { name: "Fri", date: "30", focus: "Demo", load: "3 events" },
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#20201d]">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-5 py-5 lg:px-8">
        <aside className="hidden w-64 shrink-0 flex-col justify-between rounded-2xl border border-[#ded7c9] bg-white/80 p-5 shadow-sm lg:flex">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-[#20201d] text-lg font-semibold text-white">
                A
              </div>
              <div>
                <p className="text-lg font-semibold">Aautocal</p>
                <p className="text-sm text-[#777064]">Voice calendar</p>
              </div>
            </div>

            <nav className="mt-10 space-y-2 text-sm font-medium">
              {["Dashboard", "Calendar", "Tasks", "Templates", "Settings"].map(
                (item, index) => (
                  <button
                    className={`w-full rounded-xl px-4 py-3 text-left transition ${
                      index === 0
                        ? "bg-[#20201d] text-white"
                        : "text-[#625c52] hover:bg-[#f1ece3]"
                    }`}
                    key={item}
                  >
                    {item}
                  </button>
                ),
              )}
            </nav>
          </div>

          <div className="rounded-2xl bg-[#f1ece3] p-4">
            <p className="text-sm font-semibold">Today&apos;s focus</p>
            <p className="mt-2 text-2xl font-semibold">4h 30m</p>
            <p className="mt-1 text-sm text-[#777064]">Protected planning time</p>
          </div>
        </aside>

        <section className="flex flex-1 flex-col gap-6">
          <header className="flex flex-col justify-between gap-4 rounded-2xl border border-[#ded7c9] bg-white/80 p-5 shadow-sm md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8a6451]">
                AI planning workspace
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Good morning, Aayushi
              </h1>
              <p className="mt-2 max-w-2xl text-[#625c52]">
                Speak a messy plan, get a clear calendar. Aautocal will turn
                voice commands into events, reminders, and smart schedules.
              </p>
            </div>

            <button className="rounded-full bg-[#356859] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2c574b]">
              Connect Google Calendar
            </button>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
            <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h2 className="text-xl font-semibold">Weekly command view</h2>
                  <p className="text-sm text-[#777064]">
                    Your flexible Notion-style calendar preview.
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

              <div className="mt-6 grid gap-3 md:grid-cols-5">
                {days.map((day, index) => (
                  <article
                    className={`min-h-44 rounded-2xl border p-4 ${
                      index === 2
                        ? "border-[#356859] bg-[#edf7f2]"
                        : "border-[#e7dfd1] bg-[#fbfaf7]"
                    }`}
                    key={day.name}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{day.name}</p>
                      <p className="rounded-full bg-white px-3 py-1 text-sm">
                        {day.date}
                      </p>
                    </div>
                    <p className="mt-8 text-lg font-semibold">{day.focus}</p>
                    <p className="mt-1 text-sm text-[#777064]">{day.load}</p>
                    <div className="mt-5 h-2 rounded-full bg-[#ded7c9]">
                      <div
                        className="h-2 rounded-full bg-[#c75d4d]"
                        style={{ width: `${42 + index * 10}%` }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#ded7c9] bg-[#20201d] p-5 text-white shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#dbc7a4]">
                Voice assistant
              </p>
              <h2 className="mt-3 text-2xl font-semibold">What should I plan?</h2>
              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-white/70">Try saying</p>
                <p className="mt-2 text-lg">
                  &quot;Plan two study sessions before Friday.&quot;
                </p>
              </div>
              <button className="mt-5 w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#20201d] transition hover:bg-[#f1ece3]">
                Start voice command
              </button>
            </section>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
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
                    className="rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-4 text-sm text-[#625c52]"
                    key={command}
                  >
                    {command}
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
