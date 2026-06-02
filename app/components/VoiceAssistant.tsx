"use client";

import { useMemo, useRef, useState } from "react";

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

  return (
    <section className="rounded-2xl border border-[#ded7c9] bg-[#20201d] p-5 text-white shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#dbc7a4]">
          Voice assistant
        </p>
        <span className="rounded-full bg-[#356859] px-3 py-1 text-xs font-semibold">
          {message}
        </span>
      </div>
      <h2 className="mt-3 text-2xl font-semibold">What should I plan?</h2>
      <div className="mt-5 rounded-2xl bg-white/10 p-4">
        <p className="text-sm text-white/70">Transcript preview</p>
        <p className="mt-2 text-lg">&quot;{transcript}&quot;</p>
      </div>

      <div className="mt-4 rounded-2xl bg-white p-4 text-[#20201d]">
        <p className="text-sm font-semibold text-[#8a6451]">AI interpretation</p>
        <div className="mt-3 grid gap-2">
          {aiDetails.map(([label, value]) => (
            <div
              className="flex items-center justify-between gap-4 rounded-xl bg-[#f8f5ef] px-3 py-2 text-sm"
              key={label}
            >
              <span className="text-[#777064]">{label}</span>
              <span className="text-right font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 text-xs font-semibold">
        {(["Idle", "Listening", "Processing", "Confirm"] as VoiceState[]).map(
          (state) => (
            <span
              className={`rounded-full px-3 py-2 text-center ${
                state === voiceState
                  ? "bg-[#dbc7a4] text-[#20201d]"
                  : "bg-white/10 text-white/70"
              }`}
              key={state}
            >
              {state}
            </span>
          ),
        )}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#20201d] transition hover:bg-[#f1ece3]"
          onClick={startListening}
          type="button"
        >
          Start voice command
        </button>
        <button
          className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          onClick={stopListening}
          type="button"
        >
          Stop
        </button>
      </div>
    </section>
  );
}
