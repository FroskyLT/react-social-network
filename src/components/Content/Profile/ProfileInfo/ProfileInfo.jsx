import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  return (
    <div className={p.profileInfo}>
      <div className={p.wallpaper}>
        <img src="https://blood.am/images/blood-center/78.png" alt="" />
        <div className={p.about}>
          <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="" />
          <div className={p.name}>David G.</div>
        </div>
      </div>
      <div className={p.main}>
        more info...
      </div>
    </div>
  );
}

export default ProfileInfo;