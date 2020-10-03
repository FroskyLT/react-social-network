import React from 'react';
import s from "./Users.module.css";

const Users = (props) => {
    // /name: "Dmitry K.", status: "I am looking for a job right now", country: "Belarus", city: "Minsk", follow: false
    return (
        <div className={s.users}>
            <div>{props.users[0].imgUrl}</div>
            <div>{props.users[0].id}</div>
            <div>{props.users[0].name}</div>
            <div>{props.users[0].status}</div>
            <div>{props.users[0].country}</div>
            <div>{props.users[0].city}</div>
            <div>{props.users[0].follow}</div>
        </div>
    )
}

export default Users;