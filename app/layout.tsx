import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/utils/cn";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio using next js",
  icons: {
    icon: "/instagram.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased h-full",
          spaceGrotesk.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
