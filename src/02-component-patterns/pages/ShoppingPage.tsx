import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/product";

export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange} = useShoppingCart();  

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
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            style={{ background: "#70D1F8" }}
            key={product.id}
            onChange={onProductCountChange}
            /* busco en el carrito si existe el producto, si existe tomo el count
            si no lo paso como 0 */
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      {/* Shopping Cart */}
      {/* Objet.entries().map - retorna un array de key/values de un objeto */}
      <div className="shopping-cart">
        {shoppingCart &&
          Object.entries(shoppingCart).map(([key, productInCart]) => (
            <ProductCard
              key={key}
              product={productInCart}
              className="bg-dark"
              style={{ width: "100px" }}
              value={productInCart.count}
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          ))}
      </div>
    </div>
  );
};
