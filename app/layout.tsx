import type { Metadata } from "next";
import { Happy_Monkey } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./ui/header/Header";

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
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
