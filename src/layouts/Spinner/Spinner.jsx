import { motion } from "framer-motion";
import "./Spinner.scss";

const Spinner = ({ className = "" }) => {
	return (
		<motion.div
			initial={{ rotate: "0deg" }}
			animate={{ rotate: "360deg" }}
			transition={{ delay: -1, duration: 1, repeat: Infinity, ease: "linear" }}
			className={`spinner ${className}`}
		></motion.div>
	);
};

export default Spinner;
