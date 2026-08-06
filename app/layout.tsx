import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";
import LinkFix from "./link-fix";
import ProjectCardSizer from "./project-card-sizer";
import ExperienceEnhancements from "./experience-enhancements";
import AwardsAndRecognition from "./awards-and-recognition";

export const metadata: Metadata = {
  title: "Ankith S | Quality Engineer",
  description: "Portfolio of Ankith S, Quality Engineer and Automation Test Engineer.",
  keywords: ["Quality Engineer", "Automation Testing", "Selenium", "API Testing", "Ankith S"],
  openGraph: { title: "Ankith S | Quality Engineer", description: "Building confidence in every release." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><LinkFix /><ProjectCardSizer /><ExperienceEnhancements /><AwardsAndRecognition />{children}</body></html>;
}
