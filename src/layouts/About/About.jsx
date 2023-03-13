import Divider from "../Divider/Divider";

import "./About.scss";

const About = props => {
    const { title, img } = props;
    return (
        <section className="about">
            <div className="container about__container">
                <img src={require(`../../assets/abouts/${img}.png`)} alt="cup of coffee" className="about__image" />
                <div className="about__text-content">
                    <h2 className="about__title">{title}</h2>
                    <Divider />
                    <p className="about__description">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    </p>
                    <p className="about__description">
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        <br />
                        so questions.
                    </p>
                    <p className="about__description">
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        <br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        <br />
                        is song that held help face.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
