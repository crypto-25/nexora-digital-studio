import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA Digital Studio — We Shape Digital. We Build What's Next.",
  description:
    "A strategic digital studio combining creative thinking, purposeful design, and modern technology to shape meaningful digital experiences.",
  metadataBase: new URL("https://nexora.studio"),
  openGraph: {
    title: "NEXORA Digital Studio",
    description: "We Shape Digital. We Build What's Next.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
