import { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Access from "@/components/layout/Access/Access";
import Visual from "@/components/layout/Visual/Visual";
import Section from "@/components/layout/Section/Section";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "sample site",
  description: "サンプルサイトです",
  icons:{
    icon: "/favicon.ico",
  }
}

export default function RootLayout({children}: {children:ReactNode}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Visual src="/_GOT0014.avif" alt="" />
        <div className={styles.wrapper}>
          {children}
          <Section 
            src="/c0bee5_167d5c28497d40b4b8905a9af92c282c~mv2.avif"
            alt=""
            title="江本梨園の梨づくり"
            enTitle="Works"
            description={`江本梨園は、千葉県の鎌ケ谷市、初富にあるおいしい梨園です。<br />
              鎌ヶ谷は梨の生産地として歴史が古く、江戸時代から栽培が始められました。
              千葉県は梨の産出額、栽培面積において日本一ですが、鎌ヶ谷は平成18年以降県内3位産出額と栽培面積を誇ります。`}
            />
          <Section 
            src="/c0bee5_ef40e33ae29d47e19c8560e271f65166~mv2.avif"
            alt=""
            title="販売品種"
            enTitle="Pears"
            description={`江本梨園では幸水、豊水、かおり、新高、秋月の5種類の梨の栽培しております。<br />各梨のシーズン（収穫時期）は異なり、シーズン中にのみご購入いただけます。`}
            reverse
          />
          <Section 
            src="/c0bee5_b131deabd54c4dfab4522b25e3f83c79~mv2.avif"
            alt=""
            title="ご購入"
            enTitle="Purchase"
            description={`直売所、電話、ファックス、ご注文フォームにてご予約、ご注文が可能です。
              ご購入される商品を決定後にご購入方法をお選びください。`}
          />
        </div>
        <Access />
        <div className={styles.wrapper}>
          <Footer />
        </div>
      </body>
    </html>
  )
}