import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Floor({ handleClick }) {
  return (
    <div>
      <div>
        <div className="grid">
          {Data.lighting.floorLamps.map((floor) => (
            <FloorLamp
              keys={floor.id}
              path={floor.path}
              name={floor.name}
              price={floor.price}
              rating={floor.rating}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Floor;

function FloorLamp({ handleClick, keys, path, name, price, rating }) {
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
