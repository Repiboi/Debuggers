import React, { useState } from "react";
import "./Products.css";
import Furniture from "./Furniture";
import Kitchen from "./Kitchen";
import SearchData from "./SearchData.json";
import SearchBar from "./SearchBar";
import Lighting from "./Lighting";
import Decor from "./Decor";
import Bathroom from "./Bathroom";    
import Navbar from "./Navbar";
import Footer from "./footer";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displaySearch, setDisplaySearch] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const filteredProducts = SearchData.furnitures.filter((search) => {
    return search.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleClick = (itemData) => {
    setSelectedItems((prevItems) => {
      console.log(prevItems);
      if (prevItems.some((data) => data.keys === itemData.keys)) {
        return [...prevItems];
      }
      return [...prevItems, itemData];
    });
  };

  const handleRemove = (list) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.keys !== list.keys)
    );
  };

  const [activeContent, setActiveContent] = useState('home'); // Track the active content

  // Function to render the active component
  const renderContent = () => {
    switch (activeContent) {
      case 'furniture':
        return <Furniture selectedItems={selectedItems} handleClick={handleClick} />; 
      case 'kitchen':
        return <Kitchen selectedItems={selectedItems} handleClick={handleClick} />;
      case 'lighting':
        return <Lighting selectedItems={selectedItems} handleClick={handleClick} />;
      case 'decor':
        return <Decor selectedItems={selectedItems} handleClick={handleClick} />;
      case 'bathroom':
        return <Bathroom selectedItems={selectedItems}handleClick={handleClick} />;
      case 'wishlist':
        return <Wishlist selectedItems={selectedItems} handleRemove={handleRemove} />;
      default:
        return <Furniture selectedItems={selectedItems} handleRemove={handleRemove}/>;
    }
  };

  return (
  <div>
    <Navbar />
     <div className="product_body">
      <div className="product_search_div">
        <h2 className="products_h2">Products we offer</h2>
        <SearchBar
          onSearch={setSearchTerm}
          onCancel={() => setDisplaySearch(false)}
          displaySearch={displaySearch}
          setDisplaySearch={setDisplaySearch}
        />
      </div>

      <div className="products_grid">
        <div className="products_div_nav">
          <nav className="products_nav">
            <ul className="nav_list">
              <li className="nav_li">
               
                <button onClick={() => setActiveContent('furniture')} className="nav_link" >
                Furniture
                </button>
              </li>
              <li  className="nav_li">
              <button onClick={() => setActiveContent('kitchen')} className="nav_link" >
                Kitchen
                </button>
              </li>
              <li className="nav_li">
              <button onClick={() => setActiveContent('lighting')} className="nav_link" >
                Lighting
                </button>
              </li>
              <li className="nav_li">
              <button onClick={() => setActiveContent('decor')} className="nav_link" >
                Decor
                </button>
              </li>
              <li className="nav_li">
              <button onClick={() => setActiveContent('bathroom')} className="nav_link" >
                Bathroom
                </button>
              </li>
              <li className="nav_li">
              <button onClick={() => setActiveContent('wishlist')} className="nav_link" >
               <div className="wishlist_div">
                 Wishlist <p className="wishlist_count">{selectedItems.length}</p>
                </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {!displaySearch ? (
        renderContent()
        ) : (
          <div>
            <div className="search_grid">
              {filteredProducts.map((filter) => (
                <div className="sofa_div">
                  <img className="sofa_img" src={filter.path} alt="A Sofa" />
                  <div className="text">
                    <p className="sofa_name">{filter.name}</p>
                    <p className="sofa_price">${filter.price}</p>
                    <p className="sofa_rating">*{filter.rating}</p>
                    <button
                      className="wishlist_btn"
                      onClick={() => handleClick(filter)}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
  </div>
  );
}

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

export default Products;
