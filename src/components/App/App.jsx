import { Fragment } from "react";

import Header from "../../layouts/Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import CoffeePage from "../../pages/CoffeePage/CoffeePage";
import Footer from "../../layouts/Footer/Footer";

import "./App.scss";

function App() {
    return (
        <Fragment>
            <Header />
            <CoffeePage />
            {/* <HomePage /> */}
            <Footer />
        </Fragment>
    );
}

export default App;
