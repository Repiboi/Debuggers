import Bathroomsink from "./bathroom/Bathroomsink";
import Mirrors from "./bathroom/Mirrors";
import Showers from "./bathroom/Showers";
import Toilets from "./bathroom/Toilets";
import Vanities from "./bathroom/Vanities";
import "./Furniture.css";

function Bathroom({ handleClick, selectedItems }) {
  return (
    <div className="furniture_flex">
      <div>
        <p className="furniture_p">Vanities and Cabinets</p>
        <Vanities handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Showers and Bathtubs</p>
        <Showers handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Toilets and Bidets</p>
        <Toilets handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Bathroom Sinks</p>
        <Bathroomsink handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Mirrors and Medicine Cabinets</p>
        <Mirrors handleClick={handleClick} selectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default Bathroom;
