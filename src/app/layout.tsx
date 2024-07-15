import type { Metadata } from "next";
import type { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JavaBrewed",
  description: "JavaBrewed ♨️ enhances computer science learning with diagrams and personalized support, simplifying complex topics for students. 100% Open Source.",
  keywords: "Java, programming, education, tutorials",
  authors: "@zandercoffman" as Author,
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "JavaBrewed",
    description: "JavaBrewed ♨️ enhances computer science learning with diagrams and personalized support, simplifying complex topics for students. 100% Open Source.",
    url: "https://java-brewed.vercel.app/",
    type: "website",
  },
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
