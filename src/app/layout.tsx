import { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Access from "@/components/layout/Access/Access";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "sample site",
  description: "サンプルサイトです",
  icons:{
    icon: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
  visual
}: {
  children: ReactNode;
  visual: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div id="visual-slot">
          { visual }
        </div>
        <div className={styles.wrapper}>
          { children }
        </div>
        <Access />
        <div className={styles.wrapper}>
          <Footer />
        </div>
      </body>
    </html>
  )
}