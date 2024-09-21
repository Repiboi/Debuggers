import ProductsData from "../ProductsData.json";
import "../Furniture.css";

const Data = ProductsData;

function Tables({ handleClick }) {
  return (
    <div className="grid">
      {Data.furnitures.tables.map((table) => (
        <Table
          keys={table.id}
          path={table.path}
          name={table.name}
          price={table.price}
          rating={table.rating}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Tables;

function Table({ handleClick, keys, path, name, price, rating }) {
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
