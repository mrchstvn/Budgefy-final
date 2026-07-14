import { Lato, Cedarville_Cursive, Inter } from "next/font/google";

export const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const cedarvilleCursive = Cedarville_Cursive({
  variable: "--font-cedarville-cursive",
  weight: ["400"],
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});