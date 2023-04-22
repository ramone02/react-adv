import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props{
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  //si es una sola prop desestructuro asi, sino creo interface
  const { product } = useContext(ProductContext);
  /* let titleToShow: string;
    //si viene el title lo asigno, sino tomo el del product
    title ? titleToShow = title : titleToShow = product.title; */

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
