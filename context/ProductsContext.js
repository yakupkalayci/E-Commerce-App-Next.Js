import { useContext, createContext, useReducer, useEffect } from "react";
import { AppReducer, initialStates } from "./AppReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialStates);

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
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
