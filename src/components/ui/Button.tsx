"use client";
import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
    children: React.ReactNode;
    href: string;
};

export default function Button({ children, href }: Props) {
    return (
            <a href={href} 
                className={styles.button}>
                {children}
            </a>
    )
}