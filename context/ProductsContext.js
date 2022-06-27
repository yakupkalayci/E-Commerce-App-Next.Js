import { useContext, createContext, useReducer, useEffect, useState } from "react";
import { AppReducer, initialStates } from "./AppReducer";

const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialStates);

  const [searchInput, setSearchInput ] = useState("Type for search");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const filterProducts = (data) => {
    if(searchInput === "Type for search") {
      return data;
    }
    else {
      const products = data.filter(product => {
        const title = product.title.toLowerCase();
        return title.indexOf(searchInput.toLowerCase()) > -1 ;
      });
      return products;
    }
  }

  useEffect(() => {
    if (localStorage.getItem("states")) {
      dispatch({
        type: "initValues",
        value: JSON.parse(localStorage.getItem("states"))
      });
    }
  }, []);

  useEffect(() => {
    if(state !== initialStates) {
      localStorage.setItem("states", JSON.stringify(state));
    }
  }, [state]);

  return (
    <ProductContext.Provider value={{ state, dispatch, searchInput, handleInputChange, filterProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
