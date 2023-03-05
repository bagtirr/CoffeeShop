import { BlackLogo, WhiteLogo } from "../../../assets";

import "./Nav.scss";

const Nav = props => {
    const { color } = props;

    const logo = color === "black" ? BlackLogo : WhiteLogo;

    return (
        <nav className="nav">
            <a href="#" className="nav__logo-link">
                <img src={logo} alt="coffee beans" className="nav__logo-img" />
            </a>
            <div className="nav__list">
                <a href="#" className="nav__item">
                    Coffee house
                </a>
                <a href="#" className="nav__item">
                    Our coffee
                </a>
                <a href="#" className="nav__item">
                    For your pleasure
                </a>
            </div>
        </nav>
    );
};

export default Nav;
