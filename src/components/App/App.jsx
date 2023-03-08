import HomePage from "../../pages/HomePage/HomePage";
import Footer from "../../layouts/Footer/Footer";
import "./App.scss";
import { Fragment } from "react";

function App() {
    return (
        <Fragment>
            <HomePage />
            <Footer />
        </Fragment>
    );
}

export default App;
