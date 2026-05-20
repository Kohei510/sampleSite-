import Button from "@/components/ui/Button"
import SectionItem from "./components/SectionItem";
import styles from "./page.module.css";

export default function Page() {
    return (
        <main>
           <section className={styles.purchase}>
                <h2 className={styles.title}>ご購入の流れ</h2>
                <div className={styles.step}>
                    <SectionItem 
                        num="1"
                        title="ご購入商品の決定"
                    >お好みの梨の品種やサイズをお選びください。<br />
                    収穫時期や品種の特徴は<a className={styles.link} href="/pears">「販売品種」ページ</a>でご確認いただけます。</SectionItem>
                </div>
                <div className={styles.step}>
                    <SectionItem 
                        num="2"
                        title="ご注文方法の選択"
                    >
                        <p>以下のいずれかの方法でご注文いただけます。</p>
                        <ul className={styles.orderList}>
                            <li><strong>直売所：</strong>営業中は直売所にて直接ご購入いただけます。(営業時間　00:00 ～ 00:00)</li>
                            <li><strong>お電話：</strong>047-123-4567（営業時間内）　<a className={styles.link} href="">お問い合わせはこちら</a></li>
                            <li><strong>FAX：</strong>047-123-4568（営業時間内）</li>
                            <li><strong>ご注文フォーム：</strong>必要事項をご入力のうえ送信してください。　<a className={styles.link} href="">ご注文フォームはこちら</a></li>
                        </ul>
                    </SectionItem>
                    
                </div>
                <div className={styles.step}>
                    <SectionItem 
                        num="3"
                        title="お支払い"
                    >
                        お支払いは銀行振り込みになります。　<a className={styles.link} href="">振込先はこちら</a><br />ご注文確認後、振り込みをお願いいたします。<br />地域ごとの送料は以下の表をご確認ください。
                    </SectionItem>

                    <div className={styles.shippingImg}>
                        <img src="2023ヤマト送料.avif" alt="送料一覧" />
                    </div>
                </div>
            </section>
        </main>
    )
}