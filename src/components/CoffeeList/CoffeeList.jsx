import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CoffeeItem from "../CoffeeItem/CoffeeItem";
import Spinner from "../../layouts/Spinner/Spinner";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";

import { fetchCoffee, selectAll } from "../../store/coffee/coffeeSlice";

import "./CoffeeList.scss";

const CoffeeList = props => {
    const { bestCoffee } = props;
    const coffee = useSelector(state => selectAll(state));
    const { coffeeLoadingStatus } = useSelector(state => state.coffee);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    if (coffeeLoadingStatus === "loading") {
        return <Spinner />;
    } else if (coffeeLoadingStatus === "error") {
        return <ErrorMessage />;
    }

    const renderCoffee = items => {
        if (items.length === 0) {
            return <p className="error">Products not found</p>;
        }
        if (bestCoffee) {
            items = items.filter(item => item.best === "true");
        }

        return items.map(({ id, best, ...props }) => {
            return <CoffeeItem key={id} {...props} />;
        });
    };

    const elements = renderCoffee(coffee);

    return <ul className="coffee-list">{elements}</ul>;
};

export default CoffeeList;
