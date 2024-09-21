import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Wallarts({ handleClick }) {
  return (
    <div>
      <div>
        <div className="grid">
          {Data.decor.wallarts.map((wallart) => (
            <Wallart
              keys={wallart.id}
              path={wallart.path}
              name={wallart.name}
              price={wallart.price}
              rating={wallart.rating}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wallarts;

function Wallart({ handleClick, keys, path, name, price, rating }) {
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
