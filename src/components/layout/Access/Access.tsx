import styles from "./Access.module.css";
import Map from "./Map";
import Button from "@/components/ui/Button"

export default function Access() {
    return (
        <div className={styles.access}>
            <h1 className={styles.title}>アクセス</h1>
            <div className={styles.info}>
                <dl className={styles.text}>
                    <dt>住所</dt>
                    <dd>〒０００－００００<br />千葉県鎌ケ谷市<br />・・・・・・・</dd>
                    <dt>アクセス</dt>
                    <dd>新京成線○○駅から徒歩10分<br />○○交差点から・・・・・<br />５～６台の駐車スペースあり</dd>
                    <dt>Tel</dt>
                    <dd>000-0000-0000</dd>
                    <dt>Fax</dt>
                    <dd>000-0000-0000</dd>
                </dl>
                <Map />
            </div>
        </div>
    );
}