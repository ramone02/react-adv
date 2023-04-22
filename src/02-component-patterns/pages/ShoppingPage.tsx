import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark">
            <ProductCard.Image />
            <ProductCard.Title className="text-white"/>
            <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
         <ProductCard product={product} className="bg-dark" style={{background: '#70D1F8'}}>
            <ProductImage className="custom-image"/>
            <ProductTitle title={'Perro'} className="text-white"/>
            <ProductButtons className="custom-buttons"/>
        </ProductCard>
      </div>
    </div>
  );
};
