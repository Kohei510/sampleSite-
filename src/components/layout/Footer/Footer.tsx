import styles from "./Footer.module.css";

export default function Footer() {
    return (
       <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                <a href="index.html">
                    <img src="/logo1.avif" alt="江本梨園" />
                </a>
                </div>
                <ul className={styles.menu}>
                    <li><a href="index.html">お知らせ</a></li>
                    <li><a href="works.html">江本梨園の梨づくり</a></li>
                    <li><a href="pears.html">販売品種</a></li>
                    <li><a href="purchase.html">ご購入</a></li>
                    <li><a href="contact.html">お問い合わせ</a></li>
                    <li><a href="index.html">当園の概要</a></li>
                    <li><a href="index.html">特定商取引法に基づく表記</a></li>
                    <li><a href="index.html">関連リンク</a></li>
                </ul>
            </div>
            <p className={styles.copyright}>Copyright &copy; 江本梨園. All rights reserved.</p>
        </footer> 
    );
}