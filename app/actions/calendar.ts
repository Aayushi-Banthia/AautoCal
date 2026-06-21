"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function createGoogleCalendarEvent(formData: FormData) {
  const session = await auth();
  const accessToken = session?.googleAccessToken;

  if (!accessToken) {
    throw new Error("Connect Google Calendar before creating events.");
  }

  const title = String(formData.get("title") || "").trim();
  const start = String(formData.get("start") || "");
  const end = String(formData.get("end") || "");

  if (!title || !start || !end) {
    throw new Error("Event title, start time, and end time are required.");
  }

  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: title,
        start: {
          dateTime: new Date(start).toISOString(),
        },
        end: {
          dateTime: new Date(end).toISOString(),
        },
        reminders: {
          useDefault: false,
          overrides: [{ method: "popup", minutes: 30 }],
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Google Calendar could not create the event.");
  }

  revalidatePath("/calendar");
}

export async function deleteGoogleCalendarEvent(formData: FormData) {
  const session = await auth();
  const accessToken = session?.googleAccessToken;
  const eventId = String(formData.get("eventId") || "");

  if (!accessToken) {
    throw new Error("Connect Google Calendar before deleting events.");
  }

  if (!eventId) {
    throw new Error("Missing Google Calendar event ID.");
  }

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Google Calendar could not delete the event.");
  }

  revalidatePath("/calendar");
}

export async function updateGoogleCalendarEvent(formData: FormData) {
  const session = await auth();
  const accessToken = session?.googleAccessToken;
  const eventId = String(formData.get("eventId") || "");
  const title = String(formData.get("title") || "").trim();
  const start = String(formData.get("start") || "");
  const end = String(formData.get("end") || "");

  if (!accessToken) {
    throw new Error("Connect Google Calendar before editing events.");
  }

  if (!eventId || !title || !start || !end) {
    throw new Error("Event ID, title, start time, and end time are required.");
  }

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        summary: title,
        start: {
          dateTime: new Date(start).toISOString(),
        },
        end: {
          dateTime: new Date(end).toISOString(),
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Google Calendar could not update the event.");
  }

  revalidatePath("/calendar");
}
