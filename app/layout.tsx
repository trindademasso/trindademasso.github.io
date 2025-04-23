import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"] // Adapte conforme necessário
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "700"] // Adapte conforme necessário
});

export const metadata: Metadata = {
  title: "Trindade Fisioterapia e Pilates",
  description: "Saúde, equilíbrio e bem-estar em cada detalhe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${cormorantGaramond.variable} antialiased`}>
        <Navbar /> 
        {children}
        <Footer/> 
      </body>
    </html>
  );
}