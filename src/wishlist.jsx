function Wishlist({ handleRemove, selectedItems }) {
  return (
    <div className="search_grid">
      {selectedItems.map((list) => (
        <div className="sofa_div">
          <img className="sofa_img" src={list.path} alt="A Sofa" />
          <div className="text">
            <p className="sofa_name">{list.name}</p>
            <p className="sofa_price">${list.price}</p>
            <p className="sofa_rating">*{list.rating}</p>
            <button
              className="remove_wishlist"
              onClick={() => handleRemove(list)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist
