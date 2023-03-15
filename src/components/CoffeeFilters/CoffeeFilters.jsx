import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll, fetchFilters, changeActiveFilter } from "../../store/filters/filtersSlice";
import Spinner from "../../layouts/Spinner/Spinner";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";

import "./CoffeeFilters.scss";

const CoffeeFilters = () => {
    const dispatch = useDispatch();
    const { filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);
    const filters = useSelector(state => selectAll(state));

    useEffect(() => {
        dispatch(fetchFilters());
    }, []);

    const renderFilters = items => {
        if (items.length === 0) {
            return <p className="error">Filters not found</p>;
        }

        return items.map(({ id, label }) => {
            const activeClass = label === activeFilter ? "filters__button_active" : "";

            return (
                <button
                    key={id}
                    className={`filters__button ${activeClass}`}
                    id="filters__button"
                    onClick={() => dispatch(changeActiveFilter(label))}
                >
                    {label}
                </button>
            );
        });
    };

    const elements = renderFilters(filters);

    return (
        <div className="filters">
            <div className="filters__search">
                <label htmlFor="filters__input">Lookiing for</label>
                <input type="text" className="filters__input" id="filters__input" placeholder="start typing here..." />
            </div>
            <div className="filters__list">
                <label htmlFor="filters__button">Or filter</label>
                {filtersLoadingStatus === "loading" ? <Spinner /> : ""}

                {filtersLoadingStatus === "error" ? <ErrorMessage /> : ""}

                {filtersLoadingStatus === "idle" ? elements : ""}
            </div>
        </div>
    );
};

export default CoffeeFilters;