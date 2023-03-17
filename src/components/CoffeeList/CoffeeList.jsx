import { useSelector } from "react-redux";

import CoffeeItem from "../CoffeeItem/CoffeeItem";
import Spinner from "../../layouts/Spinner/Spinner";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";

import "./CoffeeList.scss";

const CoffeeList = props => {
    const { data } = props;

    const { coffeeLoadingStatus } = useSelector(state => state.coffee);

    if (coffeeLoadingStatus === "loading") {
        return <Spinner />;
    } else if (coffeeLoadingStatus === "error") {
        return <ErrorMessage message={"Failed to load products :("} />;
    }

    const renderCoffee = items => {
        if (items.length === 0) {
            return <p className="error">Products not found</p>;
        }

        return items.map(({ id, ...props }) => {
            return <CoffeeItem key={id} id={id} {...props} />;
        });
    };

    const elements = renderCoffee(data);

    return <ul className="coffee-list">{elements}</ul>;
};

export default CoffeeList;
