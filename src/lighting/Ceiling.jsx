import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Ceiling({ handleClick }) {
  return (
    <div>
      <div>
        <div className="grid">
          {Data.lighting.ceilingLights.map((ceiling) => (
            <Ceilings
              keys={ceiling.id}
              path={ceiling.path}
              name={ceiling.name}
              price={ceiling.price}
              rating={ceiling.rating}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ceiling;

function Ceilings({ handleClick, keys, path, name, price, rating }) {
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
