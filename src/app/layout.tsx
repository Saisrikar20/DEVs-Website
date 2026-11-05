import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnnouncementBar from "@/components/announcement-bar";
import PreloaderProvider from "@/components/preloader-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DEVS REC · Premier Developer Community of Rajalakshmi Engineering College",
  description:
    "The flagship technical society of REC. Pioneering full stack architectures, AI/ML models, spatial 3D experiences, national hackathons, and peer-to-peer engineering.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/devs-favicon.png", sizes: "256x256", type: "image/png" },
      { url: "/devs-favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/devs-favicon.png",
  },
  keywords: [
    "DEVS REC",
    "Rajalakshmi Engineering College",
    "DEVS Club",
    "Developers Club",
    "Devathon",
    "REC Virtual Experience",
    "DEVs P2P",
  ],
  authors: [{ name: "DEVS REC Core Team" }],
  openGraph: {
    title: "DEVS REC · Premier Developer Community of Rajalakshmi Engineering College",
    description: "Invent. Build. Disrupt. The official technical club of REC.",
    url: "https://devsrec.netlify.app",
    siteName: "DEVS REC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans bg-black text-zinc-100 antialiased selection:bg-white/20 selection:text-white min-h-screen flex flex-col`}
      >
        <PreloaderProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </PreloaderProvider>
      </body>
    </html>
  );
}

