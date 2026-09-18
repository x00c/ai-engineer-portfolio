export type SpiderVariant = {
  id: string;
  name: string;
  label: string;
  source: number;
  color: string;
  secondary: string;
  body: string;
  legs: string;
  detail: string;
  description: string;
  effect: "embers" | "hologram" | "web" | "bubbles" | "wave" | "porcelain" | "ink" | "royal";
};

// The eight character drawings are source files -2 through -9.
// -10 and -11 are additional pop-art and glitch effect references.
export const spiders: SpiderVariant[] = [
  { id: "amber", name: "AMBER", label: "琥珀", source: 2, color: "#efad45", secondary: "#e96855", body: "#ae6a19", legs: "#d89330", detail: "GOLD / EMBER", description: "Warm gold. A little wild.", effect: "embers" },
  { id: "hologram", name: "SPECTRA", label: "幻光", source: 3, color: "#60aaff", secondary: "#f47bd1", body: "#1939b4", legs: "#9883db", detail: "BLUE / HOLOGRAPHIC", description: "Somewhere between light and matter.", effect: "hologram" },
  { id: "crimson", name: "CRIMSON", label: "緋紅", source: 4, color: "#f36b74", secondary: "#79c8ea", body: "#b82736", legs: "#db5262", detail: "RED / SILK", description: "A familiar thread. A new dimension.", effect: "web" },
  { id: "pearl", name: "PEARL", label: "珍珠", source: 5, color: "#e995c6", secondary: "#86c8ef", body: "#ccddeb", legs: "#e973b4", detail: "PEARL / ROSE", description: "Soft reflections. Playful motion.", effect: "bubbles" },
  { id: "tidal", name: "TIDAL", label: "潮汐", source: 6, color: "#9896ff", secondary: "#ed5b75", body: "#7069d8", legs: "#66627e", detail: "VIOLET / LIQUID", description: "Always moving. Never the same.", effect: "wave" },
  { id: "porcelain", name: "PULSE", label: "脈動", source: 7, color: "#ff676b", secondary: "#a7a9ff", body: "#dd2035", legs: "#6574ce", detail: "SCARLET / PORCELAIN", description: "An electric rhythm in red and white.", effect: "porcelain" },
  { id: "ink", name: "NOIR", label: "墨影", source: 8, color: "#f06458", secondary: "#c5dce8", body: "#191921", legs: "#30313f", detail: "INK / SCARLET", description: "Raw strokes. Quiet intensity.", effect: "ink" },
  { id: "royal", name: "ROYAL", label: "靛藍", source: 9, color: "#6b8cff", secondary: "#f45162", body: "#143bae", legs: "#dd2539", detail: "COBALT / VERMILION", description: "A vivid little world of its own.", effect: "royal" },
];
