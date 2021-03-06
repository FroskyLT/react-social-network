import React, { useState, useEffect } from 'react';
import CardContainer from '../../../common/CardContainer/CardContainer';
import styles from './profile-info.module.scss';

// profile:
// aboutMe: null
// contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null, …}
// fullName: "1234samurai"
// lookingForAJob: false
// lookingForAJobDescription: null
// photos: {small: null, large: null}
// userId: 14984
// __proto__: Object
// status: "Hey !"
// updateUserStatus: ƒ ()

const SectionTitle = ({ children }) => (<h2 className={styles.sectionTitle}>{children}</h2>);

const SectionAboutMe = ({ aboutMe }) => {
    if (!aboutMe)
        return null;
    return (
        <div>{`About me: ${aboutMe}`}</div>
    );
};
const SectionJob = ({isOpenToWork, description }) => {
    if (!isOpenToWork || description == null)
        return null;
    return (
        <div>{`#OPENTOWORK ${description}`}</div>
    );
}
const SectionStatus = ({ status, updateUserStatus, canEdit }) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status);
    }, [status]);

    const enableEditMode = () => {
        if (canEdit)
            setEditMode(true);
    }

    const disableEditMode = () => {
        setEditMode(false);
        updateUserStatus(localStatus);
    }

    const changeLocalStatus = (e) => {
        setLocalStatus(e.target.value);
    }

    return (
        <>
            { editMode
                ? <input
                    type="text"
                    placeholder="my current status"
                    className={styles.sectionStatus__textfield}
                    value={localStatus}
                    onBlur={disableEditMode}
                    onChange={changeLocalStatus}
                    autoFocus
                />
                : <div
                    onDoubleClick={enableEditMode}
                    className={canEdit ? styles.sectionStatus__text : `${styles.sectionStatus__text} ${styles.sectionStatus__text_nonEditable}`}
                >{status || "double click me!"}</div>
            }
        </>
    );
}
const SectionContacts = () => { }

const ProfileInfo = (props) => {
    const { profile, status, currUserId, updateUserStatus } = props;

    const canEdit = currUserId === profile.userId;

    return (
        <CardContainer className={styles.profileInfo}>
            <SectionTitle>{"Intro"}</SectionTitle>
            <div className={styles.profileInfo__content}>
                <SectionAboutMe aboutMe={profile.aboutMe} />
                <SectionJob isOpenToWork={profile.lookingForAJob} description={profile.lookingForAJobDescription} />
                <SectionStatus status={status} updateUserStatus={updateUserStatus} canEdit={canEdit} />
            </div>
            {/*
                {props.profileData.contacts &&
                    <div className={styles.contacts}>
                        <div className={styles.contacts__header}>{"contacts"}</div>
                        <div className={styles.contacts__items}>
                            {props.profileData.contacts.facebook && <a className={styles.contacts__item} href={props.profileData.contacts.facebook}><img src="https://image.flaticon.com/icons/png/512/124/124010.png" alt="facebook" /></a>}
                            {props.profileData.contacts.github && <a className={styles.contacts__item} href={props.profileData.contacts.github}><img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt="github" /></a>}
                            {props.profileData.contacts.instagram && <a className={styles.contacts__item} href={props.profileData.contacts.instagram}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="instagram" /></a>}
                            {props.profileData.contacts.twitter && <a className={styles.contacts__item} href={props.profileData.contacts.twitter}><img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="twitter" /></a>}
                            {props.profileData.contacts.vk && <a className={styles.contacts__item} href={props.profileData.contacts.vk}><img src="https://cdn.worldvectorlogo.com/logos/vk-1.svg" alt="vk" /></a>}
                            {props.profileData.contacts.website && <a className={styles.contacts__item} href={props.profileData.contacts.website}><img src="https://cdn4.iconfinder.com/data/icons/software-line/32/software-line-02-512.png" alt="website" /></a>}
                            {props.profileData.contacts.youtube && <a className={styles.contacts__item} href={props.profileData.contacts.youtube}><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png" alt="youtube" /></a>}
                        </div>
                    </div>

                }
            } */}
        </CardContainer>
    );
}

export default ProfileInfo;