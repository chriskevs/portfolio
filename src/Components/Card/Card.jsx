import React from 'react'
import styles from './Card.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Card({ image, title, body, github, demo, skills }) {    
    return (
        <div className={styles.card_container}>
            <div className={ styles.card_thumbnail }>
                <img src={image} alt='' />
            </div>

            <div className={styles.card_content}>
                <div className={ styles.card_title } >
                    <h2>{title}</h2>
                </div>
                
                <div className={ styles.card_body }>
                    <p>{body}</p>
                </div>

                <div className={ styles.card_links }>
                    {/* create two anchor tags and align them horizontally OR copy the left part of website with icons */}
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