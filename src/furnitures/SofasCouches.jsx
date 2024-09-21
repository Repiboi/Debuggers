import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function SofasCouches({ handleClick }) {
  return (
    <div className="grid">
      {Data.furnitures.sofas.map((sofa) => (
        <SofaCouch
          keys={sofa.id}
          path={sofa.path}
          name={sofa.name}
          price={sofa.price}
          rating={sofa.rating}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default SofasCouches;

function SofaCouch({ handleClick, keys, path, name, price, rating }) {
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
