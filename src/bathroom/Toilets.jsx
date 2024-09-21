import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Toilets({ handleClick }) {
  return (
    <div>
      <div>
        <div className="grid">
          {Data.bathroom.toilets.map((toilet) => (
            <Toilet
              keys={toilet.id}
              path={toilet.path}
              name={toilet.name}
              price={toilet.price}
              rating={toilet.rating}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toilets;

function Toilet({ handleClick, keys, path, name, price, rating }) {
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
