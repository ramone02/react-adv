import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    //<Product> GENERICOSSSSS!!!!!
  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

  const onProductCountChange = ({ count, product }: {count: number;product: Product;}) => {
    
    setShoppingCart((oldShoppingCart) => {
      // si el count llega a 0, saco el product del shoppingCart
      //desestructuro y dejo el resto
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange
  };
};