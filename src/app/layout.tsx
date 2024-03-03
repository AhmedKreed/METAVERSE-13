import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaverse-13",
  description: `Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's
    really real, you can feel what you feel in this metaverse world, because this is really the madness
    of the metaverse of today, using only VR devices you can easily explore the metaverse world you want`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="bg-primary-black overflow-hidden">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
