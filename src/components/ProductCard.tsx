import { useState } from "react";
import { FiShoppingCart, FiChevronUp, FiChevronDown } from "react-icons/fi";
import "./styles/ProductCard.css";

type Props = {
  name: string;
  oldPrice: number;
  newPrice: number;
  image: string;
  description: string;
};

// Simple product quantity selector with + and - buttons
function QuantitySelector() {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="qty-wrapper-horizontal">
      <div className="qty-display">{count}</div>
      <div className="qty-arrows">
        <button onClick={increment} className="qty-arrow"><FiChevronUp /></button>
        <button onClick={decrement} className="qty-arrow"><FiChevronDown /></button>
      </div>
    </div>
  );
}

// Full product card with image, description, price, buttons
export default function ProductCard({ name, oldPrice, newPrice, image, description }: Props) {
  return (
    <div className="product-card">
      <div className="product-header">
        {/* Badge + quantity selector */}
        <div className="product-left">
          <div className="on-sale">
            <span className="dot" /> ON SALE
          </div>
          <span className="in-stock">In stock</span>
        </div>
        <QuantitySelector />
      </div>

      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">
          <span className="new-price">${newPrice.toFixed(2)}</span>
          <span className="old-price">${oldPrice.toFixed(2)}</span>
        </p>
        <p className="product-description">{description}</p>
      </div>

      {/* Action buttons */}
      <div className="product-actions">
        <button className="details-btn">DETAILS</button>
        <button className="add-btn">
          ADD
          <span className="add-icon-wrapper">
            <FiShoppingCart className="icon" />
          </span>
        </button>
      </div>
    </div>
  );
}
