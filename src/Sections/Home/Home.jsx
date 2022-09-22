import styles from "./Home.module.css";
import Typewriter from 'typewriter-effect'

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<div className={styles.home_text}>
				<Typewriter
					options={{
						strings: '<span style="color: var(--lightest-slate);">hi, I\'m</span> Christian<span style="color: var(--lightest-slate);">.</span> <br/> <span style="color: var(--slate); font-size:59px;"> I build things sometimes.</span>',
						autoStart: true,
						cursor: '_'
					}}
				/>
			</div>
		</section>
	);
}

export default Home;