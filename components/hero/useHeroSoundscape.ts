import { useCallback, useEffect, useRef, useState } from "react";

const NOTES = [220, 246.94, 293.66, 329.63, 392, 440];

export function useHeroSoundscape() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const lastNoteAtRef = useRef(0);

  useEffect(() => {
    const unlock = async () => {
      if (!ctxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        ctxRef.current = new AudioCtx();
      }
      if (ctxRef.current.state === "suspended") {
        await ctxRef.current.resume();
      }
      setEnabled(true);
      window.removeEventListener("pointerdown", unlock);
    };

    window.addEventListener("pointerdown", unlock);
    return () => window.removeEventListener("pointerdown", unlock);
  }, []);

  const triggerNote = useCallback((xNorm: number, yNorm: number) => {
    const ctx = ctxRef.current;
    if (!ctx || !enabled) return;

    const now = performance.now();
    if (now - lastNoteAtRef.current < 180) return;
    lastNoteAtRef.current = now;

    const noteIndex = Math.min(NOTES.length - 1, Math.max(0, Math.floor(xNorm * NOTES.length)));
    const baseFreq = NOTES[noteIndex];
    const octave = yNorm < 0.45 ? 2 : 1;
    const freq = baseFreq * octave;

    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "triangle";
    osc2.type = "sine";
    osc.frequency.value = freq;
    osc2.frequency.value = freq * 2;

    filter.type = "lowpass";
    filter.frequency.value = 1800;
    filter.Q.value = 0.7;

    const t = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.02, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc2.start(t);
    osc.stop(t + 0.52);
    osc2.stop(t + 0.42);
  }, [enabled]);

  return { audioEnabled: enabled, triggerNote };
}
