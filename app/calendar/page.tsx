import { auth } from "@/auth";
import { createGoogleCalendarEvent } from "../actions/calendar";
import { AppFrame } from "../components/AppFrame";

const hours = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"];

const mockEvents = [
  { time: "09:00", title: "AI daily brief", tag: "Brief", color: "bg-[#356859]" },
  { time: "11:30", title: "Google API setup", tag: "Build", color: "bg-[#c75d4d]" },
  { time: "15:00", title: "Voice parser testing", tag: "AI", color: "bg-[#8a6451]" },
  { time: "17:30", title: "Free slot suggested", tag: "Smart slot", color: "bg-[#dbc7a4]" },
];

type CalendarEvent = {
  id: string;
  title: string;
  time: string;
  date: string;
  tag: string;
  color: string;
};

type GoogleCalendarItem = {
  id?: string;
  summary?: string;
  start?: {
    dateTime?: string;
    date?: string;
  };
};

async function getGoogleCalendarEvents(
  accessToken?: string,
): Promise<{ events: CalendarEvent[]; error?: string }> {
  if (!accessToken) {
    return {
      events: mockEvents.map((event, index) => ({
        ...event,
        id: `mock-${index}`,
        date: "Demo mode",
      })),
    };
  }

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?${new URLSearchParams(
      {
        maxResults: "8",
        orderBy: "startTime",
        singleEvents: "true",
        timeMin: new Date().toISOString(),
      },
    )}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 30 },
    },
  );

  if (!response.ok) {
    return {
      events: [],
      error: "Could not load Google Calendar events. Try reconnecting Google.",
    };
  }

  const data = (await response.json()) as { items?: GoogleCalendarItem[] };
  const colors = ["bg-[#356859]", "bg-[#c75d4d]", "bg-[#8a6451]", "bg-[#dbc7a4]"];

  return {
    events: (data.items ?? []).map((event, index) => {
      const start = event.start?.dateTime ?? event.start?.date;
      const date = start ? new Date(start) : null;

      return {
        id: event.id ?? `google-${index}`,
        title: event.summary || "Untitled event",
        time: date
          ? date.toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "All day",
        date: date
          ? date.toLocaleDateString("en-IN", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })
          : "No date",
        tag: "Google",
        color: colors[index % colors.length],
      };
    }),
  };
}

export default async function CalendarPage() {
  const session = await auth();
  const { events, error } = await getGoogleCalendarEvents(
    session?.googleAccessToken,
  );
  const isConnected = Boolean(session?.googleAccessToken);

  return (
    <AppFrame
      action={isConnected ? "Google synced" : "Demo calendar"}
      active="Calendar"
      description="Review time blocks, detect conflicts, and preview where Aautocal will place AI-scheduled tasks."
      eyebrow="Calendar workspace"
      title="Plan the week"
    >
      <section className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <div className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold">
                {isConnected ? "Upcoming Google events" : "Demo day schedule"}
              </h2>
              <p className="text-sm text-[#777064]">
                {isConnected
                  ? "Live events from your primary Google Calendar."
                  : "Connect Google Calendar to replace these mock blocks."}
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

          {error ? (
            <div className="mt-5 rounded-2xl border border-[#f0c8c0] bg-[#fff4f1] p-4 text-sm font-semibold text-[#9d3f31]">
              {error}
            </div>
          ) : null}

          <div className="mt-5 space-y-3">
            {hours.map((hour, index) => {
              const event = events[index];

              return (
                <div
                  className="grid gap-3 rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-3 md:grid-cols-[72px_1fr]"
                  key={hour}
                >
                  <p className="font-mono text-sm text-[#8a6451]">{hour}</p>
                  <div className="min-h-20 rounded-xl border border-dashed border-[#ded7c9] bg-white p-3">
                    {event ? (
                      <article className="rounded-xl border border-[#e7dfd1] bg-white p-3 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`h-2 w-14 rounded-full ${event.color}`}
                          />
                          <span className="rounded-full bg-[#edf7f2] px-3 py-1 text-xs font-semibold text-[#356859]">
                            {event.tag}
                          </span>
                        </div>
                        <p className="mt-3 font-semibold">{event.title}</p>
                        <p className="mt-1 font-mono text-xs text-[#777064]">
                          {event.date} at {event.time}
                        </p>
                      </article>
                    ) : (
                      <p className="text-sm text-[#aaa195]">No event scheduled</p>
                    )}
                  </div>
                </div>
              );
            })}
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
            <h2 className="text-xl font-semibold">Create Google event</h2>
            <p className="mt-1 text-sm text-[#777064]">
              Adds a 30-minute popup reminder by default.
            </p>
            <form action={createGoogleCalendarEvent} className="mt-4 space-y-3">
              <label className="block">
                <span className="text-sm font-semibold text-[#625c52]">Title</span>
                <input
                  className="mt-2 w-full rounded-xl border border-[#ded7c9] bg-[#fbfaf7] px-3 py-3 text-sm outline-none focus:border-[#356859]"
                  name="title"
                  placeholder="Project review"
                  required
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#625c52]">Start</span>
                <input
                  className="mt-2 w-full rounded-xl border border-[#ded7c9] bg-[#fbfaf7] px-3 py-3 text-sm outline-none focus:border-[#356859]"
                  name="start"
                  required
                  type="datetime-local"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#625c52]">End</span>
                <input
                  className="mt-2 w-full rounded-xl border border-[#ded7c9] bg-[#fbfaf7] px-3 py-3 text-sm outline-none focus:border-[#356859]"
                  name="end"
                  required
                  type="datetime-local"
                />
              </label>
              <button
                className="w-full rounded-full bg-[#356859] px-4 py-3 text-sm font-semibold text-white disabled:bg-[#aaa195]"
                disabled={!isConnected}
                type="submit"
              >
                {isConnected ? "Create event" : "Connect Google first"}
              </button>
            </form>
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
