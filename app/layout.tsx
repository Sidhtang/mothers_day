import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Mother's Day, Maa 🩷",
  description: "For the most selfless, resilient, and loving person in our lives.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
