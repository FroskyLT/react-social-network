import React from 'react';
import SingleUser from './SingleUser/SingleUser';
import s from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                imgUrl: "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",
                id: 1, name: "Dmitry K.", status: "I am looking for a job right now", country: "Belarus", city: "Minsk", follow: false
            },
            {
                imgUrl: "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",
                id: 2, name: "Joe L.", status: "I am rich", country: "US", city: "Los Angeles", follow: true
            },
            {
                imgUrl: "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",
                id: 3, name: "Judy D.", status: "I am exhousted", country: "Mexico", city: "Mexico", follow: false
            }
        ]);
    }

    let singleUser = props.users.map((u) =>
        <SingleUser key={u.id} id={u.id} imgUrl={u.imgUrl} name={u.name} status={u.status}
            country={u.country} city={u.city} follow={u.follow} followToggle={props.followToggle} />)
    return (
        <div className={s.users}>
            {singleUser}
        </div>
    )
}

export default Users;