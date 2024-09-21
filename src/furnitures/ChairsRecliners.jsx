import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function ChairsRecliners({ handleClick }) {
  return (
    <div className="grid">
      {Data.furnitures.chairs.map((chair) => (
        <Chair
          keys={chair.id}
          path={chair.path}
          name={chair.name}
          price={chair.price}
          rating={chair.rating}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default ChairsRecliners;

function Chair({ handleClick, keys, path, name, price, rating }) {
  const items = {
    keys,
    path,
    name,
    price,
    rating,
  };

  return (
    <div className="sofa_div">
      <img className="sofa_img" src={path} alt="A Sofa" />
      <div className="text">
        <p className="sofa_name">{name}</p>
        <p className="sofa_price">${price}</p>
        <p className="sofa_rating">Rating: {rating}</p>
        <button className="wishlist_btn" onClick={() => handleClick(items)}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
