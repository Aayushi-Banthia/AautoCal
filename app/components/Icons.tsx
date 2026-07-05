type IconProps = {
  className?: string;
};

const base = "1.6";

export function HomeIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H10v-5.5a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2V20h3.5a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function CheckSquareIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function TimetableIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17M9 4v16" />
    </svg>
  );
}

export function FocusIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4 20V10M12 20V4M20 20v-7" />
      <path d="M3 20.5h18" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2M12 18.5v2M20.5 12h-2M5.5 12h-2M17.8 6.2l-1.4 1.4M7.6 16.4l-1.4 1.4M17.8 17.8l-1.4-1.4M7.6 7.6 6.2 6.2" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.5 19.5 15 15" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M15 5.5 8.5 12l6.5 6.5" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M9 5.5 15.5 12 9 18.5" />
    </svg>
  );
}

export function FlagIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M6 21V4" />
      <path d="M6 4.5s1.5-1 4-1 3.5 1.5 6 1.5.5-1 .5-1v8s-1-1-.5 1-3.5-1.5-6-1.5-4 1-4 1Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function PawIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <ellipse cx="12" cy="15.5" rx="5" ry="4.2" />
      <ellipse cx="5.5" cy="9" rx="2" ry="2.6" />
      <ellipse cx="10" cy="6" rx="2" ry="2.6" />
      <ellipse cx="14" cy="6" rx="2" ry="2.6" />
      <ellipse cx="18.5" cy="9" rx="2" ry="2.6" />
    </svg>
  );
}

export function StreakIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 3s4 3.5 4 8a4 4 0 0 1-8 0c0-1.2.6-2 1-2.7C9.5 9.6 9 11 9 12a3 3 0 0 0 6 0c0-3.5-3-6-3-9Z" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 20.5S3.5 15.4 3.5 9.6C3.5 6.5 5.8 4.5 8.4 4.5c1.6 0 3 .8 3.6 2 .6-1.2 2-2 3.6-2 2.6 0 4.9 2 4.9 5.1 0 5.8-8.5 10.9-8.5 10.9Z" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M11 3c.3 3.2 1.2 4.7 4 5-2.8.3-3.7 1.8-4 5-.3-3.2-1.2-4.7-4-5 2.8-.3 3.7-1.8 4-5Z" />
      <path d="M18.5 13c.2 1.7.7 2.4 2.5 2.5-1.8.1-2.3.8-2.5 2.5-.2-1.7-.7-2.4-2.5-2.5 1.8-.1 2.3-.8 2.5-2.5Z" />
    </svg>
  );
}

export function WaveformIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M4 10v4M9 6v12M14 3v18M19 8v8" />
    </svg>
  );
}

export function MicIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21M9 21h6" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 4S9 3.5 5.5 8 4 20 4 20s10.5.5 14-4 2-12 2-12Z" />
      <path d="M6 18 17 7" />
    </svg>
  );
}

export function SlidersIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M6 4v6M6 20v-6M12 4v3M12 20v-8M18 4v10M18 20v-2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="12" cy="14.5" r="2" />
      <circle cx="18" cy="16" r="2" />
    </svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <rect x="6" y="4.5" width="4.5" height="15" rx="1.2" />
      <rect x="13.5" y="4.5" width="4.5" height="15" rx="1.2" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.5 4.8v14.4a1 1 0 0 0 1.53.85l11.2-7.2a1 1 0 0 0 0-1.7l-11.2-7.2A1 1 0 0 0 7.5 4.8Z" />
    </svg>
  );
}

export function MusicNoteIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M9 18V5.5l10-2v12.5" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="15.5" r="2.5" />
    </svg>
  );
}

export function StopIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="5.5" y="5.5" width="13" height="13" rx="2.5" />
    </svg>
  );
}
