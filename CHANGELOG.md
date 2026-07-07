# AutoCal — Redesign Changelog

Tracks each delivered version of the UI/UX redesign. Newest at top.

## v4 — Real Reggie image in dashboard sidebar

- Background-removed your dog-with-laptop illustration (flood-fill from the
  edges so the white fur stayed intact, only the actual backdrop was
  stripped) — saved as `public/reggie/reggie-sidebar-icon.png`
- Replaced the dashed-circle placeholder in the dashboard sidebar's "Hey,
  I'm Reggie!" card with this real image
- Changed that card's layout from side-by-side to stacked — image now sits
  directly above the text, as requested
- The other Reggie placeholder spots (voice assistant transcript corner,
  "Reggie's tip" card, landing page, reminders empty state) are untouched —
  only the sidebar spot was in scope for this change

## v3 — Focus page background swap

- Replaced `public/focus/focus-bg.png` with your new forest/waterfall
  illustration (no overlay text baked in this time)
- No code changes needed — layout, timer, and buttons are unchanged from v2,
  just pointing at the new image

## v2 — Focus page

- New route: `/focus` — full-screen immersive timer using your uploaded
  forest/waterfall background (`public/focus/focus-bg.png`)
- Real working 40-minute countdown with pause/resume, animated circular
  progress ring
- Top bar: "FOCUS" pill (leaf icon) + "Options" pill (inert for now — no
  design spec given yet for what it opens)
- Bottom bar: ambient-sound icon button (inert), Pause/Resume, and a Stop
  button that ends the session and returns to `/dashboard`
- Added "Focus" to the sidebar nav on both the redesigned dashboard and the
  still-unstyled `AppFrame` shell (Calendar/Tasks/Templates/Settings), since
  the route now actually exists
- Dashboard's "Focus Time" stat card is now a working link to `/focus`

## v1 — current baseline (everything delivered so far)

**Design system**
- Swapped Geist font for Poppins
- New color tokens: `#f89cac` (coral/pink), `#f3cfe5` (light pink), `#47cfcb`
  (teal), `#2e2e2e` / `#f7f7f7` (base text/background)
- New shared icon set (`app/components/Icons.tsx`)
- `ReggiePlaceholder` component for mascot spots not yet illustrated

**Routing**
- `/` — public landing page
- `/dashboard` — the app dashboard (moved here from `/`)
- Calendar, Tasks, Templates, Settings still on the old theme/shell
  (`AppFrame.tsx`) — not yet redesigned

**Landing page (`app/page.tsx`)**
- Nav, hero ("Plan Smart. Stay Ahead."), illustrated app-card mockup,
  quote/testimonial bar
- Real Reggie illustration in place (`public/reggie/reggie-laptop.png`)

**Dashboard (`app/dashboard/page.tsx`)**
- Sidebar nav, personalized greeting, stat cards, live month calendar grid,
  Today's Plan checklist, Reggie tip card

**Components restyled to match**
- `AuthStatus.tsx` — Google connect/sign-out buttons
- `VoiceAssistant.tsx` — full redesign (glass card, mic/waveform icons,
  icon-chip rows, state pills)
- `ReminderNotifications.tsx` — full redesign (two-tone heading, empty state
  with Reggie placeholder)

**Responsive fixes**
- Header actions wrap instead of overflowing on narrow phones
- Calendar day cells collapse event labels to a dot below `sm`
- Voice assistant state pills go 2-column on mobile

---

*Next version (v2) will be logged here once the next change is made.*
