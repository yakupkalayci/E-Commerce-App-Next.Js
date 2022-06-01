import { ChakraProvider} from "@chakra-ui/react";
import { ProductProvider } from "../context/ProductsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </ChakraProvider>
  );
}

export default MyApp;
