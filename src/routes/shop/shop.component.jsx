import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const prodcuts = useContext(ProductsContext);
  return (
    <div>
      {prodcuts.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
