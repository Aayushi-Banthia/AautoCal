# AautoCal Next Steps

## P0 - Production-Ready MVP Blockers

| Task | Description | Estimated Effort | Dependencies | Definition of Done |
|---|---|---:|---|---|
| Real Google Calendar E2E test | Manually test sign-in, event fetch, event create, event edit/reschedule, and event delete using a real Google account. | 1-2 hours | Valid `.env.local`, Google OAuth test user, Calendar API enabled | All Calendar page actions work against a real primary Google Calendar without console or server errors. |
| User-facing action feedback | Replace raw thrown server-action failures with visible success/error states for create, edit, and delete workflows. | 3-5 hours | Existing calendar server actions | Users see clear confirmation or failure messages without relying on terminal output. |
| Vercel deployment | Deploy the app from GitHub to Vercel. | 1-2 hours | GitHub repo, Vercel account | Public deployment URL loads all core routes. |
| Production environment setup | Configure Vercel environment variables: `AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_URL`. | 30-60 minutes | Vercel deployment | Vercel build has all required auth variables and no secret is committed to Git. |
| Production Google OAuth redirect | Add the production callback URL in Google Cloud. | 30 minutes | Vercel domain | Google OAuth allows `https://<vercel-domain>/api/auth/callback/google`. |
| OAuth consent/test-user readiness | Confirm the app is usable by intended testers. | 30-60 minutes | Google Cloud OAuth configuration | Test users can sign in without access-denied errors. |

## P1 - MVP Intelligence and Demo Quality

| Task | Description | Estimated Effort | Dependencies | Definition of Done |
|---|---|---:|---|---|
| OpenAI parsing endpoint | Add an API/server action that converts natural language into structured event fields. | 4-6 hours | OpenAI API key, prompt/schema design | Transcript returns title, date, start time, end time, reminder, and clarification needs. |
| Parsed-event confirmation flow | Connect the voice assistant output to a confirmation card before creating a calendar event. | 4-6 hours | OpenAI parsing endpoint, calendar create action | User can speak/type a command, review parsed fields, and create the event. |
| Calendar UX hardening | Improve create/edit/delete forms with pending states, validation copy, and safer delete confirmation. | 3-5 hours | Existing Calendar page | Calendar workflows feel reliable and demo-safe. |
| README demo assets | Add screenshots, feature summary, setup steps, and a short demo flow. | 2-4 hours | Stable UI, screenshots | README communicates the project clearly to reviewers. |
| Playwright smoke tests | Add route-level smoke tests for the five main pages and basic UI presence. | 3-5 hours | Playwright setup | Tests verify main routes render without errors. |

## P2 - Post-MVP Enhancements

| Task | Description | Estimated Effort | Dependencies | Definition of Done |
|---|---|---:|---|---|
| Smart scheduling | Suggest open slots based on upcoming calendar events and task durations. | 1-2 days | Reliable Calendar fetch, scheduling rules | App can recommend at least one free slot for a task. |
| Database-backed tasks | Replace localStorage task persistence with user-scoped database storage. | 1-2 days | Database provider, auth session user identity | Tasks persist across browsers/devices for signed-in users. |
| Theme switching | Make template cards apply visual themes to the dashboard. | 4-8 hours | Theme state strategy | User can switch between at least three visual themes. |
| Daily briefing | Generate an AI summary of the day, reminders, and suggested priorities. | 1 day | OpenAI integration, Calendar fetch | Dashboard shows a useful daily planning brief. |
| Analytics dashboard | Show focus hours, event categories, completed tasks, and overload indicators. | 1-2 days | Calendar/task data model | User can review weekly productivity metrics. |

## Additional Missing Production Requirements

- Add privacy/security documentation explaining Google Calendar data access and storage behavior.
- Implement access-token refresh handling for longer-lived sessions.
- Decide whether tasks remain local-only for MVP or require authenticated cloud persistence.
- Add monitoring/error reporting for production failures.
- Add OAuth troubleshooting notes for redirect mismatch, missing test users, and app verification warnings.
- Add browser compatibility notes for Web Speech API and Notifications API.
- Confirm whether Google OAuth app should remain in testing or be published for wider demo access.

## Recommended Execution Order

1. Complete P0 Google Calendar E2E testing locally.
2. Add user-facing action feedback for calendar server actions.
3. Deploy to Vercel and configure production OAuth.
4. Add OpenAI parsing and confirmation flow.
5. Capture screenshots/video and update README.
6. Add Playwright smoke tests.
