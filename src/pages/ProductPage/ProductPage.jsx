import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/coffee/coffeeSlice";

import Spinner from "../../layouts/Spinner/Spinner";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";
import Divider from "../../layouts/Divider/Divider";

import "./ProductPage.scss";

const ProductPage = () => {
    const dispatch = useDispatch();

    const { productLoadingStatus } = useSelector(state => state.coffee);
    const { name, country, price } = useSelector(state => state.coffee.productData);

    useEffect(() => {
        dispatch(fetchSingleProduct("2"));
    }, []);

    const renderElements = () => {
        return (
            <Fragment>
                <img src={require("../../assets/products/aromistico-big.png")} alt={name} className="product__image" />
                <div className="product__about">
                    <h2 className="title product__about-title">About it</h2>
                    <Divider />
                    <p className="description product__description">
                        <span>{name}</span>
                    </p>
                    <p className="description product__description">
                        <span>Country:</span> {country}
                    </p>
                    <p className="description product__description">
                        <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="product__price">
                        <span>Price:</span> {price}$
                    </p>
                </div>
            </Fragment>
        );
    };

    const elements = renderElements();

    return (
        <section className="product">
            <div className="container product__container">
                {productLoadingStatus === "loading" ? <Spinner /> : ""}
                {productLoadingStatus === "error" ? <ErrorMessage /> : ""}
                {productLoadingStatus === "idle" ? elements : ""}
            </div>
        </section>
    );
};

export default ProductPage;
