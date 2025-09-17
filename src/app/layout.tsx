import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


// suisse font configuration
const suisseIntl = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-Suisse_Intl_Regular.ttf",
      weight: "400",
      style: "normal",
    },   
  ],
  variable: "--font-suisse",
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Krea AI",
   description: "An AI-powered creative dashboard to generate images, videos, edit content, and apply advanced AI transformations in real time.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body suppressHydrationWarning
        className={`${suisseIntl.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
