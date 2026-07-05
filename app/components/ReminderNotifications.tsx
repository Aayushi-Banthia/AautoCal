"use client";

import { useState } from "react";
import { BellIcon } from "./Icons";
import { ReggiePlaceholder } from "./ReggiePlaceholder";

const demoReminder = {
  title: "Aautocal reminder",
  body: "Your project review starts in 30 minutes.",
};

export function ReminderNotifications() {
  const [status, setStatus] = useState("Notification permission not requested.");

  async function requestPermission() {
    if (!("Notification" in window)) {
      setStatus("Browser notifications are not supported here.");
      return;
    }

    const permission = await Notification.requestPermission();
    setStatus(`Notification permission: ${permission}.`);
  }

  function sendDemoReminder() {
    if (!("Notification" in window)) {
      setStatus("Browser notifications are not supported here.");
      return;
    }

    if (Notification.permission !== "granted") {
      setStatus("Allow notifications before testing a reminder.");
      return;
    }

    new Notification(demoReminder.title, {
      body: demoReminder.body,
    });
    setStatus("Demo reminder sent.");
  }

  return (
    <section className="flex flex-col rounded-3xl border border-[#f0e9e9] bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#fdeef1] text-[#f89cac]">
              <BellIcon className="size-4" />
            </span>
            <h2 className="text-xl font-semibold leading-tight">
              Reminder
              <br />
              <span className="text-[#f89cac]">notifications</span>
            </h2>
          </div>
          <p className="mt-2 text-sm text-[#8a8a8a]">{status}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full border border-[#f0e9e9] px-4 py-3 text-sm font-semibold text-[#1f7d78] transition hover:bg-[#f0fbfa]"
            onClick={requestPermission}
            type="button"
          >
            Allow alerts
          </button>
          <button
            className="rounded-2xl bg-[#f89cac] px-4 py-3 text-sm font-semibold leading-tight text-white transition hover:bg-[#e8628a]"
            onClick={sendDemoReminder}
            type="button"
          >
            Test reminder
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-4 py-6 text-center">
        <ReggiePlaceholder size="lg" />
        <div>
          <p className="font-semibold">No reminders yet</p>
          <p className="mt-1 text-sm text-[#8a8a8a]">
            Allow alerts and test a reminder to get started.
          </p>
        </div>
      </div>
    </section>
  );
}
