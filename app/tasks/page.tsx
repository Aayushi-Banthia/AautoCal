import { AppFrame } from "../components/AppFrame";

const columns = [
  {
    title: "Inbox",
    tasks: ["Connect Google OAuth", "Collect voice command examples"],
  },
  {
    title: "Scheduled",
    tasks: ["Build reminder settings", "Create calendar event form"],
  },
  {
    title: "Done",
    tasks: ["Initialize Next.js app", "Create dashboard prototype"],
  },
];

const priorities = [
  { label: "High priority", value: "3", color: "bg-[#c75d4d]" },
  { label: "AI scheduled", value: "5", color: "bg-[#356859]" },
  { label: "Waiting", value: "2", color: "bg-[#8a6451]" },
];

export default function TasksPage() {
  return (
    <AppFrame
      action="New task"
      active="Tasks"
      description="Combine flexible tasks with calendar blocks so Aautocal can turn goals into scheduled work."
      eyebrow="Task command center"
      title="Tasks that know your calendar"
    >
      <section className="grid gap-5 md:grid-cols-3">
        {priorities.map((item) => (
          <article
            className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm"
            key={item.label}
          >
            <span className={`block h-2 w-16 rounded-full ${item.color}`} />
            <p className="mt-4 text-sm text-[#777064]">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {columns.map((column) => (
          <div
            className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm"
            key={column.title}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{column.title}</h2>
              <span className="rounded-full bg-[#f1ece3] px-3 py-1 text-xs font-semibold text-[#625c52]">
                {column.tasks.length}
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {column.tasks.map((task, index) => (
                <article
                  className="rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-4 transition hover:border-[#356859]"
                  key={task}
                >
                  <p className="font-semibold">{task}</p>
                  <p className="mt-2 text-sm text-[#777064]">
                    {index === 0
                      ? "Suggested duration: 45 min"
                      : "Reminder: tomorrow morning"}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </AppFrame>
  );
}
