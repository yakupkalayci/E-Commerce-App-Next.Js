import { useProduct } from "../context/ProductsContext";
import styles from "../styles/favs.module.css";
import { Heading, Button, useToast } from "@chakra-ui/react";
import Link from "next/link";

export default function Favs() {
  const {state, dispatch} = useProduct();

  const toast = useToast();

  return (
    <div className={styles.favs}>
      <Heading size="lg">Favourites</Heading>
      <ul>
        {
        (state.favs.length > 0) ?
        state.favs.map((item) => (
          <li className={styles.product} key={item.title}>
            <div>
              <img src={item.img} width="200px" height="200px"></img>
            </div>
            <div>
              <Link href={`/products/${item.id}`}><a className={styles.productTitle}>{item.title}</a></Link>
            </div>
            <div className={styles.buttons}>
              <Button colorScheme="pink" mb="2" onClick={() => {
                dispatch({type:"AddToCart", id: item.id, img: item.img, title: item.title, price: item.price});
                toast({
                  title : "Added succesfully!",
                  description : "The product is in cart now.",
                  status : "success",
                  isClosable : true,
                  position : "bottom-left"
                })
                }}>
                  Add to Cart
                </Button>
              <Button colorScheme="blue"  onClick={() => {
                dispatch({type:"RemoveFromFavs", id:item.id});
                toast({
                  title : "Removed succesfully!",
                  description : "The product has removed from your favs.",
                  status : "info",
                  isClosable : true,
                  position : "bottom-left"
                })
              }}>Remove</Button>
            </div>
          </li>
        ))
        :<div className={styles.infoContainer}>
          <p className={styles.warningMessage}>You have not added any products to your favorites yet.</p>
          <br />
          <Link href="/">
          <a className={styles.link}>See All Products</a>
          </Link>
        </div>
      }

      </ul>
    </div>
  );
}
