"use client";
import styles from "./Map.module.css"

export default function Map() {
    return (
        <div className={styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14549.918434179517!2d139.75283179314633!3d35.68623114134268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1776871504417!5m2!1sja!2sjp"
                style={{width: "100%", height: "100%"}}></iframe>
        </div>
    )
}