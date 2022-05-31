import Link from "next/link";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import {IconButton, Input, Heading } from "@chakra-ui/react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.mainHeader}>
        <div id="logo">
          <Link href="/">
            <a>
              <Heading>E-Commerce APP</Heading>
            </a>
          </Link>
        </div>
        <div className={styles.search}>
          <Input
            defaultValue="Type for Search"
            variant="Outline"
            color="black"
            width="300px"
            height="auto"
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
      <div className={styles.subHeader}>
        <div className={styles.subHeaderContainer}>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
