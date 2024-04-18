import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Site criado usando Next.js com Typescript e Tailwind CSS",
  applicationName: "Portfolio",
  category: "tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="white">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
