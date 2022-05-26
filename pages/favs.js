import { useProduct } from "../context/ProductsContext";
import styles from "../styles/favs.module.css";
import { Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Favs() {
  const {state, dispatch} = useProduct();

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
              {item.title}
            </div>
            <div className={styles.buttons}>
              <Button onClick={() => dispatch({type:"AddToCart", id:item.id})} colorScheme="pink" mb="2" >Add to Cart</Button>
              <Button onClick={() => dispatch({type:"RemoveFromFavs", id:item.id})} colorScheme="blue" >Remove</Button>
            </div>
          </li>
        ))
        :<div className={styles.infoContainer}>
          <p className={styles.warningMessage}>You haven't added any products to your favorites yet.</p>
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
