import type { Metadata } from "next";
import "./globals.css";
import { SiteFrame } from "@/components/Interactions";

export const metadata: Metadata = {
  title: "Contractor Website & Marketing System | Oakmont Digital",
  description:
    "Oakmont builds contractor websites and marketing systems that capture leads, follow up faster, improve reviews, and help book more local work.",
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
