"use client";

import { useEffect } from "react";

export default function PortfolioUpdates() {
  useEffect(() => {
    const projectGrid = document.querySelector<HTMLElement>(".projects");
    if (projectGrid) {
      projectGrid.style.setProperty(
        "grid-template-columns",
        "repeat(3, minmax(0, 1fr))",
        "important",
      );
    }

    const projects = document.querySelectorAll<HTMLElement>("article.project");
    const kroger = projects[1];
    if (kroger && !document.querySelector('[data-project="cargo-core"]')) {
      const cargo = kroger.cloneNode(true) as HTMLElement;
      cargo.dataset.project = "cargo-core";
      kroger.insertAdjacentElement("afterend", cargo);

      const title = cargo.querySelector("h3");
      if (title) title.textContent = "Cargo Core Service";

      const tags = cargo.querySelectorAll<HTMLElement>(".tags span");
      ["Selenium Automation", "Agile QA", "Release Readiness"].forEach((value, index) => {
        if (tags[index]) tags[index].textContent = value;
      });

      const descriptions = cargo.querySelectorAll<HTMLElement>(".case p");
      const content = [
        "Coordinate sprint-level quality with complete, release-ready test coverage.",
        "Defined test strategy and goals, prepared test cases and data, automated Selenium coverage, and led daily status, peer reviews, and UAT walkthroughs.",
        "Delivered PO-approved releases by maintaining the automation framework, identifying defects early, and strengthening overall software quality.",
      ];
      content.forEach((value, index) => {
        if (descriptions[index]) descriptions[index].textContent = value;
      });
    }

    const enterpriseProjects = document.querySelector<HTMLElement>(".metrics div:nth-child(2) b");
    if (enterpriseProjects) enterpriseProjects.textContent = "03";
  }, []);

  return null;
}
