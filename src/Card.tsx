interface CardProps {
  name: string;
  image: string;
  price: string;
  sale: string;
  badge?: string;
}

export default function Card({ name, image, price, sale, badge }: CardProps) {
  return (
    <div className="card">
      {badge && <div className="card-badge">{badge}</div>}
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-name">{name}</h3>
      <p className="card-price">
        <span className="original-price">{price}</span> <span className="sale-price">{sale}</span>
      </p>
      <div className="card-button-group">
        <button className="card-detail-button">DETAILS</button>
        <button className="card-button">ADD 🛒</button>
      </div>
    </div>
  );
}