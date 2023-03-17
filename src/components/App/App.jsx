import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "../../layouts/Footer/Footer";
import Loading from "../../layouts/Loading/Loading";

import "./App.scss";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CoffeePage = lazy(() => import("../../pages/CoffeePage/CoffeePage"));
const ProductPage = lazy(() => import("../../pages/ProductPage/ProductPage"));
const GoodsPage = lazy(() => import("../../pages/GoodsPage/GoodsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/coffee" element={<CoffeePage />} />
                    <Route path="/coffee/:id" element={<ProductPage />} />
                    <Route path="/our-goods" element={<GoodsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
            <Footer />
        </Fragment>
    );
}

export default App;
