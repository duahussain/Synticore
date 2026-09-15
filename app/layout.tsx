import type { Metadata } from "next";
import "./globals.css";
import { SiteFrame } from "@/components/Interactions";

export const metadata: Metadata = {
  title: "AuriBoost | AI Receptionist, Booking & Lead Follow-up",
  description:
    "AuriBoost is an AI front desk that answers calls and chats, books appointments, and follows up with every lead.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try { var savedTheme = localStorage.getItem('oakmont-theme'); document.documentElement.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light'; } catch (error) {}",
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white text-[#101832] antialiased">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
