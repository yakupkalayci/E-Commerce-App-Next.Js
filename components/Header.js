import Link from "next/link";
import Navbar from "./Navbar";
import { useProduct } from "../context/ProductsContext";
import styles from "../styles/Header.module.css";
import {IconButton, Input, Heading } from "@chakra-ui/react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const {searchInput, handleInputChange} = useProduct();

  return (
    <header className={styles.headerContainer}>

      <div className={styles.mainHeader}>
        
        <div id="logo" className={styles.logo}>
          <Link href="/">
            <a>
              <Heading>E-Commerce APP</Heading>
            </a>
          </Link>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.search}>
            <Input
              placeholder="Type for search"
              variant="Outline"
              color="black"
              width="300px"
              height="auto"
              onChange={(e) => handleInputChange(e)}
            />
            <IconButton icon={<FiSearch />} color="black" size="md" />
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/favs">
              <IconButton
                aria-label="Favs button"
                colorScheme="blue"
                icon={<FiHeart />}
                size="lg"
                className={styles.btn}
              />
            </Link>
            <Link href="/cart">
              <IconButton
                aria-label="Cart button"
                colorScheme="pink"
                icon={<FiShoppingCart />}
                size="lg"
                className={styles.btn}
              />
            </Link>
          </div>
        </div>



      </div>

      <div className={styles.subHeader}>
        <div className={styles.subHeaderContainer}>
          <Navbar />
        </div>
      </div>

    </header>
  );
}
