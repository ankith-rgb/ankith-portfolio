import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";
import LinkFix from "./link-fix";
import PortfolioUpdates from "./portfolio-updates";

export const metadata: Metadata = {
  title: "Ankith S | Quality Engineer",
  description: "Portfolio of Ankith S, Quality Engineer and Automation Test Engineer.",
  keywords: ["Quality Engineer", "Automation Testing", "Selenium", "API Testing", "Ankith S"],
  openGraph: { title: "Ankith S | Quality Engineer", description: "Building confidence in every release." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><LinkFix /><PortfolioUpdates />{children}</body></html>;
}
