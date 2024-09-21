import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Cabinents({ handleClick }) {
  return (
    <div>
      <div className="grid">
        {Data.kitchen.cabinets.map((cabin) => (
          <Cabin
            keys={cabin.id}
            path={cabin.path}
            name={cabin.name}
            price={cabin.price}
            rating={cabin.rating}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Cabinents;

function Cabin({ handleClick, keys, path, name, price, rating }) {
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
