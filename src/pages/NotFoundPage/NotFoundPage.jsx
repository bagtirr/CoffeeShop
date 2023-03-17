import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="404 Page Not Found" />
                <title>404 Not Found</title>
            </Helmet>
            <section className="not-found">
                <ErrorMessage message="Page not found" />
                <Link to="/" className="back-button">
                    Back to Home Page
                </Link>
            </section>
        </>
    );
};

export default NotFoundPage;
