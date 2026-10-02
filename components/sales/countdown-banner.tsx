"use client";

import { useEffect, useState } from "react";

// Dimanche 11 octobre 2026, 23h59 heure de Paris (UTC+2 en octobre).
const DEADLINE = new Date("2026-10-11T21:59:59Z");

function getTimeLeft() {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(
    null,
  );

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-red-600 px-4 py-2 text-center text-sm font-medium text-white">
      <span>Fermeture des inscriptions dans</span>
      <span className="font-mono tabular-nums">
        {timeLeft.days}j {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m{" "}
        {pad(timeLeft.seconds)}s
      </span>
    </div>
  );
}
