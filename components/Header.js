import Link from "next/link";
import styles from "../styles/Header.module.css";
import { ButtonGroup, Button, IconButton, Input, Heading } from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi";

export default function Header() {
  return (
    <header className={styles.header}>
      <div id="logo">
        <Link href="/">
            <a><Heading>E-Commerce APP</Heading></a>
        </Link>
      </div>
      <div className={styles.search}>
        <Input placeholder="type for search" variant="Outline" color="black" width="300px" height="auto" />
        <IconButton icon={<FiSearch />} color="black" size="md">Search</IconButton>
      </div>
      <ButtonGroup size="sm">
        <Link href="/favs">
            <Button colorScheme="blue" >Favs</Button>
        </Link>
        <Link href="/cart">
          <Button colorScheme="pink">Cart</Button>
        </Link>
      </ButtonGroup>
    </header>
  );
}
