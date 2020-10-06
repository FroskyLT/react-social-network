import React from 'react';
import SingleUser from './SingleUser/SingleUser';
import s from "./Users.module.css";
import * as axios from "axios";

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
        // {
        //     imgUrl: "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",
        //     id: 1, name: "Dmitry K.", status: "I am looking for a job right now", country: "Belarus", city: "Minsk", follow: false
        // }
    }

    let singleUser = props.users.map((u) =>
        <SingleUser key={u.id} id={u.id} imgUrl={u.photos.small} name={u.name} status={u.status}
            /*country={u.country} city={u.city}*/ follow={u.followed} followToggle={props.followToggle} />)
    return (
        <div className={s.users__wrapper}>
            {singleUser}
        </div>
    )
}

export default Users;