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
    </main>
  )
}