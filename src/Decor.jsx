import Curtains from "./decor/Curtains";
import Cushions from "./decor/Cushions";
import Rugs from "./decor/Rugs";
import Vases from "./decor/Vases";
import Wallarts from "./decor/Wallarts";
import "./Furniture.css";

function Decor({ handleClick, selectedItems }) {
  return (
    <div className="furniture_flex">
      <div>
        <p className="furniture_p">Rugs and Carpets</p>
        <Rugs handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Curtains and Blinds</p>
        <Curtains handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Wall arts and mirrors</p>
        <Wallarts handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Cushions and Throws</p>
        <Cushions handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Vases and Plant Pots</p>
        <Vases handleClick={handleClick} selectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default Decor;
