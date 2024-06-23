import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { appearDown } from '../../utils/animations';
import { motion } from 'framer-motion';

export const Navigation = () => {

    return (
        <motion.div className={styles["nav-container"]}
            variants={appearDown}
            initial="hidden"
            animate="visible"
        >
            <div className={styles["logo-container"]}>
                <Link className={"logo-url"} to={"/"}>ruschev.dev_</Link>
            </div>
            <ul className={styles["nav-ul"]}>
                <li className={styles["nav-item"]}><Link to={'/blog'}>Blog</Link></li>
                <li className={styles["nav-item"]}><Link>Projects</Link></li>
                <li className={styles["nav-item"]}><Link>Contact me</Link></li>
            </ul>
        </motion.div>
    );
}