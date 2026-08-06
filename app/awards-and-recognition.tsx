"use client";

import { useEffect } from "react";

export default function AwardsAndRecognition() {
  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section || section.dataset.awardsReady) return;

    document.querySelectorAll<HTMLButtonElement>(".navlinks button, .mobile-nav button").forEach((button) => {
      if (button.textContent?.trim() === "Contact") button.textContent = "Awards";
    });
    const topButton = document.querySelector<HTMLButtonElement>(".navactions .outline");
    if (topButton) topButton.textContent = "View awards ↗";

    section.dataset.awardsReady = "true";
    section.classList.add("awards-section");
    section.innerHTML = `
      <div class="awards-intro">
        <p class="awards-label">AWARDS &amp; RECOGNITION</p>
        <h2>Recognition earned<br/>through <em>quality.</em></h2>
        <p>Honoured for dependable delivery, consistent impact, and a commitment to high-quality outcomes.</p>
      </div>
      <div class="awards-grid">
        <article class="award-card feature-award">
          <span class="award-mark">✦</span>
          <small>2023</small>
          <h3>Employee of the Year</h3>
          <p>Recognised for sustained contribution and exceptional commitment.</p>
        </article>
        <article class="award-card"><span class="award-mark">✦</span><small>JULY 2026</small><h3>Top Impactor Award</h3><p>Biannual recognition awarded for sustained, high-impact contribution.</p></article>
        <article class="award-card"><span class="award-mark">✦</span><small>JANUARY 2026</small><h3>Spot Award</h3></article>
        <article class="award-card"><span class="award-mark">✦</span><small>DECEMBER 2025</small><h3>Spot Award</h3></article>
        <article class="award-card"><span class="award-mark">✦</span><small>SEPTEMBER 2025</small><h3>Spot Award</h3></article>
      </div>`;
  }, []);

  return null;
}
