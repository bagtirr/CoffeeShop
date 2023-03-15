import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoffeeList from "../../components/CoffeeList/CoffeeList";
import About from "../../layouts/About/About";
import { fetchCoffee, selectAll } from "../../store/coffee/coffeeSlice";

import "./GoodsPage.scss";

const GoodsPage = () => {
    const dispatch = useDispatch();
    const coffee = useSelector(state => selectAll(state));

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    return (
        <Fragment>
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
