import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <>
      <html lang="pt-BR">
        <body className={poppins.className}>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </>
  );
}
