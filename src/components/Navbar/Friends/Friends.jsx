import React from 'react';
import n from './../Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    let linkNameElement = '/' + props.name;
    return (
        <div className={n.friends__item}>
            <NavLink to={linkNameElement}>
                <div className={n.friends__item_body}>
                    <div className={n.friends__img}>
                        <img src={props.imgUrl} alt="" />
                    </div>
                    <div className={n.friends__name}>
                        {props.name}
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Friends;