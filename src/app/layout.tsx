import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Natasha Kenna",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
    <body>
        <Navbar />
       {children}
 
        </body>
  
    </html>
  );
}
