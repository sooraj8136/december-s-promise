import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero({ onBegin }: { onBegin: () => void }) {
  return (
    <motion.section
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="max-w-3xl">
        <motion.p
          className="font-sans text-[0.62rem] uppercase tracking-[0.32em] text-muted-foreground sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          For the girl I&apos;m waiting to meet
        </motion.p>
        <motion.h1
          className="mt-8 font-serif text-5xl font-normal leading-none text-foreground sm:text-7xl md:text-8xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.65 }}
        >
          Until December
        </motion.h1>
        <motion.p
          className="mt-7 font-serif text-lg italic text-muted-foreground sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
        >
          The month our distance finally ends.
        </motion.p>
        <motion.p
          className="mx-auto mt-12 max-w-sm font-sans text-sm leading-7 text-subtle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.55 }}
        >
          We don&apos;t know the exact day yet...
          <br />but we know it&apos;s coming. <span aria-hidden="true">♥</span>
        </motion.p>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <Button variant="cinematic" onClick={onBegin}>Begin</Button>
        </motion.div>
      </div>
    </motion.section>
  );
}