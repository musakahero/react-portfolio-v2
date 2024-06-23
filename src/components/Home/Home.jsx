import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import profilePhoto from './profilePhotoFinal.png';
import { motion } from 'framer-motion';
import { appearDelayedChildren } from '../../utils/animations';

export const Home = () => {
    return (
        <section className={styles["hero-container"]}>
            <motion.div className={styles["intro-container"]}
                variants={appearDelayedChildren}
                initial="hidden"
                animate="visible"
                >
                <h1>Hi, I'm Teo - a web developer.<br />Welcome to my domain.</h1>
                <h3>See what I'm up to <strong className={styles["blogLink"]}><Link to={'/blog'}>here</Link></strong>.</h3>
            </motion.div>
            <div className={styles["image-container"]}>
                {/* <img src={profilePhoto} alt="" /> */}

            </div>
        </section>
    );
}