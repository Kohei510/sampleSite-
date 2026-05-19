import styles from "./PearsPageSection.module.css";

type Props = {
    src: string;
    alt?: string;
    title: string;
    description1: string;
    description2: string;
    description3: string;
}

export default function Section({title, description1, description2, description3, src, alt=""}: Props){
    return (
        <section className={styles.pears}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <div className={styles.sectionItem}>
                <div className={styles.img}>
                    <img src={src} alt={alt} />
                </div>
                <dl className={styles.text}>
                    <dt>来歴</dt>
                    <dd>{description1}</dd>
                    <dt>収穫時期</dt>
                    <dd>{description2}</dd>
                    <dt>特徴</dt>
                    <dd>{description3}</dd>
                </dl>
            </div>
        </section>
    );
}

/*
reverse? :boolean;
}

export default function Section({title, enTitle, description, reverse=false, src, alt=""}: Props){
    return (
        <section className={styles.section}>
            <div className={`${styles.sectionItem}  ${reverse ? styles.reverse : ""}`}>
            */