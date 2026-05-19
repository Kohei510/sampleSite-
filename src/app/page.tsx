import Section from "@/components/layout/TopPageSection/Section";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <section className={styles.news}>
        
          <h2 className={styles.sectionTitle}>
            <span className={styles.ja}>お知らせ</span>
            <span className={styles.en}>News</span>
          </h2>
          <ul className={styles.newsList}>
            <li>
              <span className={styles.date}>2026.7.20</span>
              <p>梨の販売を開始しました。</p>
            </li>
            <li>
              <span className={styles.date}>2026.5.1</span>
              <p>ホームページをリニューアルしました。</p>
            </li>
            <li>
              <span className={styles.date}>2025.10.1</span>
              <p>今シーズンの販売は終了しました。</p>
            </li>
            <li><p>　:</p></li>
            <li>
              <span className={styles.date}>2018.8.28</span>
              <p>鎌ヶ谷市農業まつり第４１回なし「豊水」共進会（品評会）にて、北総農業共済組合長賞を受賞しました。</p>
            </li>
            <li>
              <span className={styles.date}>2014.9.22</span>
              <p><a href="">「月曜から夜ふかし マツコにとれたてを食べさせてあげたい件Part 15～梨～」で江本梨園が紹介されました。</a></p>
            </li>
          </ul>
      </section>
      <Section 
        src="/c0bee5_167d5c28497d40b4b8905a9af92c282c~mv2.avif"
        alt=""
        href="/works"
        title="江本梨園の梨づくり"
        enTitle="Works"
        description={`江本梨園は、千葉県の鎌ケ谷市、初富にあるおいしい梨園です。<br />
          鎌ヶ谷は梨の生産地として歴史が古く、江戸時代から栽培が始められました。
          千葉県は梨の産出額、栽培面積において日本一ですが、鎌ヶ谷は平成18年以降県内3位産出額と栽培面積を誇ります。`}
      />
      <Section 
        src="/c0bee5_ef40e33ae29d47e19c8560e271f65166~mv2.avif"
        alt=""
        href="/pears"
        title="販売品種"
        enTitle="Pears"
        description={`江本梨園では幸水、豊水、かおり、新高、秋月の5種類の梨の栽培しております。<br />各梨のシーズン（収穫時期）は異なり、シーズン中にのみご購入いただけます。`}
        reverse
      />
      <Section 
        src="/c0bee5_b131deabd54c4dfab4522b25e3f83c79~mv2.avif"
        alt=""
        href="/purchase"
        title="ご購入"
        enTitle="Purchase"
        description={`直売所、電話、ファックス、ご注文フォームにてご予約、ご注文が可能です。
          ご購入される商品を決定後にご購入方法をお選びください。`}
      />
    </main>
  )
}