import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import profilePhoto from './profilePhotoFinal.png'
export const Home = () => {
    return (
        <section className={styles["hero-container"]}>
            <div className={styles["intro-container"]}>
                <h1>Hi, I'm Teo - a web developer.<br/>Welcome to my domain.</h1>
                <h3>See what I'm up to <strong className={styles["blogLink"]}><Link to={'/blog'}>here</Link></strong>.</h3>
            </div>
            <div className={styles["image-container"]}>
                {/* <img src={profilePhoto} alt="" /> */}

            </div>
        </section>
    );
}