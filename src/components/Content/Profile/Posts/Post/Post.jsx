import React from 'react';
import styles from './post.module.scss';
import CardContainer from '../../../../common/CardContainer/CardContainer';
import Divider from '../../../../common/Divider/Divider';

const PostHeader = ({ authorPhoto, authorName, dateCreated }) => {
    const imageUrl = authorPhoto ?? "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png";

    return (
        <div className={styles.postHeader}>
            <img src={imageUrl} alt="user" className={styles.postHeader__photo} />
            <div className={styles.postHeader__status}>
                <div className={styles.postHeader__statusAuthor}>{authorName}</div>
                <div className={styles.postHeader__statusDate}>{dateCreated}</div>
            </div>
        </div>
    );
}

const PostContent = ({ content }) => {
    const { text, image } = content;
    const textStyles = text && text.length < 50 && !image
        ? `${styles.postContent__text} ${styles.postContent__text_large}`
        : styles.postContent__text;

    return (
        <div className={styles.postContent}>
            <div className={styles.postContent}></div>
            { text &&
                <div className={textStyles}>
                    {text}
                </div>
            }
            { image &&
                <img src={image} alt="content" className={styles.postContent__photo} />
            }
            <Divider />
        </div>
    );
}

const PostFooter = (props) => {
    return (
        <div>
            footer
        </div>
    );
}

const Post = (props) => {
    const { post, profile } = props;
    return (
        <CardContainer className={styles.post}>
            <PostHeader authorPhoto={profile.photos.large} authorName={profile.fullName} dateCreated={post.dateCreated} />
            <PostContent content={post.content} />
            <PostFooter />
        </CardContainer>
    );
}

export default Post;