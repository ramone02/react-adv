import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps} from "../components/ProductButtons";


export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHocProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props:ProductTitleProps) => JSX.Element;
  Image: ({ img }: ProductImageProps) => JSX.Element;
  Buttons: ({className}:ProductButtonsProps ) => JSX.Element;
}

export interface onChangeArgs{
  product: Product; 
  count: number;
};

//extiendo la interface de Product y le agrego una nueva prop de Count
export interface ProductInCart extends Product {
  count: number;
}