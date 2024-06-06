import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMoon } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export const Footer = () => {

    return (
        <div className={styles["footer-container"]}>
            <ul className={styles["socials-container"]}>
                <li className={styles["gmail"]}>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </Link>
                </li>
                <li className={styles["github"]}>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </li>
                <li className={styles["linkedin"]}>
                    <Link to={"/"}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                </li>
            </ul>
            <button className={styles['darkmode-btn']} type="button">
                <Link><FontAwesomeIcon icon={faMoon} /></Link>
                <span className={styles["tooltiptext"]}>Go dark</span>
            </button>
        </div>
    )
}