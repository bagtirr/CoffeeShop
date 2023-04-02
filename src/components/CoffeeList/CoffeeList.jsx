import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetAllCoffeeQuery } from "../../api/coffeeApi";

import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";
import Spinner from "../../layouts/Spinner/Spinner";
import sortProducts from "../../utils/sortProducts";
import CoffeeItem from "../CoffeeItem/CoffeeItem";

import "./CoffeeList.scss";

const CoffeeList = props => {
	const { data: coffee = [], isLoading, isError } = useGetAllCoffeeQuery();
	const { activeFilter, searchValue } = useSelector(state => state.filters);
	const { best, all } = props;

	const filteredCoffee = useMemo(() => {
		return sortProducts(coffee, best, activeFilter, searchValue);
	}, [activeFilter, searchValue, coffee]);

	const renderCoffee = items => {
		if (!items.length) {
			return (
				<motion.p
					layout
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.01 }}
					className="error">
					Products not found
				</motion.p>
			);
		}

		return items.map(({ id, ...props }) => {
			return <CoffeeItem key={id} id={id} {...props} />;
		});
	};

	if (isLoading) {
		return <Spinner />;
	} else if (isError) {
		return <ErrorMessage message={"Failed to load products :("} />;
	}

	const elements = renderCoffee(all ? coffee : filteredCoffee);

	return (
		<LayoutGroup>
			<motion.ul layout className="coffee-list">
				<AnimatePresence mode="async">{elements}</AnimatePresence>
			</motion.ul>
		</LayoutGroup>
	);
};

export default CoffeeList;
