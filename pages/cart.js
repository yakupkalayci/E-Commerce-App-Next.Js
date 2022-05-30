import { useState, useEffect } from "react";
import { useProduct } from "../context/ProductsContext";
import { Button, Heading } from "@chakra-ui/react";
import styles from "../styles/cart.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Cart() {
  const { state, dispatch } = useProduct();

  return (
    <div className={styles.cart}>
      <div className={styles.productsContainer}>
        <Heading>Products</Heading>
        {state.cart.length ? (
          <ul>
            {state.cart.map((item) => (
              <li key={item.id} className={styles.product}>
                <div className={styles.firstPart}>
                  <div>
                    <img src={item.img} width="200px" height="200px"></img>
                  </div>
                  <div>
                    <Link href={`/products/${item.id}`}>
                      <a className={styles.productTitle}>{item.title}</a>
                    </Link>
                  </div>
                  <div>
                    <span className={styles.price}>{item.price} TL</span>
                    <span className={styles.count}>
                      <p>1 adet</p>
                    </span>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <Button>+</Button>
                  <br />
                  <Button
                    onClick={() =>
                      dispatch({ type: "RemoveFromCart", id: item.id })
                    }
                  >
                    Remove
                  </Button>
                  <Button>-</Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noProduct}>
            <Heading size="md">No Product!</Heading>
            <Link href="/">
              <a className={styles.link}>See All Products</a>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.payment}>
        <Heading size="lg">Payment</Heading>
        <div className={styles.priceInfo}>
          <Heading size="md" className={styles.heading}>
            Total Price:
          </Heading>
          <p className={styles.totalPrice}>0₺</p>
          <Button colorScheme="teal">Pay Now</Button>
        </div>
      </div>
    </div>
  );
}
