# AautoCal Progress Tracker

## Completed Features

- [x] Next.js 16 App Router project setup
- [x] Multi-page app UI
- [x] Dashboard route
- [x] Calendar route
- [x] Tasks route
- [x] Templates route
- [x] Settings route
- [x] Shared app frame with sidebar and mobile header
- [x] Auth.js Google OAuth integration
- [x] Google Calendar API scope configuration
- [x] Google Calendar event fetching
- [x] Google Calendar event creation
- [x] Google Calendar event editing/rescheduling
- [x] Google Calendar event deletion
- [x] Editable controls on Calendar page
- [x] Demo calendar fallback when not connected
- [x] Browser voice input MVP
- [x] Transcript preview
- [x] Basic client-side event detail extraction
- [x] Browser reminder notification permission flow
- [x] Reminder testing UI
- [x] Persistent task board
- [x] Local storage persistence
- [x] Task status movement across Inbox, Scheduled, and Done
- [x] `.env.example` for auth configuration
- [x] `npm run lint` verification
- [x] `npm run build` verification

## In Progress Features

- [ ] Voice command parsing beyond simple rule-based extraction
- [ ] Manual end-to-end testing with a real Google Calendar account
- [ ] Production readiness for deployment
- [ ] Calendar create/edit/delete UX hardening
- [ ] User-facing success and error feedback for server actions

## Pending Features

- [ ] OpenAI API integration for natural-language parsing
- [ ] Parsed-event confirmation flow
- [ ] Smart scheduling and free-slot detection
- [ ] Production Vercel deployment
- [ ] Production Google OAuth callback setup
- [ ] Automated route smoke tests
- [ ] Playwright E2E tests for calendar workflows
- [ ] Demo screenshots
- [ ] Short walkthrough/demo video
- [ ] README upgrade with screenshots and production setup
- [ ] Database-backed task persistence
- [ ] Theme switching functionality
- [ ] Analytics and daily/weekly AI briefings

## Bugs / Technical Debt

- [ ] Server-action errors are not displayed as polished inline UI messages
- [ ] Refresh token and expired access-token handling are incomplete
- [ ] Tasks are localStorage-only and not user-account scoped
- [ ] Browser speech recognition is not supported in all browsers
- [ ] Reminder notifications are manual/test-only and not scheduled in the background
- [ ] Calendar UI is simplified and does not support full drag-and-drop editing
- [ ] No automated test suite exists yet
- [ ] No privacy/data-access documentation exists for Google Calendar permissions

## Deployment Tasks

- [ ] Create Vercel project
- [ ] Add Vercel environment variables: `AUTH_SECRET`, `AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_URL`
- [ ] Add production callback URL in Google Cloud:

```text
https://<vercel-domain>/api/auth/callback/google
```

- [ ] Confirm Google Calendar API remains enabled
- [ ] Configure OAuth consent screen test users or publish status
- [ ] Run production build on Vercel
- [ ] Smoke-test deployed routes
- [ ] Smoke-test deployed Google sign-in

## Testing Tasks

- [x] Run `npm run lint`
- [x] Run `npm run build`
- [ ] Test Google OAuth sign-in locally
- [ ] Test real Google Calendar event fetch
- [ ] Test real Google Calendar event creation
- [ ] Test real Google Calendar event edit/reschedule
- [ ] Test real Google Calendar event deletion
- [ ] Test browser voice input in Chrome
- [ ] Test notification permission and demo reminder
- [ ] Test localStorage task persistence after refresh
- [ ] Add Playwright smoke tests for `/`, `/calendar`, `/tasks`, `/templates`, `/settings`

## Documentation Tasks

- [x] Add OAuth setup notes to README
- [x] Create PRD
- [x] Create progress tracker
- [x] Create prioritized next-steps plan
- [ ] Add screenshots to README
- [ ] Add demo video link to README
- [ ] Add production deployment notes
- [ ] Add privacy/security note for Google Calendar data
- [ ] Add troubleshooting section for OAuth and browser voice input
