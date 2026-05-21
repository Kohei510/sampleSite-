import styles from "./WorksPageSection.module.css";

type Props = {
    description: string;
    reverse? :boolean;
    children: React.ReactNode;
}

export default function Section({description, reverse=false, children}: Props){
    return (
        <section className={styles.section}>
            <div className={`${styles.sectionItem}  ${reverse ? styles.reverse : ""}`}>
                <div className={styles.text}>
                    <p>{description}</p>
                </div>
                <div className={styles.img}>
                    {children}
                </div>
            </div>
        </section>
    );
}