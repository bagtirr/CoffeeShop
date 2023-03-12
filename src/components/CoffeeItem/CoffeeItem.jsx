import "./CoffeeItem.scss";

const CoffeeItem = props => {
    const { name, country, price, img } = props;
    return (
        <li className="coffee-item">
            <img src={require(`../../assets/products/${img}.png`)} alt={name} className="coffee-item__img" />
            <p className="coffee-item__title">{name}</p>
            <p className="coffee-item__country">{country}</p>
            <p className="coffee-item__price">{price}$</p>
        </li>
    );
};

export default CoffeeItem;
