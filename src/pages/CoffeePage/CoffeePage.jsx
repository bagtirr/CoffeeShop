import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAll, fetchCoffee } from "../../store/coffee/coffeeSlice";
import { createSelector } from "@reduxjs/toolkit";

import About from "../../layouts/About/About";
import CoffeeList from "../../components/CoffeeList/CoffeeList";
import CoffeeFilters from "../../components/CoffeeFilters/CoffeeFilters";

import "./CoffeePage.scss";

const CoffeePage = () => {
    const title = "About our beans",
        img = "drink-coffee";

    const filteredCoffeeSelector = createSelector(
        state => state.filters.activeFilter,
        selectAll,
        (filter, coffee) => {
            if (filter === "all") {
                return coffee;
            }

            return coffee.filter(item => item.country === filter);
        }
    );

    const filteredCoffee = useSelector(filteredCoffeeSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    return (
        <Fragment>
            <About title={title} img={img} />
            <section className="products">
                <div className="container products__container">
                    <CoffeeFilters />
                    <CoffeeList data={filteredCoffee} />
                </div>
            </section>
        </Fragment>
    );
};

export default CoffeePage;
