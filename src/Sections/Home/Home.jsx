import styles from "./Home.module.css";
import Typewriter from 'typewriter-effect'

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<div className={styles.home_text}>
				<Typewriter
					options={{
						strings: '<span style="color: var(--lightest-slate);">Hi, I\'m</span> Christian<span style="color: var(--lightest-slate);">.</span> <br/> <span style="color: var(--slate); font-size:59px;"> An aspiring software engineer.</span>',
						autoStart: true,
						cursor: '_'
					}}
				/>
			</div>
		</section>
	);
}

export default Home;

// import styles from "./styles.module.css";

// function Home() {
// 	return (
// 		<section className={styles.home_section} id="home">
// 			<p className={styles.greet}>Hi, my name is</p>
// 			<h1 className={styles.heading_1}>Christian.</h1>
// 			<h1 className={styles.heading_2}>I like coding.</h1>
// 			<p className={styles.desc}>
// 				Lorem Ipsum is simply dummy text of the printing and typesetting
// 				industry. Lorem Ipsum has been the industry's standard dummy text ever
// 				since the 1500s, when an unknown printer took a galley of type and
// 				scrambled it to make a type specimen book.
// 			</p>
// 			<a href="#work">
// 				<button className={styles.btn}>Take a look at my work !</button>
// 			</a>
// 		</section>
// 	);
// }

// export default Home;