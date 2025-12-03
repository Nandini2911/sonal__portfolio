import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sonal Wankhede",
  description: "Luxury Beauty Expert",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="bg-white text-brand-burgundy antialiased">
        {children}
      </body>
    </html>
  );
}
