import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAll, fetchCoffee } from "../../store/coffee/coffeeSlice";
import { createSelector } from "@reduxjs/toolkit";

import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";
import CoffeeList from "../../components/CoffeeList/CoffeeList";
import CoffeeFilters from "../../components/CoffeeFilters/CoffeeFilters";

import "./CoffeePage.scss";
import { Helmet } from "react-helmet";

const CoffeePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    const countryValidation = (items, country) => {
        if (!country) {
            return items;
        }

        return items.filter(item => item.country === country);
    };

    const searchValidation = (items, searchText) => {
        searchText = searchText.toLowerCase().trim();

        if (!searchText) {
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

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content="our coffee list page" />
                <title>Our coffee</title>
            </Helmet>

            <Header clazz={"coffee-header"} title={"Our Coffee"} />

            <About title={"About our beans"} img={"drink-coffee"} />

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
