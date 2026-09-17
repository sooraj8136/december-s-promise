import { motion } from "framer-motion";
import { config } from "@/config";

const lines = [
  "One day in December...",
  "I’ll finally see you.",
  "Not through a screen.",
  "Not through a call.",
  "But right in front of me. ♥",
];

export function FinalSurprise() {
  return (
    <motion.section
      className="relative min-h-svh overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
    >
      <motion.img
        src={config.photo}
        alt="A personal memory of us"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-photo-overlay" />
      <div className="relative z-10 flex min-h-svh items-center justify-center px-6 py-24 text-center text-photo-foreground">
        <div className="max-w-xl">
          {lines.map((line, index) => (
            <motion.p
              key={line}
              className={index === 0 ? "mb-8 font-serif text-3xl italic sm:text-4xl" : "mt-4 font-serif text-xl sm:text-2xl"}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 + index * 0.65 }}
            >
              {line}
            </motion.p>
          ))}
          <motion.p
            className="mt-14 font-serif text-2xl italic sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 4.8 }}
          >
            I can&apos;t wait to meet you.
          </motion.p>
          <motion.p
            className="mt-12 font-sans text-[0.68rem] uppercase tracking-[0.28em] text-photo-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 5.8 }}
          >
            See you in December, my love.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}