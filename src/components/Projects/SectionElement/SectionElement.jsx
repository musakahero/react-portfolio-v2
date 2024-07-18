import { motion } from 'framer-motion';
import styles from './SectionElement.module.css';
import { appearFromLeft, appearFromRight } from '../../../utils/animations';
import missingImg from './missingImg.jpg';
import { Link } from 'react-router-dom';

export const SectionElement = ({
    title,
    imgUrl,
    content,
    order,
    projectUrl
}) => {
    return (
        <motion.section
            className={styles["section-container"]}
            initial={'hidden'}
            variants={order % 2 > 0 ? appearFromLeft : appearFromRight}
            animate={'visible'}
        >
            <Link to={projectUrl} className={styles['thumbnail']}>
                <img
                    src={imgUrl ? imgUrl : missingImg}
                    alt={`Screenshot of ${title}`}
                     />
            </Link>
            <div className={styles['section-text']}>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </motion.section>
    )
}

