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
    const goToContact = (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
    };
    if (topButton) {
      topButton.textContent = "Contact Us ↗";
      topButton.addEventListener("click", goToContact, true);
    }

    section.dataset.awardsReady = "true";
    section.classList.add("awards-host");
    section.innerHTML = `
      <div class="awards-section">
        <div class="awards-intro">
          <p class="awards-label">AWARDS &amp; RECOGNITION</p>
          <h2>Recognition earned<br/>through <em>quality.</em></h2>
          <p>Honoured for dependable delivery, consistent impact, and a commitment to high-quality outcomes.</p>
        </div>
        <div class="awards-grid">
          <article class="award-card feature-award"><span class="award-mark">✦</span><small>2023</small><h3>Employee of the Year</h3><p>Recognised for sustained contribution and exceptional commitment.</p></article>
          <article class="award-card"><span class="award-mark">✦</span><small>JULY 2026</small><h3>Top Impactor Award</h3><p>Biannual recognition awarded for sustained, high-impact contribution.</p></article>
          <article class="award-card"><span class="award-mark">✦</span><small>JANUARY 2026</small><h3>Spot Award</h3></article>
          <article class="award-card"><span class="award-mark">✦</span><small>DECEMBER 2025</small><h3>Spot Award</h3></article>
          <article class="award-card"><span class="award-mark">✦</span><small>SEPTEMBER 2025</small><h3>Spot Award</h3></article>
        </div>
      </div>
      <section id="contact-us" class="contact-us">
        <div><p class="awards-label">GET IN TOUCH</p><h2>Let&apos;s build better<br/><em>software together.</em></h2><p class="contact-copy">Have a quality challenge, role, or collaboration in mind? I&apos;d be glad to connect.</p></div>
        <form class="contact-form"><label>Your name<input required placeholder="What should I call you?"/></label><label>Email address<input required type="email" placeholder="you@company.com"/></label><label>Message<textarea required placeholder="Tell me a little about what you have in mind..." rows="4"></textarea></label><button class="primary" type="submit">Send message ↗</button></form>
      </section>`;

    const form = section.querySelector("form");
    const stopSubmission = (event: Event) => event.preventDefault();
    form?.addEventListener("submit", stopSubmission);

    return () => {
      topButton?.removeEventListener("click", goToContact, true);
      form?.removeEventListener("submit", stopSubmission);
    };
  }, []);

  return null;
}
