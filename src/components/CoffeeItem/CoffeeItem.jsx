import { Solimo } from "../../assets";
import "./CoffeeItem.scss";

const CoffeeItem = () => {
    return (
        <li className="coffee-item">
            <img src={Solimo} alt="coffee" className="coffee-item__img" />
            <p className="coffee-item__title">Solimo Coffee Beans 2 kg</p>
            <p className="coffee-item__price">10.73$</p>
        </li>
    );
};

export default CoffeeItem;
