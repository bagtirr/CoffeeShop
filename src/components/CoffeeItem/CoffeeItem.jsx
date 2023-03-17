import { Link } from "react-router-dom";
import "./CoffeeItem.scss";

const CoffeeItem = props => {
    const { id, name, country, price, img } = props;
    return (
        <li className="coffee-item">
            <Link className="coffee-item__link" to={`/coffee/${id}`}>
                <img
                    src={process.env.PUBLIC_URL + `/images/products/${img}.png`}
                    alt={name}
                    className="coffee-item__img"
                />
                <p className="coffee-item__title">{name}</p>
                <p className="coffee-item__country">{country}</p>
                <p className="coffee-item__price">{price}$</p>
            </Link>
        </li>
    );
};

export default CoffeeItem;
