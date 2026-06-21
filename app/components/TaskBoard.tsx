"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Task = {
  id: string;
  title: string;
  status: "Inbox" | "Scheduled" | "Done";
};

const starterTasks: Task[] = [
  { id: "1", title: "Connect Google OAuth", status: "Done" },
  { id: "2", title: "Collect voice command examples", status: "Inbox" },
  { id: "3", title: "Build reminder settings", status: "Scheduled" },
  { id: "4", title: "Create calendar event form", status: "Done" },
];

const statuses: Task["status"][] = ["Inbox", "Scheduled", "Done"];

export function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === "undefined") {
      return starterTasks;
    }

    const stored = window.localStorage.getItem("aautocal-tasks");

    if (stored) {
      return JSON.parse(stored) as Task[];
    }

    return starterTasks;
  });

  useEffect(() => {
    window.localStorage.setItem("aautocal-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const counts = useMemo(
    () => ({
      highPriority: tasks.filter((task) => task.status !== "Done").length,
      scheduled: tasks.filter((task) => task.status === "Scheduled").length,
      done: tasks.filter((task) => task.status === "Done").length,
    }),
    [tasks],
  );

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title") || "").trim();

    if (!title) {
      return;
    }

    setTasks((current) => [
      ...current,
      { id: crypto.randomUUID(), title, status: "Inbox" },
    ]);
    event.currentTarget.reset();
  }

  function moveTask(id: string, status: Task["status"]) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  }

  return (
    <>
      <section className="grid gap-5 md:grid-cols-3">
        {[
          { label: "Open tasks", value: counts.highPriority, color: "bg-[#c75d4d]" },
          { label: "AI scheduled", value: counts.scheduled, color: "bg-[#356859]" },
          { label: "Completed", value: counts.done, color: "bg-[#8a6451]" },
        ].map((item) => (
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

      <form
        action="#"
        className="rounded-2xl border border-[#ded7c9] bg-white/85 p-4 shadow-sm"
        onSubmit={addTask}
      >
        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            className="rounded-2xl border border-[#ded7c9] bg-[#fbfaf7] px-4 py-3 text-sm outline-none focus:border-[#356859]"
            name="title"
            placeholder="Add a new task for Aautocal"
            type="text"
          />
          <button
            className="rounded-2xl bg-[#20201d] px-5 py-3 text-sm font-semibold text-white"
            type="submit"
          >
            Add task
          </button>
        </div>
      </form>

      <section className="grid gap-5 lg:grid-cols-3">
        {statuses.map((status) => {
          const columnTasks = tasks.filter((task) => task.status === status);

          return (
            <div
              className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm"
              key={status}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{status}</h2>
                <span className="rounded-full bg-[#f1ece3] px-3 py-1 text-xs font-semibold text-[#625c52]">
                  {columnTasks.length}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {columnTasks.map((task) => (
                  <article
                    className="rounded-2xl border border-[#e7dfd1] bg-[#fbfaf7] p-4 transition hover:border-[#356859]"
                    key={task.id}
                  >
                    <p className="font-semibold">{task.title}</p>
                    <p className="mt-2 text-sm text-[#777064]">
                      Saved locally for demo persistence.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {statuses.map((nextStatus) => (
                        <button
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                            nextStatus === task.status
                              ? "bg-[#20201d] text-white"
                              : "bg-[#f1ece3] text-[#625c52]"
                          }`}
                          key={nextStatus}
                          onClick={() => moveTask(task.id, nextStatus)}
                          type="button"
                        >
                          {nextStatus}
                        </button>
                      ))}
                    </div>
                  </article>
                ))}
                {columnTasks.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-[#ded7c9] bg-[#fbfaf7] p-4 text-sm text-[#777064]">
                    No tasks here yet.
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
