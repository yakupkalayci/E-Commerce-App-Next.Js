import { ChakraProvider} from "@chakra-ui/react";
import { ProductProvider } from "../context/ProductsContext";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ProductProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductProvider>
    </ChakraProvider>
  );
}

export default MyApp;
