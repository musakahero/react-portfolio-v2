import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { appearUp } from '../../utils/animations';

export const Footer = ({darkmode, setDarkmode}) => {

    return (
        <motion.div className={styles["footer-container"]}
        variants={appearUp}
        initial="hidden"
        animate="visible"
        >
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
        </motion.div>
    )
}