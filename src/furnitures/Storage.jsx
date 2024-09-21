import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Storage({ handleClick }) {
  return (
    <div className="grid">
      {Data.furnitures.storage.map((storage) => (
        <Storages
          keys={storage.id}
          path={storage.path}
          name={storage.name}
          price={storage.price}
          rating={storage.rating}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Storage;

function Storages({ handleClick, keys, path, name, price, rating }) {
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
