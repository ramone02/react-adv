import styles from "../styles/styles.module.css";
import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({className, style}: Props) => {
  // TODO: maxCount
  //TODO: isMaxReached = useCallback, [ counter, maxCounter ]  
  // true si el counter  === maxCount
  //false si no lo es 
  const { increaseBy, counter, maxCounter } = useContext(ProductContext);

  const isMaxReached = useCallback(
    //!! !maxCounter, me devuelve undefined, !!maxCounter si no existe siempre me devuelve valor booleano
    //!!maxCounter si esta definido
    () => !!maxCounter && counter === maxCounter,
    [counter, maxCounter],
  );


  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled }`} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  );
};
