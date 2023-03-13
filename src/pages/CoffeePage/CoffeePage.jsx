import { Fragment } from "react";
import About from "../../layouts/About/About";

import "./CoffeePage.scss";

const CoffeePage = () => {
    const title = "About our beans",
        img = "drink-coffee";

    return (
        <Fragment>
            <About title={title} img={img} />
        </Fragment>
    );
};

export default CoffeePage;
