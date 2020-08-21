import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  return (
    <div className={p.profileInfo}>
      <div className={p.wallpaper}>
        <img src="https://img.freepik.com/free-vector/background-with-violet-blue-tropical-leaves_52683-36496.jpg?size=626&ext=jpg" alt="" />
      </div>
      <div className={p.main}>
        ava+desc
      </div>
    </div>
  );
}

export default ProfileInfo;