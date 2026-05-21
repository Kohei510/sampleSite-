import styles from "./page.module.css"
import SeasonChart from "@/components/layout/SeasonChart/SeaconChart"
import Section from "./components/WorksPageSection";

export default function Page(){
    return (
        <main>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <h2>江本梨園の梨づくり</h2> 
                </div>
                <div className={styles.titleImg}>
                    <img src="works/c0bee5_0f60e392ec6c49eaa21ba4203fbb0d1b.avif" alt="" />
                </div>
                <Section
                    description="江本梨園は、千葉県の鎌ケ谷市、初富にあるおいしい梨園です!"
                >
                    <img className={styles.sectionImg} src="works/c0bee5_81e40a0a2e5b4a1cb4b9431d9aa3b066.avif" alt="" />
                </Section>

                <Section
                    description="鎌ヶ谷は梨の生産地として歴史が古く、江戸時代から栽培が始められました。 千葉県は梨の産出額、栽培面積において日本一ですが、鎌ヶ谷は平成18年以降県内3位産出額と栽培面積を誇ります。"
                    reverse
                >
                    <img className={styles.sectionImg} src="works/c0bee5_3a13d63985d44f529506dcb477e2696a.avif" alt="" />
                </Section>

                <Section
                    description="江本梨園では毎年お客様においしいと言っていただける梨を少しでも多くご提供できるよう、日々梨の生産作業を続けております。"
                >
                    <img className={`${styles.portrate} ${styles.sectionImg}`} src="works/c0bee5_e89bb84609174b12b51ac42721979a54.avif" alt="" />
                </Section>
                    
                
            </div>
    
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <h2>梨が実るまでの様子</h2> 
                </div>
                <ul className={styles.gridArea}>
                    <li><img src="works/c0bee5_d55183ae326445cdbbaf0bd5cd218b0a.avif" alt="" /></li>
                    <li><img src="works/c0bee5_64a4b3309e684f18a9443f2b1298eaad.avif" alt="" /></li>
                    <li><img src="works/c0bee5_9f767944a7ce4bf0a325e1e1167d2066.avif" alt="" /></li>
                    <li><img src="works/c0bee5_f1855276aadd4697a182adca5a6e9da2.avif" alt="" /></li>
                    <li><img src="works/c0bee5_9ba4569dc84c445dad82736864027e70.avif" alt="" /></li>
                    <li><img src="works/c0bee5_970d6420b40f4550afd83af5411c324e.avif" alt="" /></li>
                </ul>
            </div>

            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <h2>栽培品種</h2> 
                </div>
                <div className={styles.textPears}>
                    <p>当梨園では幸水、豊水、かおり、秋月、新高の5種類を生産しております。<br />
                    梨の生産作業は一年を通して行われますが、梨をお客様にお召し上がりいただけるのは毎年7月上旬～10月上旬の約3か月程度の非常に短い期間です。<br />
                    また、各梨ごとにそのシーズンも異なり、一つの梨でそのシーズンは２～３週間程度です。
                    </p>
                </div>
                <ul className={`${styles.gridArea} ${styles.pears}`}>
                    <li><img src="products/スクリーンショット 幸水.png" alt="" /></li>
                    <li><img src="products/スクリーンショット 豊水.png" alt="" /></li>
                    <li><img src="products/スクリーンショット かおり.png" alt="" /></li>
                    <li><img src="products/スクリーンショット 秋月.png" alt="" /></li>
                    <li><img src="products/スクリーンショット 新高.png" alt="" /></li>
                </ul>
            </div>

            <SeasonChart />
            <p className={styles.seasonText}>その年の天候や流行する梨の病気、害虫等で品質や生産量に影響が出ることもございます。</p>
        </main>
    )
}