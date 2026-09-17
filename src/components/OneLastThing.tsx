import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function OneLastThing({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="flex min-h-[125svh] items-center justify-center px-6 py-32 text-center">
      <div>
        <motion.p
          className="font-serif text-3xl italic sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.1 }}
        >
          One last thing…
        </motion.p>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button variant="whisper" onClick={onOpen}>Open This</Button>
        </motion.div>
      </div>
    </section>
  );
}