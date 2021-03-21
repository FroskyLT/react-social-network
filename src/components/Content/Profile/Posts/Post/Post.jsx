import React, { useState, useRef, useEffect } from 'react';
import styles from './post.module.scss';
import CardContainer from '../../../../common/CardContainer/CardContainer';
import Divider from '../../../../common/Divider/Divider';
import { Link } from 'react-router-dom';

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
            <Divider noMargin />
        </div>
    );
}

const PostFooter = ({ likesCount, commentsData }) => {
    const [likes, setLikes] = useState(1);
    const [isLiked, setIsLiked] = useState(false);
    const [newComment, setNewComment] = useState("");
    const commentInput = useRef(null);

    useEffect(() => {
        setLikes(likesCount);
    }, [likesCount]);

    const handleLikes = () => {
        if (isLiked) {
            setLikes(prevLikes => prevLikes - 1);
            setIsLiked(!isLiked);
        } else {
            setLikes(prevLikes => prevLikes + 1);
            setIsLiked(!isLiked);
        }
    }

    const handleFocus = () => {
        commentInput.current.focus();
    }

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    }

    const handleSubmit = (e) => {
        if (e.key === "Enter" && newComment) {
            setNewComment("");
            alert('"comment posting" feature is still under development');
        }
    }

    const comments = commentsData == null ? [] : commentsData.map(comment => <div key={comment.id} className={styles.postFooter__comment}>
        <Link to="/profile" className={styles.postFooter__commentLink}>
            <img className={styles.postFooter__commentImage} src={comment.userPhoto} alt="" />
        </Link>
        <div className={styles.postFooter__commentContainer}>
            <div className={styles.postFooter__commentTitle}>{comment.userName}</div>
            <div className={styles.postFooter__commentContent}>{comment.text}</div>
        </div>
    </div>);

    return (
        <div className={styles.postFooter}>
            {likes > 0 &&
                <>
                    <div className={styles.postFooter__likes}>
                        {likes} likes
                    </div>
                    <Divider noMargin />
                </>
            }
            <div className={styles.postFooter__buttons}>
                <button className={styles.postFooter__singleButton} onClick={handleLikes}>
                    {isLiked ? "unlike" : "like"}
                </button>
                <button className={styles.postFooter__singleButton} onClick={handleFocus}>comment</button>
            </div>
            <Divider noMargin />
            {commentsData != null &&
                <div className={styles.postFooter__comments}>{comments}</div>
            }
            <div className={styles.postFooter__newComment}>
                <Link to="/profile" className={styles.postFooter__newCommentLink}>
                    <img className={styles.postFooter__newCommentImage} src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png" alt="profile" />
                </Link>
                <input
                    type="text"
                    ref={commentInput}
                    value={newComment}
                    onKeyUp={handleSubmit}
                    onChange={handleCommentChange}
                    placeholder="What's on your mind?"
                    className={styles.postFooter__newCommentTextfield}
                />
            </div>
        </div>
    );
}

const Post = (props) => {
    const { post, profile } = props;

    return (
        <CardContainer className={styles.post}>
            <PostHeader authorPhoto={profile.photos.large} authorName={profile.fullName} dateCreated={post.dateCreated} />
            <PostContent content={post.content} />
            <PostFooter likesCount={post.likesCount} commentsData={post.comments} />
        </CardContainer>
    );
}

export default Post;