import "./Furniture.css";
import Ceiling from "./lighting/Ceiling";
import Floor from "./lighting/Floor";
import Outdoor from "./lighting/Outdoor";
import Tablelamps from "./lighting/Tablelamps";
import Wall from "./lighting/Wall";

function Lighting({ handleClick, selectedItems }) {
  return (
    <div className="furniture_flex">
      <div>
        <p className="furniture_p">Ceiling Lights</p>
        <Ceiling handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Wall Lights</p>
        <Wall handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Floor Lamps</p>
        <Floor handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Table Lamps</p>
        <Tablelamps handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Outdoor Lighting</p>
        <Outdoor handleClick={handleClick} selectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default Lighting;
