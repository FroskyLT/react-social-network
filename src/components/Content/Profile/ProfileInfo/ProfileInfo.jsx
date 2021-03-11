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
                >{status ? status : canEdit ? "double click me!" : ""}</div>
            }
        </>
    );
}
// const SectionContacts = () => { }

const ProfileInfo = (props) => {
    const { profile, status, currUserId, updateUserStatus } = props;

    const canEdit = currUserId === profile.userId;

    return (
        <>
        <CardContainer className={styles.profileInfo}>
            <SectionTitle>{"Intro"}</SectionTitle>
            <div className={styles.profileInfo__intro}>
                <SectionAboutMe aboutMe={profile.aboutMe} />
                <SectionJob isOpenToWork={profile.lookingForAJob} description={profile.lookingForAJobDescription} />
                <SectionStatus status={status} updateUserStatus={updateUserStatus} canEdit={canEdit} />
            </div>
        </CardContainer>
        <CardContainer className={styles.profileInfo}>
            <SectionTitle>{"Friends"}</SectionTitle>
            <div className={styles.profileInfo__friends}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </CardContainer>
        </>
    );
}

export default ProfileInfo;