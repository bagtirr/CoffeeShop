import { NavLink } from "react-router-dom";

import { BlackLogo, WhiteLogo } from "../../assets";
import "./Nav.scss";

const Nav = props => {
    const { color } = props;

    const logo = color === "black" ? BlackLogo : WhiteLogo;

    return (
        <nav className="nav">
            <NavLink to="/" className="nav__logo-link">
                <img src={logo} alt="coffee beans" className="nav__logo-img" />
            </NavLink>
            <div className="nav__list">
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav__item nav__item_active" : "nav__item")}>
                    Coffee house
                </NavLink>
                <NavLink
                    to="/coffee"
                    className={({ isActive }) => (isActive ? "nav__item nav__item_active" : "nav__item")}
                >
                    Our coffee
                </NavLink>
                <NavLink
                    to="/our-goods"
                    className={({ isActive }) => (isActive ? "nav__item nav__item_active" : "nav__item")}
                >
                    For your pleasure
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
