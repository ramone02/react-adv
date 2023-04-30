import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/product";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-dark"
        style={{ background: "#70D1F8" }}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {({reset, increaseBy, isMaxCountReached, maxCount, count}) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
            <button onClick={()=>reset()}>Reset</button>
            <button onClick={()=>increaseBy(-2)}>-2</button>
            {
              !isMaxCountReached && <button onClick={()=>increaseBy(+2)}>+2</button>
            }
            <span>{count} - {maxCount}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
