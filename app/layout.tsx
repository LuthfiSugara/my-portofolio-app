import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout } from "@/components/templates";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Luthfi Sugara | Postofolio",
  description: "Full-Stack Software Developer with 6 years Structuring, Develop and Implementing interactive applications.",
  keywords: ["Portofolio", "Software Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer"],
  openGraph: {
    title: 'Luthfi Sugara',
    description: 'Full-Stack Software Developer with 6 years Structuring, Develop and Implementing interactive applications.',
    url: 'https://sugara.online',
    siteName: 'Luthfi Sugara | Portofolio',
    images: [
      {
        url: 'https://sugara.online/images/Logo.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://sugara.online/images/Logo.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased hide-scrollbar`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
