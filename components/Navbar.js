import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <h3 className={styles.title}>Categories</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <a>Man</a>
                </li>
                <li className={styles.listItem}>
                    <a>Woman</a>
                </li>
                <li className={styles.listItem}>
                    <a>Kids</a>
                </li>
                <li className={styles.listItem}>
                    <a>Sport</a>
                </li>
                <li className={styles.listItem}>
                    <a>Technology</a>
                </li>
            </ul>
        </div>
    )
}