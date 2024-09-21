import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Rugs({ handleClick }) {
  return (
    <div>
      <div>
        <div className="grid">
          {Data.decor.rugs.map((rug) => (
            <Rug
              keys={rug.id}
              path={rug.path}
              name={rug.name}
              price={rug.price}
              rating={rug.rating}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rugs;

function Rug({ handleClick, keys, path, name, price, rating }) {
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
