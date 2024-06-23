import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { appearDown } from '../../utils/animations';
import { motion } from 'framer-motion';
import { NavItem } from './NavItem';

export const Navigation = (props) => {

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
               <li><NavItem to={'/blog'} textContent={'Blog'}/></li>
               <li><NavItem to={'/projects'} textContent={'Projects'}/></li>
               <li><NavItem to={'/contacts'} textContent={'Contact me'}/></li>                  
            </ul>
        </motion.div>
    );
}