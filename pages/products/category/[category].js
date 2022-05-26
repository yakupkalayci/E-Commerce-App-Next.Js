import ProductCard from "../../../components/ProductCard";
import styles from "../../../styles/[category].module.css";

export default function CategoryPage({data}) {
    return (
    <div className={styles.productsContainer}>
        {
            data.map(product => (
                <ProductCard key={product.id} image={product.image} id={product.id} title={product.title} price={product.price} />
            ))
        }
    </div>
    )
}

export async function getStaticPaths() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const paths = data.map(product => ({
        params : { category: String(product.category) }
    }));

    return {
        paths,
        fallback : false
    };
}

export async function getStaticProps({params}) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${params.category}`);
    const data = await response.json();

    return {
        props : {data}
    };
}