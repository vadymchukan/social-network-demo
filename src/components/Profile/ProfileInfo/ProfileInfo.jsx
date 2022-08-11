import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
// Mozliwosc zmiany foto
  const onMainPhotoSelector =(e)=>{
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  // =====

  return (
    <div>
      <div>
        {/* <img className={s.img} src="https://www.rosphoto.com/images/u/articles/1510/3_13.jpg" alt=""></img> */}
      </div>

      <div className={s.descriptioneBlock}>

        <img src={props.profile.photos.large  || userPhoto} className={s.mainPhoto} />
        {props.isOwner && <input type={'file'} onClick={onMainPhotoSelector}/>}

        {props.profile.aboutMe}
        {props.profile.contacts.facebook}
        <div> <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus}/> </div>
      </div>

    </div>
  )
}

export default ProfileInfo;