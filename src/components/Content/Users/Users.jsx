import React from 'react';
import SingleUser from './SingleUser/SingleUser';
import s from "./Users.module.css";
import * as axios from "axios";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                })
        }
    }


    let singleUser = props.users.map((u) =>
        <SingleUser key={u.id} id={u.id} imgUrl={u.photos.small} name={u.name} status={u.status}
            /*country={u.country} city={u.city}*/ follow={u.followed} followToggle={props.followToggle} />)
    return (
        <div className={s.users__wrapper}>
            <button onClick={getUsers}>Get Users</button>
            {singleUser}
        </div>
    )
}

export default Users;