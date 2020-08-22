import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  return (
    <div className={p.profileInfo}>
      <div className={p.wallpaper}>
        <img src="https://blood.am/images/blood-center/78.png" alt="" />
      </div>
      <div className={p.main}>
        ava+desc
      </div>
    </div>
  );
}

export default ProfileInfo;