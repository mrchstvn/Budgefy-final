import { Inter, Lato, Cedarville_Cursive } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const cedarvilleCursive = Cedarville_Cursive({
  variable: "--font-cedarville-cursive",
  weight: ["400"],
  subsets: ["latin"],
});
