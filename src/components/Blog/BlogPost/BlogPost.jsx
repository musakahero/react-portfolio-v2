import { useParams } from 'react-router-dom';
import styles from './BlogPost.module.css'
import { testCollection } from '../../../utils/testPosts';
export const BlogPost = () => {
    //retrieve postId from params
    const {postId} = useParams();

    //getOne request with postId or receive postInfo through props
    
    // get hardcoded example of blogpost
    const {createdOn, title, content} = testCollection.filter(p => p.recordId === postId)[0];
    
    return (
        <div className={styles['post-container']}>
            <h2 className={styles['created']}>Posted on: {createdOn}</h2>
            <h1 className={styles['title']}>{title}</h1>
            <p className={styles['content']}>{content}</p>
        </div>
    );
}