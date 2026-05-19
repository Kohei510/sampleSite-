import styles from "./Section.module.css";
import Button from "@/components/ui/Button";

type Props = {
    src: string;
    alt?: string;
    title: string;
    enTitle: string;
    description: string;
    reverse? :boolean;
    href: string;
}

export default function Section({title, enTitle, description, reverse=false, src, alt="", href}: Props){
    return (
        <section className={styles.section}>
            <div className={`${styles.sectionItem}  ${reverse ? styles.reverse : ""}`}>
                <div className={styles.img}>
                    <img src={src} alt={alt} />
                </div>
                <div className={styles.text}>
                    <h2 className={styles.textTitle}>
                        <span className={styles.ja}>{title}</span>
                        <span className={styles.en}>{enTitle}</span>
                    </h2>
                    <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
                    <Button href={href}>詳細を見る</Button>
                </div>
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