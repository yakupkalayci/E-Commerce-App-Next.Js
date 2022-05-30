import styles from "../../styles/[id].module.css";
import { Heading, Button, ButtonGroup, useToast } from "@chakra-ui/react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useProduct } from "../../context/ProductsContext";

export default function Product({ data }) {
  const {dispatch} = useProduct();

  const toast = useToast();

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.producImg}>
          <img src={data.image} width="800px" height="800px" />
        </div>
        <div className={styles.producInfos}>
          <Heading>{data.title}</Heading>
          <div className={styles.description}>
            <Heading size="md">Description:</Heading>
            <p>{data.description}</p>
          </div>
          <p className={styles.price}>{data.price}₺</p>
          <ButtonGroup variant="solid" className={styles.buttons}>
            <Button
              colorScheme="blue"
              leftIcon={<FiHeart />}
              onClick={() => {
                dispatch({
                  type: "AddToFavs",
                  id: data.id,
                  img: data.image,
                  title: data.title,
                  price: data.price,
                });
                toast({
                  title: "Added succesfully!",
                  description: "The product is in favs now.",
                  status: "success",
                  isClosable: true,
                  position: "bottom-left",
                });
              }}
            >
              Fav
            </Button>
            <Button
              colorScheme="pink"
              leftIcon={<FiShoppingCart />}
              onClick={() => {
                dispatch({
                  type: "AddToCart",
                  id: data.id,
                  img: data.image,
                  title: data.title,
                  price: data.price,
                });
                toast({
                  title: "Added succesfully!",
                  description: "The product is in cart now.",
                  status: "success",
                  isClosable: true,
                  position: "bottom-left",
                });
              }}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // return a list of possible ids
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch necessary data for the product using params.id
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
}
