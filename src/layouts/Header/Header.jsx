import Nav from "../../components/Nav/Nav";

import "./Header.scss";

const Header = props => {
    const { title } = props;
    return (
        <header className="header">
            <Nav />
            <div className="container header__container">
                <h1 className=" header__title">{title}</h1>
            </div>
        </header>
    );
};

export default Header;
