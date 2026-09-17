import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src={config.music} loop onEnded={() => setPlaying(false)} />
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-muted-foreground opacity-55 transition-opacity duration-500 hover:bg-transparent hover:text-foreground hover:opacity-100"
        onClick={toggle}
        aria-label={playing ? "Pause our song" : "Play our song"}
        title={playing ? "Pause our song" : "Play our song"}
      >
        {playing ? <Pause aria-hidden="true" /> : <Music aria-hidden="true" />}
      </Button>
    </div>
  );
}