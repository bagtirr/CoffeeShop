import Divider from "../Divider/Divider";
import { motion } from "framer-motion";

import { textAnimation, titleAnimation, imageAnimation } from "../../utils/motion";
import "./About.scss";

const About = props => {
	const { title, img } = props;

	return (
		<motion.section initial="hidden" animate="visable" className="about">
			<div className="container about__container">
				<motion.img
					variants={imageAnimation}
					src={process.env.PUBLIC_URL + `/images/abouts/${img}.png`}
					alt="cup of coffee"
					className="about__image"
				/>

				<div className="about__text-content">
					<motion.h2 variants={titleAnimation()} className="subtitle about__subtitle">
						{title}
					</motion.h2>
					<Divider />
					<motion.p
						variants={textAnimation("left", "spring", 1, 1)}
						custom="1"
						className="description about__description"
					>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					</motion.p>
					<motion.p
						variants={textAnimation("left", "spring", 1.5, 1.3)}
						custom="2"
						className="description about__description"
					>
						Afraid at highly months do things on at. Situation recommend objection do intention
						<br />
						so questions.
					</motion.p>
					<motion.p
						variants={textAnimation("left", "spring", 2, 1.6)}
						custom="3"
						className="description about__description"
					>
						As greatly removed calling pleased improve an. Last ask him cold feel
						<br />
						met spot shy want. Children me laughing we prospect answered followed. At it went
						<br />
						is song that held help face.
					</motion.p>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
