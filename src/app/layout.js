import "./globals.css";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutsadaWiriya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://9kritsada.github.io/Hitman.GG/img/logo/hit-man-ogmeta-img.png"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
