import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CardContainer from "../../../common/CardContainer/CardContainer";
import styles from "./profile-info.module.scss";
import personImg from "../../../../assets/images/person.png";

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

const SectionTitle = ({ children }) => (
  <h2 className={styles.sectionTitle}>{children}</h2>
);

const SectionAboutMe = ({ aboutMe }) => {
  if (!aboutMe) return null;
  return <div>{`About me: ${aboutMe}`}</div>;
};
const SectionJob = ({ isOpenToWork, description }) => {
  if (!isOpenToWork || description == null) return null;
  return <div>{`#OPENTOWORK ${description}`}</div>;
};
const SectionStatus = ({ status, updateUserStatus, canEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const enableEditMode = () => {
    if (canEdit) setEditMode(true);
  };

  const disableEditMode = () => {
    setEditMode(false);
    updateUserStatus(localStatus);
  };

  const changeLocalStatus = (e) => {
    setLocalStatus(e.target.value);
  };

  return (
    <>
      {editMode ? (
        <input
          type="text"
          placeholder="my current status"
          className={styles.sectionStatus__textfield}
          value={localStatus}
          onBlur={disableEditMode}
          onChange={changeLocalStatus}
          autoFocus
        />
      ) : (
        <div
          onDoubleClick={enableEditMode}
          className={
            canEdit
              ? styles.sectionStatus__text
              : `${styles.sectionStatus__text} ${styles.sectionStatus__text_nonEditable}`
          }
        >
          {status ? status : canEdit ? "double click me!" : ""}
        </div>
      )}
    </>
  );
};
// const SectionContacts = () => { }

const Friends = ({ friends }) => {
  const friendCells =
    friends.length > 9
      ? friends.slice(9 - friends.length)
      : [
          ...friends,
          ...Array.from({ length: 9 - friends.length }, () => "placeholder"),
        ];

  return (
    <div className={styles.friends}>
      {friendCells.map((item, index) =>
        item !== "placeholder" ? (
          <NavLink to={`/profile/${item.id}`} key={index}>
            <img
              className={styles.friend}
              src={item.photos.small || personImg}
              alt=""
            />
          </NavLink>
        ) : (
          <div className={styles.friend__placeholder} key={index} />
        )
      )}
    </div>
  );
};

const ProfileInfo = (props) => {
  const { profile, friends, status, currUserId, updateUserStatus } = props;

  const canEdit = currUserId === profile.userId;

  return (
    <>
      <CardContainer className={styles.profileInfo}>
        <SectionTitle>{"Intro"}</SectionTitle>
        <div className={styles.profileInfo__intro}>
          <SectionAboutMe aboutMe={profile.aboutMe} />
          <SectionJob
            isOpenToWork={profile.lookingForAJob}
            description={profile.lookingForAJobDescription}
          />
          <SectionStatus
            status={status}
            updateUserStatus={updateUserStatus}
            canEdit={canEdit}
          />
        </div>
      </CardContainer>
      <CardContainer className={styles.profileInfo}>
        <SectionTitle>{"Friends"}</SectionTitle>
        <Friends friends={friends} />
      </CardContainer>
    </>
  );
};

export default ProfileInfo;
