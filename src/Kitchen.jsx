import "./Furniture.css";
import Backsplashes from "./kitchen/Backsplashes";
import Cabinents from "./kitchen/Cabinents";
import CounterTops from "./kitchen/CounterTops";
import KitchenIland from "./kitchen/KitchenIland";
import Sinks from "./kitchen/Sinks";

function Furniture({ handleClick, selectedItems }) {
  return (
    <div className="furniture_flex">
      <div>
        <p className="furniture_p">Cabinets and Pantries</p>
        <Cabinents handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Counter tops</p>
        <CounterTops handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Sinks and Faucets</p>
        <Sinks handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Kitchen Ilands and Carts</p>
        <KitchenIland handleClick={handleClick} selectedItems={selectedItems} />
      </div>
      <div>
        <p className="furniture_p">Backsplashes</p>
        <Backsplashes handleClick={handleClick} selectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default Furniture;
