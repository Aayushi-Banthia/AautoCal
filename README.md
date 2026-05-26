# Aautocal

Aautocal is an AI-powered voice calendar and reminder assistant integrated with Google Calendar. It allows users to create, manage, and reschedule events using natural language voice commands, while offering a flexible Notion-style calendar dashboard.

## Features

- Voice-based calendar commands
- Google Calendar integration
- AI-powered event parsing
- Smart reminders
- Auto-scheduling suggestions
- Notion-style calendar views
- Aesthetic dashboard themes
- Daily and weekly AI briefings

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Google Calendar API
- OpenAI API
- PostgreSQL
- Auth.js
- Vercel

## Google OAuth Setup

Create a `.env.local` file using `.env.example` as the template.

Required values:

- `AUTH_SECRET`
- `AUTH_GOOGLE_ID`
- `AUTH_GOOGLE_SECRET`
- `AUTH_URL=http://localhost:3000`

Google Cloud Console callback URL for local development:

```text
http://localhost:3000/api/auth/callback/google
```

Enable the Google Calendar API and request calendar event access for the
Google OAuth client.
