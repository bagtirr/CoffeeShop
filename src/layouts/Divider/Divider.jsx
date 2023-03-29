import { WhiteBeans, BlackBeans } from "../../assets";

import "./Divider.scss";

const Divider = props => {
	const { color } = props;

	const beans = color === "white" ? WhiteBeans : BlackBeans;

	return (
		<div className="divider">
			<img src={beans} alt="coffee beans" className="divider__img" />
		</div>
	);
};

export default Divider;
