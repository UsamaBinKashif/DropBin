import Header from "@/components/header/Header";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Happy_Monkey } from "next/font/google";
import "./globals.css";

const happy_monkey = Happy_Monkey({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "DropBin.",
  description: "DropBin, most likely a DropBox clone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={happy_monkey.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
