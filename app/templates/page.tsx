import { AppFrame } from "../components/AppFrame";

const templates = [
  {
    name: "Minimal productivity",
    description: "Clean planner for daily work, meetings, and focused blocks.",
    colors: ["bg-white", "bg-[#20201d]", "bg-[#d9e8df]"],
  },
  {
    name: "Pastel study planner",
    description: "Soft academic layout for classes, assignments, and revision.",
    colors: ["bg-[#f8d8cf]", "bg-[#f7e7ad]", "bg-[#cfe5df]"],
  },
  {
    name: "Dark focus mode",
    description: "Low-light dashboard for late night planning and deep work.",
    colors: ["bg-[#20201d]", "bg-[#356859]", "bg-[#dbc7a4]"],
  },
  {
    name: "Warm desk",
    description: "Cozy planning board for personal reminders and routines.",
    colors: ["bg-[#f8f5ef]", "bg-[#c75d4d]", "bg-[#8a6451]"],
  },
];

export default function TemplatesPage() {
  return (
    <AppFrame
      action="Preview theme"
      active="Templates"
      description="Choose visual planning modes inspired by aesthetic dashboards while keeping every asset original."
      eyebrow="Template studio"
      title="Aesthetic planning templates"
    >
      <section className="grid gap-5 md:grid-cols-2">
        {templates.map((template) => (
          <article
            className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            key={template.name}
          >
            <div className="grid h-36 grid-cols-3 gap-3 rounded-2xl bg-[#f1ece3] p-3">
              {template.colors.map((color) => (
                <span
                  className={`rounded-xl border border-[#ded7c9] ${color}`}
                  key={color}
                />
              ))}
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">{template.name}</h2>
                <p className="mt-2 text-sm text-[#777064]">
                  {template.description}
                </p>
              </div>
              <span className="rounded-full bg-[#edf7f2] px-3 py-1 text-xs font-semibold text-[#356859]">
                Mock
              </span>
            </div>
          </article>
        ))}
      </section>
    </AppFrame>
  );
}
