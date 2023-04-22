import styles from "../styles/styles.module.css";
import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {  Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);


export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string; 
  style?: React.CSSProperties;
}

const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: Props) => {
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
      <div className={`${styles.productCard} ${className}`} style={style}>{children}</div>
    </Provider>
  );
};
