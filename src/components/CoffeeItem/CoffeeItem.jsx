import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./CoffeeItem.scss";

const cardAnimation = delay => {
	return {
		hidden: { opacity: 0, x: -100 },
		visable: { opacity: 1, x: 0, transition: { delay: delay * 0.03 } },
		exit: { opacity: 0, x: -100, transition: { duration: 0.3 } },
	};
};

const CoffeeItem = props => {
	const { id, name, country, price, img } = props;

	return (
		<motion.li
			layout
			initial="hidden"
			animate="visable"
			exit="exit"
			variants={cardAnimation(id)}
			className="coffee-item">
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
