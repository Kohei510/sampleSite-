import styles from "./SeasonChart.module.css";

export default function SeasonChart() {
    return(
        <section className={styles.season}>
        <h2 className={styles.sectionTitle}>収穫時期</h2>
        <div className={styles.seasonTable}>
          <table>
            <thead>
                <tr>
                    <th>７月</th>
                    <th>８月</th>
                    <th>９月</th>
                    <th>１０月</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className={`${styles.bar} ${styles.kosui}`}>幸水</div>
          <div className={`${styles.bar} ${styles.hosui}`}>豊水</div>
          <div className={`${styles.bar} ${styles.kaori}`}>かおり</div>
          <div className={`${styles.bar} ${styles.akizuki}`}>秋月</div>
          <div className={`${styles.bar} ${styles.niitaka}`}>新高</div>
        </div>
      </section>
    )
}