"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LeafIcon,
  MusicNoteIcon,
  PauseIcon,
  PlayIcon,
  SlidersIcon,
  StopIcon,
} from "../components/Icons";

const TOTAL_SECONDS = 40 * 60;
const RADIUS = 130;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function FocusPage() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const id = setInterval(() => {
      setSecondsLeft((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeLabel = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const progress = secondsLeft / TOTAL_SECONDS;
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Image
        alt="Calm forest and waterfall focus background"
        className="object-cover"
        fill
        priority
        src="/focus/focus-bg.png"
      />

      <div className="relative z-10 flex min-h-screen flex-col justify-between p-5 sm:p-8">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 rounded-full bg-white/75 px-4 py-2.5 text-sm font-semibold text-[#2e2e2e] shadow-sm backdrop-blur">
            <LeafIcon className="size-4 text-[#3f6b52]" />
            FOCUS
          </span>
          <button
            className="flex items-center gap-2 rounded-full bg-white/75 px-4 py-2.5 text-sm font-semibold text-[#2e2e2e] shadow-sm backdrop-blur transition hover:bg-white/90"
            type="button"
          >
            <SlidersIcon className="size-4" />
            Options
          </button>
        </div>

        {/* Center timer */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative grid place-items-center">
            <svg className="size-64 -rotate-90 sm:size-72" viewBox="0 0 280 280">
              <circle
                cx="140"
                cy="140"
                fill="none"
                opacity="0.35"
                r={RADIUS}
                stroke="white"
                strokeWidth="3"
              />
              <circle
                cx="140"
                cy="140"
                fill="none"
                r={RADIUS}
                stroke="white"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                strokeWidth="3"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center text-white">
              <p className="text-5xl font-semibold tabular-nums sm:text-6xl">{timeLabel}</p>
              <p className="mt-2 text-sm font-semibold tracking-[0.3em]">FOCUS</p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <button
            aria-label="Toggle ambient sound"
            className="grid size-12 place-items-center rounded-full bg-white/75 text-[#2e2e2e] shadow-sm backdrop-blur transition hover:bg-white/90"
            type="button"
          >
            <MusicNoteIcon className="size-5" />
          </button>

          <button
            className="flex items-center gap-2 rounded-full bg-white/85 px-6 py-3.5 text-sm font-semibold text-[#2e2e2e] shadow-sm backdrop-blur transition hover:bg-white"
            onClick={() => setIsRunning((running) => !running)}
            type="button"
          >
            {isRunning ? (
              <>
                <PauseIcon className="size-4" />
                Pause
              </>
            ) : (
              <>
                <PlayIcon className="size-4" />
                Resume
              </>
            )}
          </button>

          <Link
            aria-label="End focus session"
            className="grid size-12 place-items-center rounded-full bg-white/75 text-[#2e2e2e] shadow-sm backdrop-blur transition hover:bg-white/90"
            href="/dashboard"
          >
            <StopIcon className="size-5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
