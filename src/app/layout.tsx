import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Lojas Quero-Quero",
  description: "Dashboard Quero-Quero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
