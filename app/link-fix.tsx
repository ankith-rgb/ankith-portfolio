"use client";

import { useEffect } from "react";

export default function LinkFix() {
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a[aria-label="Email"]').forEach((link) => {
      link.href = "mailto:ankithsuresh5@gmail.com";
      link.title = "Email Ankith";
    });

    document.querySelectorAll<HTMLAnchorElement>('a[aria-label="LinkedIn"]').forEach((link) => {
      link.href = "https://www.linkedin.com/in/ankith-suresh/";
      link.target = "_blank";
      link.rel = "noreferrer";
      link.title = "Connect on LinkedIn";
    });

    document.querySelectorAll<HTMLElement>('a[aria-label="GitHub"]').forEach((link) => link.remove());
  }, []);

  return null;
}
