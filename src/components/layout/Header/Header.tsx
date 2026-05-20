"use client";
import {useState} from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
          <h1 className={styles.logo}>
            <a href="/">
                <img src="/logo2.avif" alt="江本梨園" />
            </a>
          </h1>
          <div className={`${styles.hamburger} ${open ? styles.active : ""}`} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles.mask} ${open ? styles.active : ""}`} onClick={() => setOpen(!open)}></div>
          <nav className={`${styles.navi} ${open ? styles.active : ""}`}>
            <ul className={styles.menu}>
              <li><a href="/works">江本梨園の梨づくり</a></li>
              <li><a href="pears">販売品種</a></li>
              <li><a href="/purchase">ご購入</a></li>
              <li><a href="/contact">お問い合わせ</a></li>
            </ul>
          </nav>
        </header>
    );
}