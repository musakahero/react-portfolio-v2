import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {

    return (
        <div className={styles["nav-container"]}>
            <div className={styles["logo-container"]}>
                <Link className={"logo-url"} to={"/"}>ruschev.dev_</Link>
            </div>
            <ul className={styles["nav-ul"]}>
                <li className={styles["nav-item"]}><Link>Blog</Link></li>
                <li className={styles["nav-item"]}><Link>Projects</Link></li>
                <li className={styles["nav-item"]}><Link>Contact me</Link></li>
            </ul>
        </div>
    );
}