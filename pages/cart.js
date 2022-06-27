import { useState } from "react";
import { useProduct } from "../context/ProductsContext";
import { Button, Heading } from "@chakra-ui/react";
import styles from "../styles/cart.module.css";
import Link from "next/link";

export default function Cart() {
  const { state, dispatch, filterProducts } = useProduct();
  const products = filterProducts(state.cart)

  const totalCartAmount = state.cart?.reduce(
    (total, cartItem) => (total = total + cartItem.price * cartItem.count),
    0
  ).toFixed(2);

  return (
    <div className={styles.cart}>
      <div className={styles.productsContainer}>
        <Heading>Products</Heading>
        {state.cart?.length ? (
          <ul>
            {products.map((item) => (
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
                    <span className={styles.price}>{(item.price * item.count).toFixed(2)} TL</span>
                    <span className={styles.count}>
                      <p>{item.count} adet</p>
                    </span>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <Button onClick={() => dispatch({type: "decrease", id: item.id})}>-</Button>
                  <br />
                  <Button
                    onClick={() =>
                      dispatch({ type: "RemoveFromCart", id: item.id })
                    }
                  >
                    Remove
                  </Button>
                  <Button onClick={() => dispatch({type: "increase", id: item.id})}>+</Button>
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
          <p className={styles.totalPrice}>{totalCartAmount}₺</p>
          <Button colorScheme="teal">Pay Now</Button>
        </div>
      </div>
    </div>
  );
}
