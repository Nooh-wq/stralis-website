"use client";

import { useState, useLayoutEffect, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const KEY = "stralis-preloader-shown";

function getTimestamp(): string {
  const now = new Date();
  const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(now.getUTCDate()).padStart(2, "0");
  const yyyy = now.getUTCFullYear();
  const hh = String(now.getUTCHours()).padStart(2, "0");
  const min = String(now.getUTCMinutes()).padStart(2, "0");
  return `${mm}.${dd}.${yyyy} // ${hh}:${min} UTC`;
}

type Phase = "init" | "ready" | "exiting";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("init");
  const [timestamp, setTimestamp] = useState("--.--.---- // --:-- UTC");
  const reduce = useReducedMotion();

  // Check sessionStorage synchronously before the first paint — for returning
  // visitors the preloader is removed before the browser ever paints it.
  useLayoutEffect(() => {
    if (!sessionStorage.getItem(KEY)) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    setTimestamp(getTimestamp());

    if (reduce) {
      // Reduced motion: skip animation, show READY briefly, then dismiss.
      setPhase("ready");
      const t = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem(KEY, "true");
      }, 300);
      return () => clearTimeout(t);
    }

    const triggerReady = () => {
      setPhase("ready");
      // Hold READY for ~350ms so it's legible, then start the wipe exit.
      setTimeout(() => setPhase("exiting"), 350);
    };

    // Hard cap: never show longer than 2s regardless of load state.
    const maxTimer = setTimeout(triggerReady, 2000);

    if (document.readyState === "complete") {
      // Page already loaded — hold for the full 2s minimum.
      clearTimeout(maxTimer);
      setTimeout(triggerReady, 2000);
    } else {
      window.addEventListener(
        "load",
        () => {
          clearTimeout(maxTimer);
          triggerReady();
        },
        { once: true },
      );
    }

    return () => clearTimeout(maxTimer);
  }, [visible, reduce]);

  if (!visible) return null;

  const isExiting = phase === "exiting";

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black"
      initial={{ y: 0 }}
      animate={{ y: isExiting ? "-100%" : 0 }}
      transition={
        isExiting
          ? { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (isExiting) {
          setVisible(false);
          sessionStorage.setItem(KEY, "true");
        }
      }}
    >
      {/* Top-right: S-mark — static anchor, no focal point */}
      <motion.div
        className="absolute top-8 right-8 md:top-10 md:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.05 }}
      >
        <Image
          src="/brand/symbol-white.svg"
          alt=""
          width={22}
          height={30}
          aria-hidden
          priority
        />
      </motion.div>

      {/* Bottom-left: system-status block */}
      <motion.div
        className="absolute bottom-8 left-8 md:bottom-10 md:left-10 flex flex-col gap-[5px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.1 }}
      >
        {/* Line 1 — identity */}
        <p className="t-mono uppercase tracking-[0.07em] text-white">
          THE STRALIS
        </p>

        {/* Line 2 — status: hard-cut swap, no crossfade */}
        <p className="t-mono uppercase tracking-[0.07em] text-white">
          STATUS &mdash;{" "}
          {phase === "init" ? "INITIALIZING" : "READY"}
        </p>

        {/* Line 3 — real UTC timestamp */}
        <p className="t-mono mt-0.5 tracking-[0.05em] text-gray-mid">
          {timestamp}
        </p>

        {/* Line 4 — build tag */}
        <p
          className="t-mono tracking-[0.05em] text-gray-mid"
          style={{ fontSize: "11px" }}
        >
          V1.0 &mdash; ENGINEERING / AI / DESIGN
        </p>
      </motion.div>
    </motion.div>
  );
}
