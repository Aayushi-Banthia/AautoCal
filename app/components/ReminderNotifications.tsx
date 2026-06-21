"use client";

import { useState } from "react";

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
    <section className="rounded-2xl border border-[#ded7c9] bg-white/85 p-5 shadow-sm">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-semibold">Reminder notifications</h2>
          <p className="mt-1 text-sm text-[#777064]">{status}</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <button
            className="rounded-full border border-[#ded7c9] px-4 py-3 text-sm font-semibold text-[#356859] transition hover:bg-[#edf7f2]"
            onClick={requestPermission}
            type="button"
          >
            Allow alerts
          </button>
          <button
            className="rounded-full bg-[#20201d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#363630]"
            onClick={sendDemoReminder}
            type="button"
          >
            Test reminder
          </button>
        </div>
      </div>
    </section>
  );
}
