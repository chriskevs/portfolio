import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./ContactBar.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/chriskevs/" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/chriskevs" target="_blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="mailto:chriskevin.ten@gmail.com" className={styles.icon}>
					<MailOutlineIcon />
				</a>
				<div className={styles.vertical_space}></div>
            </div>
		</div>
	);
}

export default ContactBar;