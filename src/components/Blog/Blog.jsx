import { appearInstant } from '../../utils/animations';
import styles from './Blog.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { testCollection } from '../../utils/testPosts';
export const Blog = () => {
    // retrieve all posts fetch getAll

    return (
        <motion.div
            className={styles['posts-container']}
            variants={appearInstant}
            initial={'hidden'}
            animate={'visible'}>
            <ul className={styles['list']}>
                {/* generate li elements for each post with different ids */}
                {testCollection.map(p =>
                    <li key={p.recordId}>
                        <Link to={`/blog/${p.recordId}`}>{p.title}</Link>
                    </li>)}
            </ul>
        </motion.div>
    )
}