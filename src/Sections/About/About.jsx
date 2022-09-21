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
                        Hello, my name is Christian Gonzalez and I am currently an undergraduate student at the <a href="https://ucsd.edu/about/index.html" target="_blank">University of California, San Diego</a>. 
                        I am pursuing a degree in Computer Science and a minor in Mathematics. I find myself to be interested in a lot of things but as of recently, I've been mainly focusing on artificial intelligence and full-stack development. Outside of school, I enjoy watching movies & shows, trying out new food, spending time with family & friends, and playing videogames.
                    </p>
                    <br/>
                    <p className={styles.desc}>
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