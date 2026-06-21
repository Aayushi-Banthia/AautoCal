# AautoCal Product Requirements Document

## Project Overview

AautoCal is a voice-first calendar and reminder web app that helps users turn natural language planning into structured calendar events, tasks, reminders, and planning dashboards. The current product is a Next.js 16 App Router application with a multi-page dashboard, Auth.js Google OAuth, Google Calendar integration, browser voice input, browser notification testing, and local task persistence.

The long-term product direction is an AI planning assistant that understands messy user intent, asks clarifying questions, schedules work around real calendar availability, and provides an aesthetic Notion-style planning experience.

## Problem Statement

Students and busy professionals often track plans across calendars, reminders, notes, and task boards. Manually creating events, remembering deadlines, and rescheduling work is slow and easy to neglect. AautoCal aims to reduce this friction by letting users speak or type planning requests and convert them into organized calendar actions.

## Target Users

- Students managing classes, assignments, exams, and project deadlines.
- Early-career professionals balancing meetings, focus work, and personal reminders.
- Productivity-focused users who like Notion-style dashboards but need calendar automation.
- Demo/evaluator users reviewing a practical LLM-enabled productivity project.

## User Stories

- As a user, I want to connect my Google Calendar so I can view upcoming events inside AautoCal.
- As a user, I want to create, edit, reschedule, and delete calendar events from one dashboard.
- As a user, I want to speak a scheduling command and see a transcript with extracted event details.
- As a user, I want reminders that can trigger browser notifications.
- As a user, I want to manage tasks in Inbox, Scheduled, and Done states.
- As a user, I want task changes to persist locally during a demo or planning session.
- As a user, I want a polished dashboard with calendar, task, template, and settings pages.
- As a future user, I want AI to parse natural language into event fields and suggest schedule changes.

## Core Features

### Implemented

- Multi-page dashboard with routes for Dashboard, Calendar, Tasks, Templates, and Settings.
- Auth.js Google OAuth setup with Google provider and calendar event scope.
- Google Calendar event fetching for signed-in users.
- Google Calendar event creation with title, start, end, and a default 30-minute popup reminder.
- Google Calendar event editing/rescheduling through PATCH requests.
- Google Calendar event deletion through DELETE requests.
- Demo calendar fallback when Google is not connected.
- Browser voice input MVP using Web Speech API where supported.
- Transcript preview and simple client-side event detail extraction.
- Browser reminder notification permission and test reminder UI.
- Persistent task board using `localStorage`.
- Task creation and status movement across Inbox, Scheduled, and Done.
- Aesthetic theme/template preview UI.

### Planned

- OpenAI API integration for robust natural-language event parsing.
- Confirmation flow that turns parsed voice commands into calendar events.
- Smart scheduling based on free slots.
- User-friendly success and error feedback for all server actions.
- Production deployment on Vercel.
- Production Google OAuth callback configuration.
- Automated route and integration testing.
- Demo screenshots and walkthrough video.

## Technical Architecture

- Framework: Next.js 16 App Router with React 19 and TypeScript.
- Styling: Tailwind CSS 4 with custom dashboard styling.
- Authentication: Auth.js / `next-auth` beta with Google provider.
- Google Calendar: Server actions call Google Calendar REST API using the session access token.
- Calendar UI: Server-rendered Calendar page fetches upcoming primary-calendar events and renders editable controls.
- Voice input: Client component uses browser `SpeechRecognition` / `webkitSpeechRecognition`.
- Reminders: Client component uses Browser Notifications API for permission and demo alert.
- Tasks: Client component stores task data in `localStorage`.
- Environment: `.env.local` for local secrets; `.env.example` documents required keys.

## Current Implementation Status

- UI foundation: Complete for MVP demo.
- Google OAuth code: Implemented; production configuration still pending.
- Google Calendar read/create/edit/delete: Implemented in code; requires real-account E2E testing.
- Voice command capture: Implemented as browser MVP; not yet LLM-powered.
- Task board: Implemented with local persistence.
- Reminder notifications: Implemented as browser test flow; no scheduled background worker.
- Testing: `npm run lint` and `npm run build` have been verified; automated E2E tests are not implemented.
- Deployment: Not deployed yet.

## Known Limitations

- Voice parsing is rule-based and limited; it is not using an LLM yet.
- Google access-token expiry and refresh-token recovery are not fully handled.
- Server-action errors currently throw errors instead of showing polished inline feedback.
- Tasks are stored only in browser `localStorage`, not synced across devices.
- Reminder notifications are manual/test-only and do not run from a background scheduler.
- Calendar UI shows a limited number of upcoming events in a simplified layout.
- Browser speech recognition support varies by browser.
- No automated test suite or Playwright smoke tests yet.
- Production OAuth, privacy messaging, and deployment configuration are incomplete.

## Future Enhancements

- Add OpenAI-powered intent parsing for event title, date, time, reminder, recurrence, and follow-up questions.
- Add a confirmation card that creates events directly from parsed voice commands.
- Add free-slot detection and smart schedule recommendations.
- Add database-backed tasks and user preferences.
- Add recurring reminders, notification scheduling, and stronger reminder controls.
- Add theme switching for Minimal, Pastel, Dark Focus, and Warm Desk modes.
- Add analytics for focus hours, overload days, and weekly planning summaries.
- Add meeting-prep assistant and daily briefing generation.

## Deployment Requirements

- Vercel project connected to the GitHub repository.
- Environment variables configured in Vercel:
  - `AUTH_SECRET`
  - `AUTH_GOOGLE_ID`
  - `AUTH_GOOGLE_SECRET`
  - `AUTH_URL`
- Google OAuth production redirect URI:

```text
https://<vercel-domain>/api/auth/callback/google
```

- Google Calendar API enabled in the Google Cloud project.
- OAuth consent screen configured with test users or published app status.
- Verified build command: `npm run build`.
- Privacy/security note describing Google Calendar data access.

## Success Metrics

- A user can sign in with Google and view upcoming calendar events.
- A user can create, edit/reschedule, and delete a Google Calendar event from AautoCal.
- A user can record a voice command and see a transcript plus extracted event details.
- A user can test browser reminder notifications.
- A user can add and move tasks with state preserved after refresh.
- The app passes lint and production build checks.
- The deployed MVP can be demonstrated end-to-end without local-only assumptions.
