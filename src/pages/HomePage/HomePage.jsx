import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAll, fetchCoffee } from "../../store/coffee/coffeeSlice";

import Nav from "../../components/Nav/Nav";
import Divider from "../../layouts/Divider/Divider";
import CoffeeList from "../../components/CoffeeList/CoffeeList";

import "./HomePage.scss";

const HomePage = () => {
    const coffee = useSelector(state => selectAll(state)).filter(item => item.best === "true");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    return (
        <Fragment>
            <header className="home-header">
                <Nav />
                <div className="container home-header__container">
                    <h1 className="home-header__title">Everything You Love About Coffee</h1>
                    <Divider color="white" />
                    <h2 className="home-header__subtitle">We makes every day full of energy and taste</h2>
                    <h2 className="home-header__subtitle">Want to try our beans?</h2>
                    <a href="#" className="home-header__button">
                        More
                    </a>
                </div>
            </header>
            <section className="home-about">
                <div className="container home-about__container">
                    <h2 className="title home-about__title">About Us</h2>
                    <Divider />
                    <p className="description home-about__description">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at
                        highly months do things on at. Situation recommend objection do intention so questions. As
                        greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children
                        me laughing we prospect answered followed. At it went is song that held help face.
                    </p>
                    <p className="description home-about__description">
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw.
                        Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end
                        marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope.
                        Secure active living depend son repair day ladies now.
                    </p>
                </div>
            </section>
            <section className="our-best">
                <div className="container our-best__container">
                    <h2 className="title our-best__title">Our best</h2>
                    <CoffeeList data={coffee} />
                </div>
            </section>
        </Fragment>
    );
};

export default HomePage;
