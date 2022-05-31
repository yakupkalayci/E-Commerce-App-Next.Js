import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(err => console.error("CATEGORY FETCHING ERROR!"));

    }, [])
    
    return (
        <div className={styles.navbar}>
            {/* <h3 className={styles.title}>Categories</h3> */}
            <ul className={styles.list}>
                {
                    categories.map(category => (
                        <li key={category} className={styles.listItem}>
                            <Link href={`/products/category/${category}`}>
                               <a>{category.toUpperCase()}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}