import SofasCouches from "./furnitures/SofasCouches";
import "./Furniture.css";
import ChairsRecliners from "./furnitures/ChairsRecliners";
import Tables from "./furnitures/Tables";
import BedsMattresses from "./furnitures/BedsMattresses";
import Storage from "./furnitures/Storage";

function Furniture({ handleClick, selectedItems }) {
  return (
    <div className="furniture_flex">
      <div>
        <p className="furniture_p">Sofas and Couches</p>
        <SofasCouches handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Chairs and Recliners</p>
        <ChairsRecliners
          handleClick={handleClick}
          selectedItems={selectedItems}
        />
      </div>
      <div>
        <p className="furniture_p">Tables</p>
        <Tables handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Beds and Mattresses</p>
        <BedsMattresses
          handleClick={handleClick}
          selectedItems={selectedItems}
        />
      </div>
      <div>
        <p className="furniture_p">Storage</p>
        <Storage handleClick={handleClick} selectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default Furniture;
