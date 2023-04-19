import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {  ProductCardProps, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  /* const [counter, setSounter] = useState(0);

  const increaseBy = (value: number) => {
    //
    setSounter((prev) => Math.max(prev + value, 0));
  }; */

  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
