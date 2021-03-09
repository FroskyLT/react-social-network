import React from 'react';
import styles from './profile-preview.module.scss';
import profileBG from '../../../../assets/images/profileBG.png';
import Button from '../../../common/Button/Button';

class ProfilePreview extends React.Component {
    render() {
        const profileId = this.props.profileData.userId;
        const isFollowInProgress = this.props.followInProgress.some(userId => userId === profileId)
        const currUserProfile = this.props.currUserId === profileId;
        const isFollowed = this.props.userInfo?.followed;

        // const toggleFollow = () => {
        //     return !props.isFollowed
        //         ? <button
        //             className={props.isFollowInProgress ? `${s.imgNbutton__button} ${s.imgNbutton__button_disabled}` : s.imgNbutton__button }
        //             disabled={props.isFollowInProgress}
        //             onClick={() => props.onFollow(props.id)}
        //         >follow</button>
        //         : <button
        //             className={props.isFollowInProgress ? `${s.imgNbutton__button} ${s.imgNbutton__button_disabled}` : s.imgNbutton__button }
        //             disabled={props.isFollowInProgress}
        //             onClick={() => props.onUnfollow(props.id)}
        //         >unfollow</button>
        // }

        const followButton = () => {
            return isFollowed
                ? <Button
                    // clickHandler={() => this.props.onUnfollow(profileId)}
                    disabled={isFollowInProgress}
                >{"unfollow"}</Button>
                : <Button
                    // clickHandler={() => this.props.onFollow(profileId)}
                    disabled={isFollowInProgress}
                >{"follow"}</Button>
        }

        return (
            <div className={styles.profilePreview}>
                <div className={styles.wallpaper}>
                    <img src={"https://images.hdqwalls.com/wallpapers/red-lake-mountains-minimal-4k-1u.jpg" || profileBG} alt="" />
                </div>
                <div className={styles.about}>
                    <img src={this.props.profileData.photos.large || "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"} alt="" />
                    <div className={styles.about__description}>
                        <div className={styles.about__name}>{this.props.profileData.fullName ?? "No Name"}</div>
                        {currUserProfile
                            ? <div className={styles.about__followPlaceholder} />
                            : followButton()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePreview;