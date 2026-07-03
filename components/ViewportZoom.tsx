"use client";

import { useEffect } from "react";

export default function ViewportZoom() {
  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      const z = Math.max(1, Math.min(w / 1440, 1.5));
      document.body.style.zoom = z === 1 ? "" : String(z);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("resize", apply);
      document.body.style.zoom = "";
    };
  }, []);

  return null;
}
