import React from 'react';
import n from './../Navbar.module.css';

const Friends = (props) => {
  return (
    <div className={n.friends__item}>
      <a href="#">
        <div className={n.friends__item_body}>
          <div className={n.friends__img}>
            <img src={props.imgUrl} alt="" />
          </div>
          <div className={n.friends__name}>
            {props.name}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Friends;