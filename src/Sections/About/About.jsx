import Heading from "../../Components/Heading/Heading";
import styles from "./About.module.css";

function About() {
    const skills = ['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'Python', 'Java', 'C++', 'C', 'Pandas', 'Numpy', 'Jupyter Notebook','HTML', 'CSS']
    return (
        <section id="about">
            <Heading index="01" heading="About me" />
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.desc}>
                        Hello! My name is Christian Gonzalez and I am currently an undergraduate student at <a href="https://ucsd.edu/about/index.html" target="_blank">University of California, San Diego</a>. 
                        I am majoring in Computer Science and minoring in Mathematics.
                    </p>
                    <br/>
                    <p className={styles.desc}>
                        My interest in Computer Science and Math began during my freshman year of college. Prior to college, I had no coding experience and barely had any interest in math.
                        <br/><br/>
                        Here are the technologies I have worked with:
                    </p>
                    <br/>

                    <ul className={styles.skill_point}>
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </div>
{/* add image later
                <div className={styles.right}>
                    <img
                        src="./images/profile.jpg"
                        alt="profile"
                        className={styles.profile_img}
                    />
                    <div className={styles.img_border}></div>
                </div> */}
            </div>
        </section>
    );
}

export default About;