import React, { useState, useEffect } from "react";
import styles from "./profile-info.module.scss";

import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLink,
  FaTwitter,
  FaVk,
  FaGlobeAmericas,
  FaYoutube,
  FaEdit,
} from "react-icons/fa";

import Modal from "../../../common/Modal/Modal";
import userPlaceholder from "../../../../assets/images/person.png";
import CardContainer from "../../../common/CardContainer/CardContainer";
import TextField from "../../../common/EditModeFields/TextField/TextField";
import ContactField from "../../../common/EditModeFields/ContactField/ContactField";
import CheckBoxField from "../../../common/EditModeFields/CheckBoxField/CheckBoxField";

const SectionTitle = ({ children }) => (
  <h2 className={styles.sectionTitle}>{children}</h2>
);

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
    <div className={styles.sectionStatus}>
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
    </div>
  );
};

const SectionAboutMe = ({ aboutMe }) => {
  if (!aboutMe) return null;
  return (
    <div className={styles.sectionAboutMe}>
      <div className={styles.sectionAboutMe__header}>{"About me:"}</div>
      <div className={styles.sectionAboutMe__content}>{aboutMe}</div>
    </div>
  );
};
const SectionJob = ({ isOpenToWork, description }) => {
  if (!isOpenToWork || description == null) return null;
  return (
    <div className={styles.sectionJob}>
      <div className={styles.sectionJob__header}>{"#OPENTOWORK"}</div>
      <div className={styles.sectionJob__content}>{description}</div>
    </div>
  );
};

const SectionContacts = ({ contacts }) => {
  const keys = Object.keys(contacts);

  if (keys.every((key) => contacts[key] === null || !contacts[key]))
    return null;

  const contactsMap = new Map([
    ["facebook", <FaFacebook className={styles.sectionContacts__icon} />],
    ["github", <FaGithub className={styles.sectionContacts__icon} />],
    ["instagram", <FaInstagram className={styles.sectionContacts__icon} />],
    ["mainLink", <FaLink className={styles.sectionContacts__icon} />],
    ["twitter", <FaTwitter className={styles.sectionContacts__icon} />],
    ["vk", <FaVk className={styles.sectionContacts__icon} />],
    ["website", <FaGlobeAmericas className={styles.sectionContacts__icon} />],
    ["youtube", <FaYoutube className={styles.sectionContacts__icon} />],
  ]);

  const getLink = (link) => {
    return link.startsWith("http://") || link.startsWith("https://")
      ? link
      : `http://${link}`;
  };

  return (
    <div className={styles.sectionContacts}>
      {keys.map((key) => {
        if (contacts[key] && contacts[key] !== null) {
          return (
            <a
              href={getLink(contacts[key])}
              target="_blank"
              rel="noopener noreferrer"
              key={key}
            >
              {contactsMap.get(key)}
            </a>
          );
        }
        return null;
      })}
    </div>
  );
};

const Friends = ({ friends, currUserPage }) => {
  const friendCells =
    friends.length > 9
      ? friends.slice(0, 9)
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
              src={item.photos.small || userPlaceholder}
              alt=""
            />
          </NavLink>
        ) : (
          <div
            className={
              currUserPage
                ? styles.friend__placeholder
                : `${styles.friend__placeholder} ${styles.friend__placeholder_bloored}`
            }
            key={index}
          />
        )
      )}
      {!currUserPage && (
        <div className={styles.friends__overlay}>
          {"Friends avalible only for logged user profile"}
        </div>
      )}
    </div>
  );
};

const EditMode = ({ currUserPage, profile, updateProfile }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const initialValues = {
    aboutMe: profile.aboutMe !== null ? profile.aboutMe : "",
    contacts: {
      facebook:
        profile.contacts.facebook !== null ? profile.contacts.facebook : "",
      github: profile.contacts.github !== null ? profile.contacts.github : "",
      instagram:
        profile.contacts.instagram !== null ? profile.contacts.instagram : "",
      mainLink:
        profile.contacts.mainLink !== null ? profile.contacts.mainLink : "",
      twitter:
        profile.contacts.twitter !== null ? profile.contacts.twitter : "",
      vk: profile.contacts.vk !== null ? profile.contacts.vk : "",
      website:
        profile.contacts.website !== null ? profile.contacts.website : "",
      youtube:
        profile.contacts.youtube !== null ? profile.contacts.youtube : "",
    },
    lookingForAJob:
      profile.lookingForAJob !== null ? profile.lookingForAJob : "",
    lookingForAJobDescription:
      profile.lookingForAJobDescription !== null
        ? profile.lookingForAJobDescription
        : "",
    fullName: profile.fullName,
  };

  return (
    <>
      {currUserPage && (
        <FaEdit
          className={styles.editInfo}
          onClick={() => setShowModal(true)}
        />
      )}
      <Modal
        showModal={showModal}
        title="Edit Mode"
        closeModal={() => setShowModal(false)}
      >
        <Formik
          initialValues={{ ...initialValues }}
          onSubmit={(values, { setSubmitting }) => {
            updateProfile(values);
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className={styles.editMode}>
              <div className={styles.editMode__contacts}>
                <FaFacebook
                  className={
                    values.contacts.facebook
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("facebook")}
                />
                <FaGithub
                  className={
                    values.contacts.github
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("github")}
                />
                <FaInstagram
                  className={
                    values.contacts.instagram
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("instagram")}
                />
                <FaLink
                  className={
                    values.contacts.mainLink
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("mainLink")}
                />
                <FaTwitter
                  className={
                    values.contacts.twitter
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("twitter")}
                />
                <FaVk
                  className={
                    values.contacts.vk
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("vk")}
                />
                <FaGlobeAmericas
                  className={
                    values.contacts.website
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("website")}
                />
                <FaYoutube
                  className={
                    values.contacts.youtube
                      ? `${styles.editMode__contact} ${styles.editMode__contact_selected}`
                      : styles.editMode__contact
                  }
                  onClick={() => setSelectedContact("youtube")}
                />
              </div>
              <div className={styles.editMode__fieldGroups}>
                <ContactField
                  selectedContact={selectedContact}
                  closeDialog={() => setSelectedContact(null)}
                />
                <TextField name="fullName" title="Full Name" required />
                <TextField name="aboutMe" title="About Me" />
                <CheckBoxField
                  name="lookingForAJob"
                  title="Are you open to new opportunities?"
                />
                <TextField
                  name="lookingForAJobDescription"
                  title="Hard Skills"
                  required
                />
              </div>
              <div className={styles.editMode__footer}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.editMode__submit}
                >
                  Edit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const ProfileInfo = (props) => {
  const {
    profile,
    friends,
    status,
    currUserId,
    updateUserStatus,
    updateProfile,
  } = props;

  const currUserPage = currUserId === profile.userId;

  return (
    <>
      <CardContainer>
        <EditMode
          currUserPage={currUserPage}
          profile={profile}
          updateProfile={updateProfile}
        />
        <SectionTitle>{"Intro"}</SectionTitle>
        <SectionStatus
          status={status}
          updateUserStatus={updateUserStatus}
          canEdit={currUserPage}
        />
        <SectionAboutMe aboutMe={profile.aboutMe} />
        <SectionJob
          isOpenToWork={profile.lookingForAJob}
          description={profile.lookingForAJobDescription}
        />
        <SectionContacts contacts={profile.contacts} />
      </CardContainer>
      <CardContainer>
        <SectionTitle>{"Friends"}</SectionTitle>
        <Friends friends={friends} currUserPage={currUserPage} />
      </CardContainer>
    </>
  );
};

export default ProfileInfo;
