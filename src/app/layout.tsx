import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JavaBrewed",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " font-sans"}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header/>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
