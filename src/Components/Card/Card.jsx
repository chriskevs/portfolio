import React from 'react'
import styles from './Card.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Card({ image, video, title, body, github, demo, skills }) {    
    return (
        <div className={styles.card_container}>
            <div className={ styles.card_thumbnail }>
                {/* <img src={image} alt=''/> */}
                <video key={video} src={video} autoPlay={true} type="video/mp4" muted poster={image} loop controls={false} />
            </div>

            <div className={styles.card_content}>
                <div className={ styles.card_title } >
                    <h2>{title}</h2>
                </div>
                
                <div className={ styles.card_body }>
                    <p>{body}</p>
                </div>

                <div className={ styles.card_links }>
                    <a href={github} target="_blank" className={ styles.icon }>
                        <GitHubIcon />
                    </a>
                    <a href={demo} target="_blank" className={ styles.icon }>
                        <OpenInNewIcon />
                    </a>
                </div>

                <div className={styles.card_skills}>
                    {
                        skills.map(skill => {
                            return <div> {skill} </div>;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;