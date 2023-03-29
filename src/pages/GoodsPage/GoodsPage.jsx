import { Helmet } from "react-helmet";
// Components
import CoffeeList from "../../components/CoffeeList/CoffeeList";
import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";

const GoodsPage = () => {
	return (
		<>
			<Helmet>
				<meta name="description" content="Our goods list page" />
				<title>For your pleasure</title>
			</Helmet>
			<Header clazz={"goods-header"} title={"For your pleasure"} />
			<About title="About our goods" img="coffee-cup" />
			<section className="products">
				<div className="container products__container">
					<CoffeeList all={true} />
				</div>
			</section>
		</>
	);
};

export default GoodsPage;
