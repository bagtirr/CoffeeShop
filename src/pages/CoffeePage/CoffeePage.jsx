import { Helmet } from "react-helmet";
// Components
import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";
import CoffeeList from "../../components/CoffeeList/CoffeeList";
import CoffeeFilters from "../../components/CoffeeFilters/CoffeeFilters";

const CoffeePage = () => {
	return (
		<>
			<Helmet>
				<meta name="description" content="our coffee list page" />
				<title>Our coffee</title>
			</Helmet>
			<Header clazz={"coffee-header"} title={"Our Coffee"} />
			<About title={"About our beans"} img={"drink-coffee"} />
			<section className="products">
				<div className="container products__container">
					<CoffeeFilters />
					<CoffeeList />
				</div>
			</section>
		</>
	);
};

export default CoffeePage;
