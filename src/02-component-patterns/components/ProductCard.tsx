import styles from "../styles/styles.module.css";
import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  /* const [counter, setSounter] = useState(0);

  const increaseBy = (value: number) => {
    //
    setSounter((prev) => Math.max(prev + value, 0));
  }; */

  const { counter, increaseBy, maxCounter, reset, isMaxCountReached } =
    useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCounter,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          reset,
          product,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};
