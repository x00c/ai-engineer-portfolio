"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
import { siteContent } from "@/content/site";

export function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={menuRef}
        className="fixed right-6 top-4 z-[60]"
        animate={{ scale: isCompact ? 0.94 : 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
      >
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-100/20 bg-slate-950/60 text-zinc-100 shadow-lg shadow-black/20 backdrop-blur-md transition-transform duration-200 hover:scale-[1.02] hover:bg-slate-900/75"
          title="Menu"
        >
          <Menu className="h-[18px] w-[18px]" />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute right-0 top-14 min-w-[220px] overflow-hidden rounded-xl border border-white/10 bg-black/92 p-2 shadow-xl backdrop-blur-md"
            >
              <div className="mb-1 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">Navigation</div>
              <div className="flex flex-col">
                {siteContent.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
