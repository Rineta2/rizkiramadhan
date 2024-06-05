import type { Metadata } from "next";
import "./globals.scss";

import dynamic from "next/dynamic";

const Header = dynamic(() => import('@/Components/pages/Header/Header'), { ssr: false })

import Head from "next/head";

export const metadata: Metadata = {
  title: "Rizki Ramadhan 🖥",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
