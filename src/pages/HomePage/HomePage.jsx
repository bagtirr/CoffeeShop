import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAll, fetchCoffee } from "../../store/coffee/coffeeSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
//Components
import Nav from "../../components/Nav/Nav";
import Divider from "../../layouts/Divider/Divider";
import CoffeeList from "../../components/CoffeeList/CoffeeList";
// Styles
import { textAnimation, titleAnimation } from "../../animations";
import "./HomePage.scss";

const HomePage = () => {
    const coffee = useSelector(state => selectAll(state)).filter(item => item.best === "true");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
    }, []);

    return (
        <Fragment>
            <Helmet>
                <meta name="description" content='Coffee beans shop "Everything You Love About Coffee"' />
                <title>Coffee House</title>
            </Helmet>

            <motion.header initial="hidden" animate="visable" className="home-header">
                <Nav />
                <div className="container home-header__container">
                    <motion.h1 variants={titleAnimation(1)} className="home-header__title">
                        Everything You Love About Coffee
                    </motion.h1>
                    <Divider color="white" />
                    <motion.h2 variants={textAnimation("left", "spring", 2, 1.3)} className="home-header__subtitle">
                        We makes every day full of energy and taste
                    </motion.h2>
                    <motion.h2 variants={textAnimation("right", "spring", 2, 1.3)} className="home-header__subtitle">
                        Want to try our beans?
                    </motion.h2>
                    <Link to="/coffee" className="home-header__button">
                        More
                    </Link>
                </div>
            </motion.header>

            <motion.section initial="hidden" animate="visable" className="home-about">
                <div className="container home-about__container">
                    <motion.h2 variants={titleAnimation(2.3)} className="title home-about__title">
                        About Us
                    </motion.h2>
                    <Divider />
                    <motion.p
                        variants={textAnimation("up", "spring", 2.5, 1.3)}
                        className="description home-about__description"
                    >
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at
                        highly months do things on at. Situation recommend objection do intention so questions. As
                        greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children
                        me laughing we prospect answered followed. At it went is song that held help face.
                    </motion.p>
                    <motion.p
                        variants={textAnimation("up", "spring", 3.5, 1.3)}
                        className="description home-about__description"
                    >
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw.
                        Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end
                        marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope.
                        Secure active living depend son repair day ladies now.
                    </motion.p>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visable"
                viewport={{ amount: 0.4, once: true }}
                className="our-best"
            >
                <div className="container our-best__container">
                    <motion.h2 variants={titleAnimation()} className="title our-best__title">
                        Our best
                    </motion.h2>

                    <CoffeeList data={coffee} />
                </div>
            </motion.section>
        </Fragment>
    );
};

export default HomePage;
