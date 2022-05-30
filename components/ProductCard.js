import Link from "next/link";
import { useProduct } from "../context/ProductsContext";
import styles from "../styles/ProductCard.module.css";
import { Button, ButtonGroup, Image, useToast } from "@chakra-ui/react";
import {FiHeart, FiShoppingCart} from "react-icons/fi";

export default function ProductCard(props) {
  const {state, dispatch } = useProduct();

  const toast = useToast();

  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <div className={styles.productImg}>
          <Image src={props.image} boxSize="250px" />
        </div>
        <div className={styles.productTitle}>
          <h2>
            <Link href={`/products/${props.id}`}>
              <a>{props.title}</a>
            </Link>
          </h2>
        </div>
        <div className={styles.price}>
          <p>{props.price} TL</p>
        </div>
        <div className={styles.buttons}>
          <ButtonGroup spacing="3">
            <Button
            colorScheme="blue"
            variant="outline"
            leftIcon={<FiHeart />}
              onClick={() => {
                dispatch({
                  type: "AddToFavs",
                  id: props.id,
                  img: props.image,
                  title: props.title,
                  price: props.price,
                });
                toast({
                  title : "Added succesfully!",
                  description : "The product is in favs now.",
                  status : "success",
                  isClosable : true,
                  position : "bottom-left"
                })
              }}
            >
              Add to Fav
            </Button>
            <Button
            colorScheme="pink"
            leftIcon={<FiShoppingCart />}
              onClick={() => {
                dispatch({
                  type: "AddToCart",
                  id: props.id,
                  img: props.image,
                  title: props.title,
                  price: props.price,
                }); console.log(state.cart);
                toast({
                  title : "Added succesfully!",
                  description : "The product is in cart now.",
                  status : "success",
                  isClosable : true,
                  position : "bottom-left"
                })
              }}
            >
              Add to Cart
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
