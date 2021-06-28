import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CardContainer from "../../../common/CardContainer/CardContainer";
import styles from "./profile-info.module.scss";
import userPlaceholder from "../../../../assets/images/person.png";
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
import { Formik, Form, Field, ErrorMessage } from "formik";

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

const EditMode = ({ currUserPage, profile }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {currUserPage && (
        <FaEdit
          className={styles.editInfo}
          onClick={() => setShowModal(true)}
        />
      )}
      <Modal
        // showModal={showModal}
        showModal={true}
        title="Edit Mode"
        closeModal={() => setShowModal(false)}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            // props.loginHandler(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <div className={styles.editMode__contacts}>
                <FaFacebook
                  className={`${styles.editMode__contact} ${styles.editMode__contact_selected}`}
                />
                <FaGithub className={styles.editMode__contact} />
                <FaInstagram className={styles.editMode__contact} />
                <FaLink className={styles.editMode__contact} />
                <FaTwitter className={styles.editMode__contact} />
                <FaVk className={styles.editMode__contact} />
                <FaGlobeAmericas className={styles.editMode__contact} />
                <FaYoutube className={styles.editMode__contact} />
              </div>
              <div className={styles.form__group}>
                <label
                  htmlFor="fullName"
                  className={
                    values.email
                      ? styles.form__label
                      : `${styles.form__label} ${styles.form__label_big}`
                  }
                >
                  Full Name
                </label>
                <Field
                  id="fullName"
                  type="text"
                  name="fullName"
                  className={styles.form__field}
                  required
                />
                <div className={styles.form__error}>
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className={styles.form__error}
                  />
                </div>
              </div>
              <div className={styles.form__group}>
                <label
                  htmlFor="lookingForAJob"
                  className={
                    values.password
                      ? styles.form__label
                      : `${styles.form__label} ${styles.form__label_big}`
                  }
                >
                  Are you open to new opportunities?
                </label>
                <Field
                  id="lookingForAJob"
                  type="checkbox"
                  name="lookingForAJob"
                  className={styles.form__field}
                  required
                />
                <div className={styles.form__error}>
                  <ErrorMessage
                    name="lookingForAJob"
                    component="div"
                    className={styles.form__error}
                  />
                </div>
              </div>
              <div className={styles.form__group}>
                <label
                  htmlFor="lookingForAJobDescription"
                  className={
                    values.email
                      ? styles.form__label
                      : `${styles.form__label} ${styles.form__label_big}`
                  }
                >
                  Hard Skills
                </label>
                <Field
                  id="lookingForAJobDescription"
                  type="text"
                  name="lookingForAJobDescription"
                  className={styles.form__field}
                  required
                />
                <div className={styles.form__error}>
                  <ErrorMessage
                    name="lookingForAJobDescription"
                    component="div"
                    className={styles.form__error}
                  />
                </div>
              </div>
              {/* <div className={styles.form__error}>
                {props.error && props.error}
              </div> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.form__submit}
              >
                Edit
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const ProfileInfo = (props) => {
  const { profile, friends, status, currUserId, updateUserStatus } = props;

  const currUserPage = currUserId === profile.userId;

  return (
    <>
      <CardContainer>
        <EditMode currUserPage={currUserPage} profile={profile} />
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
