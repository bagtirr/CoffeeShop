import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
// Components
import Spinner from "../../layouts/Spinner/Spinner";
import Divider from "../../layouts/Divider/Divider";
import Header from "../../layouts/Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
// Styles
import { imageAnimation, textAnimation, titleAnimation } from "../../utils/motion";
import "./ProductPage.scss";
import { useGetSingleCoffeeQuery } from "../../api/coffeeApi";

// Layout for information about product
const ProductLayout = props => {
	const { coffee, onPreviousPage } = props;

	return (
		<>
			<button className="back-button" onClick={onPreviousPage}>
				back
			</button>
			<div className="product__image">
				<motion.img
					variants={imageAnimation}
					src={`${process.env.PUBLIC_URL}/images/products/${coffee.img}-big.png`}
					alt={coffee.name}
				/>
			</div>

			<div className="product__about">
				<motion.h2 variants={titleAnimation()} className="subtitle product__about-subtitle">
					About it
				</motion.h2>
				<Divider />
				<motion.p variants={textAnimation("", "", 1.2, 1)} className="description product__description">
					<span>{coffee.name}</span>
				</motion.p>
				<motion.p variants={textAnimation("", "", 1.4, 1)} className="description product__description">
					<span>Country:</span> {coffee.country}
				</motion.p>
				<motion.p variants={textAnimation("", "", 1.6, 1)} className="description product__description">
					<span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</motion.p>
				<motion.p variants={textAnimation("up", "spring", 1.8, 1)} className="product__price">
					<span>Price:</span> {coffee.price}$
				</motion.p>
			</div>
		</>
	);
};

const ProductPage = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	const { data: coffee = [], isLoading, isError, isSuccess } = useGetSingleCoffeeQuery(id);

	const onPreviousPage = () => {
		navigate(-1);
	};

	if (isError) {
		return <NotFoundPage />;
	}

	return (
		<>
			<Helmet>
				<meta name="description" content={`${coffee.name} - beans`} />
				<title>{`${coffee.name} - Coffee House`}</title>
			</Helmet>
			<Header clazz={"coffee-header"} title={"Our Coffee"} />
			<motion.section initial="hidden" animate="visable" className="product">
				<div className="container product__container">
					{isLoading ? <Spinner /> : ""}
					{isSuccess ? <ProductLayout coffee={coffee} onPreviousPage={onPreviousPage} /> : ""}
				</div>
			</motion.section>
		</>
	);
};

export default ProductPage;
