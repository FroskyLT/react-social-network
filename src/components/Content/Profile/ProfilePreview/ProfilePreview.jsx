import React from 'react';
import p from './ProfilePreview.module.css';
import profileBG from '../../../assets/images/profileBG.png';

const ProfilePreview = (props) => {
    console.log(props.profileData);
    return (
        <div className={p.profileInfo}>
            <div className={p.wallpaper}>
                <img src={"https://blood.am/images/blood-center/78.png" || profileBG} alt="" />
                <div className={p.about}>
                    <img src={props.profileData.photos.large || "https://i.pinimg.  com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="" />
                    <div className={p.name}>{props.profileData.fullName ?? "David G."}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePreview;