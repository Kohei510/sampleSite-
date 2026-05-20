import { ReactNode } from "react";
import styles from "./Label.module.css";

type Props = {
    children: ReactNode;
    htmlFor: string;
}

export default function Label({children, htmlFor}: Props) {
    return (
        <label className={styles.label} htmlFor={htmlFor}>{children}</label>
    );
}