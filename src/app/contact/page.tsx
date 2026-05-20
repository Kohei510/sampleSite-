import FormItem from "./components/FormItem";
import Label from "./components/Label";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export default function Page() {
    return (
        <main>
            <section className={styles.contact}>
                <h2 className={styles.contactTitle}>お問い合わせ</h2>

                <form action="#" method="post" className={styles.contactForm}>

                    <FormItem
                        htmlFor="name"
                        label="お名前"
                        type="text"
                        id="name"
                        name="name"
                        required
                    />

                    <FormItem
                        htmlFor="email"
                        label="メールアドレス"
                        type="email"
                        id="email"
                        name="email"
                        required
                    />

                    <FormItem
                        htmlFor="tel"
                        label="電話番号（任意）"
                        type="tel"
                        id="tel"
                        name="tel"
                    />

                    <div className={styles.formGroup}>
                        <Label htmlFor="">お問い合わせ内容</Label>
                        <textarea className={styles.textarea} id="message" name="message" rows={6} required></textarea>
                    </div>

                    <Button href="">送信する</Button>

                </form>
            </section>

            <section className={styles.contactInfo}>
                <h3 className={styles.contactInfoTitle}>江本梨園 連絡先</h3>

                <div className={styles.contactInfoBox}>
                <p className={styles.contactInfoLabel}>お電話でのお問い合わせ</p>
                <a href="tel:00000000000" className={styles.contactInfoTel}>000-0000-0000</a>

                <p className={styles.contactInfoNote}>
                    ※ 営業時間　00:00 ～ 00:00<br />
                    ※ 作業中は電話に出られない場合があります。
                </p>
                </div>
            </section>
        </main>
    );
}