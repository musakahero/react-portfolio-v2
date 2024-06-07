import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid, faSun as faSunSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Footer = () => {
    // Darkmode state
    const [darkmode, setDarkmode] = useState(false);

    return (
        <div className={styles["footer-container"]}>
            <ul className={styles["socials-container"]}>
                <li className={styles["linkedin"]}>
                    <Link to={"https://linkedin.com/in/teoruschev"} target='_blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                </li>
                <li className={styles["github"]}>
                    <Link to={"https://github.com/musakahero"} target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </li>
                <li className={styles["gmail"]}>
                    <Link to={"https://mail.google.com/mail/?view=cm&to=teo.ruschev@gmail.com"} target='_blank'>
                        <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                </li>
            </ul>
            <button
                className={styles['darkmode-btn']}
                type="button"
                onClick={() => setDarkmode(!darkmode)}>
                <Link><FontAwesomeIcon icon={darkmode ? faSun : faMoonSolid} /></Link>
                <span className={styles["tooltiptext"]}>
                    {!darkmode ? "Go dark" : "Go light"}
                </span>
            </button>
        </div>
    )
}