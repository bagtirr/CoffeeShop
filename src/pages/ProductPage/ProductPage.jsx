import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/coffee/coffeeSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
// Components
import Spinner from "../../layouts/Spinner/Spinner";
import Divider from "../../layouts/Divider/Divider";
import Header from "../../layouts/Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
// Styles
import { imageAnimation, textAnimation, titleAnimation } from "../../animations";
import "./ProductPage.scss";

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
                <motion.img
                    variants={imageAnimation}
                    src={`${process.env.PUBLIC_URL}/images/products/${img}-big.png`}
                    alt={name}
                    className="product__image"
                />
                <div className="product__about">
                    <motion.h2 variants={titleAnimation()} className="title product__about-title">
                        About it
                    </motion.h2>
                    <Divider />
                    <motion.p variants={textAnimation("", "", 1.2, 1)} className="description product__description">
                        <span>{name}</span>
                    </motion.p>
                    <motion.p variants={textAnimation("", "", 1.4, 1)} className="description product__description">
                        <span>Country:</span> {country}
                    </motion.p>
                    <motion.p variants={textAnimation("", "", 1.6, 1)} className="description product__description">
                        <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </motion.p>
                    <motion.p variants={textAnimation("up", "spring", 1.8, 1)} className="product__price">
                        <span>Price:</span> {price}$
                    </motion.p>
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

            <motion.section initial="hidden" animate="visable" className="product">
                <div className="container product__container">
                    {productLoadingStatus === "loading" ? <Spinner /> : ""}
                    {productLoadingStatus === "idle" ? elements : ""}
                </div>
            </motion.section>
        </Fragment>
    );
};

export default ProductPage;
