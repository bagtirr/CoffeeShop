import { Fragment } from "react";

import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import CoffeePage from "../../pages/CoffeePage/CoffeePage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import GoodsPage from "../../pages/GoodsPage/GoodsPage";

import "./App.scss";

function App() {
    return (
        <Fragment>
            <Header />
            {/* <CoffeePage /> */}
            {/* <HomePage /> */}
            {/* <ProductPage /> */}
            <GoodsPage />
            <Footer />
        </Fragment>
    );
}

export default App;
