import { ReactNode } from "react";
import styles from "./SectionItem.module.css";

type Props = {
    children: ReactNode;
    num: string;
    title: string;
}

export default function SectionItem({children, num, title}: Props) {
    return (
        <div className={styles.sectionItem}>
            <div className={styles.stepNumber}>{num}</div>
            <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{title}</h3>
                {children}
            </div>
        </div>
    );
}