import { AppFrame } from "../components/AppFrame";

const integrations = [
  { name: "Google Calendar", status: "Not connected", action: "Connect" },
  { name: "OpenAI API", status: "Key required", action: "Configure" },
  { name: "Voice input", status: "Browser preview", action: "Test mic" },
];

const reminderModes = [
  "Browser notification",
  "Voice playback",
  "Repeated reminder",
  "Smart travel buffer",
];

export default function SettingsPage() {
  return (
    <AppFrame
      action="Save settings"
      active="Settings"
      description="Prepare the product settings needed for Google sync, AI parsing, voice commands, and reminder behavior."
      eyebrow="App preferences"
      title="Settings and integrations"
    >
      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Integrations</h2>
          <div className="mt-4 space-y-3">
            {integrations.map((item) => (
              <article
                className="flex flex-col justify-between gap-3 rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-4 sm:flex-row sm:items-center"
                key={item.name}
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-[#777064]">{item.status}</p>
                </div>
                <button className="rounded-full bg-[#20201d] px-4 py-2 text-sm font-semibold text-white">
                  {item.action}
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Reminder behavior</h2>
          <div className="mt-4 space-y-3">
            {reminderModes.map((mode, index) => (
              <label
                className="flex items-center justify-between rounded-2xl bg-[#fbfaf7] p-4"
                key={mode}
              >
                <span className="font-medium">{mode}</span>
                <span
                  className={`h-7 w-12 rounded-full p-1 ${
                    index < 2 ? "bg-[#356859]" : "bg-[#ded7c9]"
                  }`}
                >
                  <span
                    className={`block size-5 rounded-full bg-white ${
                      index < 2 ? "ml-5" : ""
                    }`}
                  />
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#ded7c9] bg-[#20201d] p-5 text-white shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#dbc7a4]">
          Next technical milestone
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          Connect Google OAuth and Calendar API
        </h2>
        <p className="mt-2 max-w-2xl text-white/70">
          These settings are UI placeholders for the next build phase, where the
          buttons will connect to real auth, calendar sync, and AI parsing flows.
        </p>
      </section>
    </AppFrame>
  );
}
