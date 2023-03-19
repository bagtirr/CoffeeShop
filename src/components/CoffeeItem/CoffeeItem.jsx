import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import "./CoffeeItem.scss";

const CoffeeItem = props => {
    const { id, name, country, price, img } = props;
    return (
        <motion.li
            layout
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ delay: id * 0.03 }}
            className="coffee-item"
        >
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
        </motion.li>
    );
};

export default CoffeeItem;
