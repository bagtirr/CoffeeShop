import { Fragment } from "react";

import Nav from "../../components/App/Nav/Nav";
import Divider from "../../layouts/Divider/Divider";

import "./HomePage.scss";

const HomePage = () => {
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
            <section className="home-about"></section>
        </Fragment>
    );
};

export default HomePage;
