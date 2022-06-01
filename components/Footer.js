import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>E-Commerce App &#169; 2022 - Created by  
                <a href="https://github.com/yakupkalayci" className={styles.link}> Yakup Kalaycı</a>
            </p>
        </footer>
    )
}