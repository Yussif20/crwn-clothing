import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [prodcuts, setProducts] = useState(PRODUCTS);
  const value = prodcuts;

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
