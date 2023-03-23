import Nav from "../../components/Nav/Nav";

import "./Header.scss";

const Header = props => {
	const { title, clazz } = props;

	return (
		<header className={`header ${clazz}`}>
			<Nav />
			<div className="container header__container">
				<h1 className="header__title title ">{title}</h1>
			</div>
		</header>
	);
};

export default Header;
