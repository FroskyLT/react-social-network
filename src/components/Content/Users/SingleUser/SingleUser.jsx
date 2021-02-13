import React from 'react';
import s from "../Users.module.css";
import userImg from "../../../assets/images/user.png"
import { NavLink } from 'react-router-dom';


const SingleUser = (props) => {

    let toggleFollow = () => {
        return props.follow
            ? <button onClick={() => { props.followToggle(props.id) }}>unfollow</button>
            : <button onClick={() => { props.followToggle(props.id) }}>follow</button>
    }
    return (
        <div className={s.singleUser}>
            <div className={s.imgNbutton}>
                <NavLink to="/profile/2">
                    <div className={s.imgNbutton__img}><img src={props.imgUrl || userImg} alt="" /></div>
                </NavLink>
                <div className={s.imgNbutton__button}>{toggleFollow()}</div>
            </div>
            <div className={s.box}>
                <div className={s.box__leftside}>
                    <div className={s.name__wrapper}><div className={s.name__body}>{props.name}</div></div>
                    <div className={s.status__wrapper}><div className={s.status__body}>{props.status}</div></div>
                </div>
                <div className={s.box__rightside}>
                    <div className={s.country__wrapper}><div className={s.country__body}>{props.country ?? "Country"},</div></div>
                    <div className={s.city__wrapper}><div className={s.city__body}>{props.city ?? "City"}</div></div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default SingleUser;