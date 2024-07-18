import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import { appearDown, navMenuAppearFromRight, rotateElement180 } from '../../utils/animations';
import { motion } from 'framer-motion';
import { NavItem } from './NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Navigation = (props) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <motion.div className={styles["nav-container"]}
            variants={appearDown}
            initial={"hidden"}
            animate={"visible"}
        >
            <Link className={styles["logo-url"]} to={"/"}>
                ruschev.dev_
            </Link>

            <motion.div
                className={styles["nav-menu"]}
                variants={navMenuAppearFromRight}
                initial={menuIsOpen ? "hidden" : "visible"}
                animate={menuIsOpen ? "visible" : "hidden"}

            >
                <motion.span
                    className={styles["menu-btn"]}
                    variants={rotateElement180}
                    initial={menuIsOpen ? "hidden" : "visible"}
                    animate={menuIsOpen ? "visible" : "hidden"}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                    <FontAwesomeIcon icon={faAnglesLeft} />

                </motion.span>


                <ul className={styles["nav-ul"]}>
                    <li><NavItem to={'/blog'} textContent={'Blog'} /></li>
                    <li><NavItem to={'/projects'} textContent={'Projects'} /></li>
                    <li><NavItem to={'/contacts'} textContent={'Contacts'} /></li>
                </ul>
            </motion.div>

        </motion.div>
    );
}