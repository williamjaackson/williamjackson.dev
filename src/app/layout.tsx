import type { Metadata } from "next";
import "./globals.css";

import { Playfair, Abril_Fatface } from "next/font/google";

const playfair = Playfair({ subsets: ["latin"] });
const abril_fatface = Abril_Fatface({ weight: "400", preload: false });

export const metadata: Metadata = {
  title: "William Jackson",
  description: "A virtual space for me to share my projects and thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
