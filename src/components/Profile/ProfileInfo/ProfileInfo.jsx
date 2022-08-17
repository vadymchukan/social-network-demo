import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }
  // Mozliwosc zmiany foto
  const onMainPhotoSelector = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
     saveProfile(formData);
     setEditMode(false);
  }

  return (
    <div>
      <div className={s.descriptioneBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelector} />}

        {editMode ? <ProfileDataFormReduxForm profile={profile} initialValues={profile} onSubmit={onSubmit} /> 
                  :<ProfileData goToEditMode={() => {
            setEditMode(true);
          }}
            profile={profile} isOwner={isOwner} />}


        <div>  <ProfileStatusWithHooks status={status} updateStatus={updateStatus} /> </div>
      </div>

    </div>
  )

}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

      <div>
        <b>Name</b>:{profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>:{profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skills</b>:{profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About my</b>:{profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}>
    <b>{contactTitle}</b>: {contactValue};
  </div>
}

export default ProfileInfo;