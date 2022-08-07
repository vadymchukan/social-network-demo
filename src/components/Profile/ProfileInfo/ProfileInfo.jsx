import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        {/* <img className={s.img} src="https://www.rosphoto.com/images/u/articles/1510/3_13.jpg" alt=""></img> */}
      </div>

      <div className={s.descriptioneBlock}>

        <img src={props.profile.photos.large} />

        {props.profile.aboutMe}
        {props.profile.contacts.facebook}
        <div> <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus}/> </div>
      </div>

    </div>
  )
}

export default ProfileInfo;