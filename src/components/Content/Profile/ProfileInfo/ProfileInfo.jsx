import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={p.profileInfo}>
            {props.profileData.aboutMe && props.profileData.contacts ?
                <div className={p.main}>
                    <div className={p.aboutMe}>
                        <div className={p.aboutMe__header}>{"about me"}</div>
                        <div className={p.aboutMe__desc}>{props.profileData.aboutMe}</div>
                    </div>
                    {props.profileData.lookingForAJob &&
                        <div className={p.lookingJob}>
                            <div className={p.lookingJob__header}>{"is looking for a job!"}</div>
                            <div className={p.lookingJob__desc}>{props.profileData.lookingForAJobDescription}</div>
                        </div>
                    }
                    {props.profileData.contacts &&
                        <div className={p.contacts}>
                            <div className={p.contacts__header}>{"contacts"}</div>
                            <div className={p.contacts__items}>
                                {props.profileData.contacts.facebook && <a className={p.contacts__item} href={props.profileData.contacts.facebook}><img src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="facebook" /></a>}
                                {props.profileData.contacts.github && <a className={p.contacts__item} href={props.profileData.contacts.github}><img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github" /></a>}
                                {props.profileData.contacts.instagram && <a className={p.contacts__item} href={props.profileData.contacts.instagram}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="instagram" /></a>}
                                {props.profileData.contacts.twitter && <a className={p.contacts__item} href={props.profileData.contacts.twitter}><img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="twitter" /></a>}
                                {props.profileData.contacts.vk && <a className={p.contacts__item} href={props.profileData.contacts.vk}><img src="https://cdn.worldvectorlogo.com/logos/vk-1.svg" alt="vk" /></a>}
                                {props.profileData.contacts.website && <a className={p.contacts__item} href={props.profileData.contacts.website}><img src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png" alt="website" /></a>}
                                {props.profileData.contacts.youtube && <a className={p.contacts__item} href={props.profileData.contacts.youtube}><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" alt="youtube" /></a>}
                            </div>
                        </div>

                    }
                </div> :
                <div className={p.main}>{"more info..."}</div>

            }
        </div>
    );
}

export default ProfileInfo;