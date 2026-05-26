import { AppFrame } from "../components/AppFrame";

const hours = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"];

const events = [
  { time: "09:00", title: "AI daily brief", tag: "Brief", color: "bg-[#356859]" },
  { time: "11:30", title: "Google API setup", tag: "Build", color: "bg-[#c75d4d]" },
  { time: "15:00", title: "Voice parser testing", tag: "AI", color: "bg-[#8a6451]" },
  { time: "17:30", title: "Free slot suggested", tag: "Smart slot", color: "bg-[#dbc7a4]" },
];

export default function CalendarPage() {
  return (
    <AppFrame
      action="Add event"
      active="Calendar"
      description="Review time blocks, detect conflicts, and preview where Aautocal will place AI-scheduled tasks."
      eyebrow="Calendar workspace"
      title="Plan the week"
    >
      <section className="grid gap-5 xl:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold">Tuesday schedule</h2>
              <p className="text-sm text-[#777064]">
                Mock calendar blocks ready for Google Calendar sync.
              </p>
            </div>
            <div className="flex rounded-full bg-[#f1ece3] p-1 text-sm font-medium">
              {["Day", "Week", "Month"].map((view, index) => (
                <button
                  className={`rounded-full px-4 py-2 ${
                    index === 0 ? "bg-white shadow-sm" : "text-[#777064]"
                  }`}
                  key={view}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {hours.map((hour, index) => (
              <div
                className="grid gap-3 rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-3 md:grid-cols-[72px_1fr]"
                key={hour}
              >
                <p className="font-mono text-sm text-[#8a6451]">{hour}</p>
                <div className="min-h-20 rounded-xl border border-dashed border-[#ded7c9] bg-white p-3">
                  {events[index] ? (
                    <article className="rounded-xl border border-[#e7dfd1] bg-white p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span
                          className={`h-2 w-14 rounded-full ${events[index].color}`}
                        />
                        <span className="rounded-full bg-[#edf7f2] px-3 py-1 text-xs font-semibold text-[#356859]">
                          {events[index].tag}
                        </span>
                      </div>
                      <p className="mt-3 font-semibold">{events[index].title}</p>
                      <p className="mt-1 font-mono text-xs text-[#777064]">
                        {events[index].time}
                      </p>
                    </article>
                  ) : (
                    <p className="text-sm text-[#aaa195]">No event scheduled</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-[#ded7c9] bg-[#20201d] p-5 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#dbc7a4]">
              AI suggestion
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Best free slot</h2>
            <p className="mt-2 text-white/70">
              5:30 PM is open and follows a lighter event block.
            </p>
            <button className="mt-5 w-full rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#20201d]">
              Schedule focus block
            </button>
          </section>

          <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Filters</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Study", "Work", "Personal", "Health", "Deadlines"].map((tag) => (
                <span
                  className="rounded-full bg-[#f1ece3] px-3 py-2 text-sm font-semibold text-[#625c52]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </AppFrame>
  );
}
