import CoffeeItem from "../CoffeeItem/CoffeeItem";

import "./CoffeeList.scss";

const CoffeeList = () => {
    return (
        <ul className="coffee-list">
            <CoffeeItem />
            <CoffeeItem />
            <CoffeeItem />
            <CoffeeItem />
            <CoffeeItem />
            <CoffeeItem />
        </ul>
    );
};

export default CoffeeList;
