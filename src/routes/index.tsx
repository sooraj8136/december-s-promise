import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { OneLastThing } from "@/components/OneLastThing";
import { FinalSurprise } from "@/components/FinalSurprise";
import { MusicButton } from "@/components/MusicButton";

export default function Index() {
  const [begun, setBegun] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <AnimatePresence mode="wait">
        {!begun ? (
          <Hero key="hero" onBegin={() => setBegun(true)} />
        ) : !opened ? (
          <motion.div key="journey" exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
            <Countdown />
            <OneLastThing onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <FinalSurprise key="final" />
        )}
      </AnimatePresence>
      <MusicButton />
    </main>
  );
}
