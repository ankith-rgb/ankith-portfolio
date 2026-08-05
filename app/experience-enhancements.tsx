"use client";

import { useEffect } from "react";

const additions = [
  [
    "Reported daily sprint quality status in Scrum and raised release risks early.",
    "Led scenario and test-result walkthroughs with UAT, business, and development teams.",
    "Supported confident product sign-off by validating agreed quality criteria before release.",
  ],
  [
    "Prepared sprint test cases and test data, then executed thorough functional and regression testing.",
    "Maintained automation-framework quality by removing obsolete scripts and improving suite reliability.",
    "Reviewed test cases, test plans, and automation code to strengthen coverage and consistency.",
  ],
];

export default function ExperienceEnhancements() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("article.experience ul").forEach((list, index) => {
      if (list.dataset.enhanced || !additions[index]) return;
      additions[index].forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        list.appendChild(item);
      });
      list.dataset.enhanced = "true";
    });
  }, []);

  return null;
}
