import type { Metadata } from "next";
import { inter, lato } from "@/components/fonts/font";
import "./globals.css";
import ConditionalNavBar from "@/components/layout/ConditionalNavBar";

export const metadata: Metadata = {
  title: "Budgefy",
  description: "Finance made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.className} ${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ConditionalNavBar />

        <main>{children}</main>
      </body>
    </html>
  );
}
