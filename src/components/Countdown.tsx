import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/config";

function remaining() {
  const difference = Math.max(0, new Date(config.decemberStart).getTime() - Date.now());
  return {
    totalDays: Math.floor(difference / 86_400_000),
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

const pad = (value: number) => String(value).padStart(2, "0");

export function Countdown() {
  const [time, setTime] = useState(remaining);
  const units = useMemo(() => [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Min" },
    { value: time.seconds, label: "Sec" },
  ], [time]);

  useEffect(() => {
    const interval = window.setInterval(() => setTime(remaining()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="flex min-h-svh flex-col items-center justify-center px-4 py-24 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
    >
      <p className="font-sans text-[0.62rem] uppercase tracking-[0.35em] text-muted-foreground">Our month</p>
      <h2 className="mt-6 font-serif text-4xl font-normal sm:text-6xl">December 2026</h2>
      <p className="mt-5 font-serif text-base italic text-muted-foreground">The exact day is still a mystery.</p>

      <motion.div
        className="mt-16 w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.45 }}
      >
        <p className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-primary">December begins in</p>
        <p className="mt-5 font-serif text-3xl sm:text-4xl">{time.totalDays} days</p>
        <div className="mx-auto mt-8 grid max-w-xl grid-cols-4 divide-x divide-border">
          {units.map((unit) => (
            <div className="min-w-0 px-1 sm:px-4" key={unit.label}>
              <span className="block font-serif text-2xl tabular-nums sm:text-4xl">{pad(unit.value)}</span>
              <span className="mt-3 block font-sans text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.62rem] sm:tracking-[0.24em]">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      <p className="mt-16 font-serif text-lg italic text-muted-foreground">“But every day brings us closer.”</p>
      <p className="mt-16 font-serif text-lg italic text-muted-foreground">"Ini onn thazhekk vanneee nte devummam😌”</p>
    </motion.section>
  );
}