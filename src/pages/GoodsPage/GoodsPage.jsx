import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee, selectAll } from "../../store/coffee/coffeeSlice";

import CoffeeList from "../../components/CoffeeList/CoffeeList";
import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";

import "./GoodsPage.scss";
import { Helmet } from "react-helmet";

const GoodsPage = () => {
    const dispatch = useDispatch();
    const coffee = useSelector(state => selectAll(state));

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content="Our goods list page" />
                <title>For your pleasure</title>
            </Helmet>

            <Header clazz={"goods-header"} title={"For your pleasure"} />

            <About title="About our goods" img="coffee-cup" />

            <section className="products">
                <div className="container products__container">
                    <CoffeeList data={coffee} />
                </div>
            </section>
        </Fragment>
    );
};

export default GoodsPage;
