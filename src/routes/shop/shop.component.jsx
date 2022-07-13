import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const prodcuts = useContext(ProductsContext);
  return (
    <div className="products-container">
      {prodcuts.map((prodcut) => (
        <ProductCard key={prodcut.id} product={prodcut} />
      ))}
    </div>
  );
};

export default Shop;
