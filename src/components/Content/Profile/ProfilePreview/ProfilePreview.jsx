import React from 'react';
import styles from './profilePreview.module.scss';
import profileBG from '../../../../assets/images/profileBG.png';
import Button from '../../../common/Button/Button';

class ProfilePreview extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.status !== prevProps.status) {
            this.setState({ status: this.props.status });
        }
    }

    state = {
        editMode: false,
        status: this.props.status
    };

    _onEditModeEnter() {
        this.setState({ editMode: true });
    }

    _onEditModeClose() {
        this.setState({ editMode: false });
        this.props.updateUserStatus(this.state.status);
    }

    _statusChangeHandler(event) {
        this.setState({ status: event.target.value });
    }

    render() {
        return (
            <div className={styles.profilePreview}>
                <div className={styles.wallpaper}>
                    <img src={"https://images.hdqwalls.com/wallpapers/red-lake-mountains-minimal-4k-1u.jpg" || profileBG} alt="" />
                </div>
                <div className={styles.about}>
                    <img src={this.props.profileData.photos.large || "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"} alt="" />
                    <div className={styles.about__description}>
                        <div className={styles.about__name}>{this.props.profileData.fullName ?? "No Name"}</div>
                        <Button>{"follow"}</Button>
                        {/* {this.state.editMode && <div><input type="text" value={this.state.status} autoFocus onBlur={this._onEditModeClose.bind(this)} onChange={this._statusChangeHandler.bind(this)} /></div>} */}
                        {/* {!this.state.editMode && <div onDoubleClick={this._onEditModeEnter.bind(this)}>{this.props.status || "double click on me"}</div>} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePreview;