import styles from './Projects.module.css';
import mypiggyeatsShot from './images/mypiggyeats-shot.jpg';
export const Projects = (props) => {
    return (
        <div className={styles["projects-container"]}>
            <section className={styles["section-container"]}>
                <img src={mypiggyeatsShot} alt="Screenshot from project mypiggyeats.com" />
                <div className={styles['section-text']}>
                    <h1>Section title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab quos quod vero mollitia? Amet quisquam facere obcaecati accusamus tempore corrupti? Velit tenetur quibusdam placeat blanditiis, saepe sed. Asperiores, reprehenderit.</p>
                </div>
            </section>

            <section className={styles["section-container"]}>
                <img src={mypiggyeatsShot} alt="Screenshot from project mypiggyeats.com" />
                <div className={styles['section-text']}>
                    <h1>Section title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab quos quod vero mollitia? Amet quisquam facere obcaecati accusamus tempore corrupti? Velit tenetur quibusdam placeat blanditiis, saepe sed. Asperiores, reprehenderit.</p>
                </div>
            </section>

            <section className={styles["section-container"]}>
                <img src={mypiggyeatsShot} alt="Screenshot from project mypiggyeats.com" />
                <div className={styles['section-text']}>
                    <h1>Section title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab quos quod vero mollitia? Amet quisquam facere obcaecati accusamus tempore corrupti? Velit tenetur quibusdam placeat blanditiis, saepe sed. Asperiores, reprehenderit.</p>
                </div>
            </section>

            <section className={styles["section-container"]}>
                <img src={mypiggyeatsShot} alt="Screenshot from project mypiggyeats.com" />
                <div className={styles['section-text']}>
                    <h1>Section title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ab quos quod vero mollitia? Amet quisquam facere obcaecati accusamus tempore corrupti? Velit tenetur quibusdam placeat blanditiis, saepe sed. Asperiores, reprehenderit.</p>
                </div>
            </section>
        </div>

    )
}