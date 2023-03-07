import Nav from "../../components/Nav/Nav";
import Divider from "../Divider/Divider";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <Nav color="black" />
                <Divider />
            </div>
        </footer>
    );
};

export default Footer;
