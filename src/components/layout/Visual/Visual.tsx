import styles from "./Visual.module.css";

type Props = {
    src: string;
    alt? : string;
};

export default function Visual({ src, alt="" }: Props){
    return (
        <div className={styles.mainvisual}>
            <div className={styles.img}>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
}