import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { OneLastThing } from "@/components/OneLastThing";
import { FinalSurprise } from "@/components/FinalSurprise";
import { MusicButton } from "@/components/MusicButton";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Until December — For Devumma" },
      { name: "description", content: "A private love letter counting down to December 2026." },
      { property: "og:title", content: "Until December" },
      { property: "og:description", content: "The month our distance finally ends." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
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
