import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.main}>
          {data.map((product) => (
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
