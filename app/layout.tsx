import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import localFont from 'next/font/local'
const lato = localFont({
  src: [
    {
      path: '../app/resources/fonts/Lato-Light.ttf',
      weight: '400',
      style: 'normal',
      
    },
    {
      path: '../app/resources/fonts/Lato-Black.ttf',
      weight: '600',
      style: 'medium',
      
    },
     {
      path: '../app/resources/fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'bold',
      
    },
    {
      path: '../app/resources/fonts/Lato-Italic.ttf',
      weight: '400',
      style: 'italic',
    },

  ],
  variable:"--font-lato",
})
const ebFont = localFont({
  src: [

    {
      path: '../app/resources/fonts/EBGaramond-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../app/resources/fonts/EBGaramond-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable:"--font-ebg",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "piystudio",
  description: "Art gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${ebFont.variable}`}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
