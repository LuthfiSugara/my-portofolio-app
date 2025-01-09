// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Layout } from "@/components/templates";
import Head from "next/head";

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

// export const metadata: Metadata = {
//   title: "Luthfi Sugara",
//   description: "Full-Stack Software Developer with 6 years Structuring, Develop and Implementing interactive applications.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Luthfi Sugara</title>
        <meta name="description" content="Full-Stack Software Developer with 6 years Structuring, Develop and Implementing interactive applications." />
        <meta property="og:title" content="Luthfi Sugara" />
        <meta property="og:description" content="Full-Stack Software Developer with 6 years Structuring, Develop and Implementing interactive applications." />
        <meta property="og:image" content="https://sugara.online/images/Logo.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://sugara.online" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="L:Luthfi Sugara" />
        <meta name="twitter:description" content="Full-Stack Software Developer with 6 years Structuring, Develop and Implementing interactive applications." />
        <meta name="twitter:image" content="https://sugara.online/images/Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
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
