import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/coffee/coffeeSlice";
import { useNavigate, useParams } from "react-router-dom";
// Components
import Spinner from "../../layouts/Spinner/Spinner";
import Divider from "../../layouts/Divider/Divider";
import Header from "../../layouts/Header/Header";
// Styles
import "./ProductPage.scss";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Helmet } from "react-helmet";

const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { productLoadingStatus } = useSelector(state => state.coffee);
    const { name, country, price, img } = useSelector(state => state.coffee.productData);

    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, []);

    const onPreviousPage = () => {
        navigate(-1);
    };

    if (productLoadingStatus === "error") {
        return <NotFoundPage />;
    }

    const renderElements = () => {
        return (
            <Fragment>
                <button className="back-button" onClick={onPreviousPage}>
                    back
                </button>
                <img
                    src={`${process.env.PUBLIC_URL}/images/products/${img}-big.png`}
                    alt={name}
                    className="product__image"
                />
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
        <Fragment>
            <Helmet>
                <meta name="description" content={`${name} - beans`} />
                <title>{`${name} - Coffee House`}</title>
            </Helmet>

            <Header clazz={"coffee-header"} title={"Our Coffee"} />

            <section className="product">
                <div className="container product__container">
                    {productLoadingStatus === "loading" ? <Spinner /> : ""}
                    {productLoadingStatus === "idle" ? elements : ""}
                </div>
            </section>
        </Fragment>
    );
};

export default ProductPage;
