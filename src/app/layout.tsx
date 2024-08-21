import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@/styles/shadcn.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import RootProviders from "@/components/providers/RootProviders";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zlaark | The Expense Manager App",
  description: "Zlaark | The Expense Manager App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
