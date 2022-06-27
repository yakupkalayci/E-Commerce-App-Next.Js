import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.css";
import { useProduct } from "../context/ProductsContext";

export default function Home({ data }) {
  const {filterProducts} = useProduct();
  const products = filterProducts(data);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
