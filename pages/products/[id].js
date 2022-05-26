import Link from "next/link";
import styles from "../../styles/[id].module.css";

export default function Product({ data }) {
  return (
      <>
      <div className={styles.productContainer} >
          <div className={styles.producImg}>
              <img src={data.image} width="600px" height="600px" />
          </div>
          <div className={styles.producInfos}>
              <h2 className={styles.title}>{data.title}</h2>
              <div className={styles.description}>
                  <h4>Description:</h4>
                  <p>{data.description}</p>
              </div>
              <p className={styles.price}>{data.price}</p>
              <div className={styles.buttons}>
                  <button>Fav</button>
                  <button>Add to cart</button>
              </div>
          </div>
      </div>
      </>
  )
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
