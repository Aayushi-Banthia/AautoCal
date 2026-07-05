"use client";

import { useMemo, useRef, useState } from "react";
import {
  BellIcon,
  CalendarIcon,
  ClockIcon,
  MicIcon,
  SparkleIcon,
  StopIcon,
  WaveformIcon,
} from "./Icons";
import { ReggiePlaceholder } from "./ReggiePlaceholder";

type SpeechRecognitionResult = {
  isFinal: boolean;
  0: {
    transcript: string;
  };
};

type SpeechRecognitionEvent = {
  results: SpeechRecognitionResult[];
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onend: (() => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

type VoiceState = "Idle" | "Listening" | "Processing" | "Confirm";

const fallbackTranscript = "Schedule a study session tomorrow at 6 PM.";

const detailIcons: Record<string, typeof CalendarIcon> = {
  Title: CalendarIcon,
  Date: CalendarIcon,
  Time: ClockIcon,
  Reminder: BellIcon,
};

function getSpeechRecognition() {
  const browserWindow = window as Window & {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };

  return browserWindow.SpeechRecognition ?? browserWindow.webkitSpeechRecognition;
}

function extractEventDetails(transcript: string) {
  const lower = transcript.toLowerCase();
  const timeMatch = transcript.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/i);
  const reminderMatch = lower.match(/(\d+)\s*(minutes?|mins?|hours?)\s*before/);

  return [
    ["Title", transcript.replace(/\.$/, "") || "Untitled event"],
    ["Date", lower.includes("tomorrow") ? "Tomorrow" : "Needs confirmation"],
    [
      "Time",
      timeMatch
        ? `${timeMatch[1]}:${timeMatch[2] ?? "00"} ${timeMatch[3].toUpperCase()}`
        : "Needs confirmation",
    ],
    [
      "Reminder",
      reminderMatch
        ? `${reminderMatch[1]} ${reminderMatch[2]} before`
        : "30 minutes before",
    ],
  ];
}

export function VoiceAssistant() {
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const [voiceState, setVoiceState] = useState<VoiceState>("Idle");
  const [transcript, setTranscript] = useState(fallbackTranscript);
  const [message, setMessage] = useState("Ready for browser voice input.");

  const aiDetails = useMemo(() => extractEventDetails(transcript), [transcript]);

  function startListening() {
    const SpeechRecognition = getSpeechRecognition();

    if (!SpeechRecognition) {
      setMessage("Voice input is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      const nextTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ")
        .trim();

      if (nextTranscript) {
        setTranscript(nextTranscript);
        setVoiceState("Processing");
        setMessage("Interpreting your command...");
      }
    };

    recognition.onerror = (event) => {
      setVoiceState("Idle");
      setMessage(`Voice input error: ${event.error}`);
    };

    recognition.onend = () => {
      setVoiceState("Confirm");
      setMessage("Review the extracted event details.");
    };

    setVoiceState("Listening");
    setMessage("Listening...");
    recognition.start();
  }

  function stopListening() {
    recognitionRef.current?.stop();
  }

  const states: VoiceState[] = ["Idle", "Listening", "Processing", "Confirm"];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#dcf1ef] bg-gradient-to-br from-[#e9f9f7] via-[#f2fbfa] to-[#f7fefe] p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[#1f9d97]">
          <WaveformIcon className="size-4" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">
            Voice assistant
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-[#1f9d97]">
          <span className="size-1.5 rounded-full bg-[#1f9d97]" />
          {message}
        </span>
      </div>

      <h2 className="mt-4 text-2xl font-semibold sm:text-[28px]">
        What should I <span className="text-[#f89cac]">plan?</span>
      </h2>

      <div className="relative mt-5 rounded-2xl bg-white/70 p-4 pr-24">
        <p className="text-sm font-medium text-[#1f9d97]">Transcript preview</p>
        <p className="mt-2 text-lg text-[#2e2e2e]">&quot;{transcript}&quot;</p>
        <ReggiePlaceholder
          className="absolute bottom-2 right-3"
          size="sm"
        />
      </div>

      <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#2e2e2e]">
          <SparkleIcon className="size-4 text-[#1f9d97]" />
          <p className="text-sm font-semibold">AI interpretation</p>
        </div>
        <div className="mt-3 grid gap-2">
          {aiDetails.map(([label, value]) => {
            const Icon = detailIcons[label] ?? CalendarIcon;
            return (
              <div
                className="flex items-center gap-3 rounded-xl bg-[#f7f7f7] px-3 py-2.5 text-sm"
                key={label}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#fdeef1] text-[#f89cac]">
                  <Icon className="size-4" />
                </span>
                <span className="text-[#8a8a8a]">{label}</span>
                <span className="ml-auto text-right font-semibold text-[#2e2e2e]">
                  {value}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 text-xs font-semibold">
        {states.map((state, index) => (
          <div className="flex items-center gap-1" key={state}>
            <span
              className={`flex items-center gap-2 rounded-full px-3.5 py-2 ${
                state === voiceState
                  ? "border border-[#1f9d97]/30 bg-white text-[#1f9d97]"
                  : "bg-white/60 text-[#8a8a8a]"
              }`}
            >
              <span
                className={`size-1.5 rounded-full ${
                  state === voiceState ? "bg-[#1f9d97]" : "bg-[#c7c7c7]"
                }`}
              />
              {state}
            </span>
            {index < states.length - 1 ? (
              <span className="hidden size-1 rounded-full bg-[#1f9d97]/40 sm:block" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#47cfcb] to-[#2fb8b3] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-[#3bc0bc] hover:to-[#25a9a4]"
          onClick={startListening}
          type="button"
        >
          <MicIcon className="size-4" />
          Start voice command
        </button>
        <button
          className="flex items-center justify-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-semibold text-[#e8628a] transition hover:bg-white"
          onClick={stopListening}
          type="button"
        >
          <StopIcon className="size-4" />
          Stop
        </button>
      </div>
    </section>
  );
}
