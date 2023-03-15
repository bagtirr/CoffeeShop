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

    const countryValidation = (items, country) => {
        if (country === "all") {
            return items;
        }

        return items.filter(item => item.country === country);
    };

    const searchValidation = (items, searchText) => {
        searchText = searchText.toLowerCase().trim();

        if (searchText === "") {
            return items;
        }

        return items.filter(item => item.name.toLowerCase().includes(searchText));
    };

    const filteredCoffeeSelector = createSelector(
        state => state.filters.activeFilter,
        state => state.filters.searchValue,
        selectAll,
        (filter, searchValue, coffee) => {
            return countryValidation(searchValidation(coffee, searchValue), filter);
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
