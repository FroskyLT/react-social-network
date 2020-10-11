import React from 'react';
import SingleUser from './SingleUser/SingleUser';
import s from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }
    }
    render() {
        let singleUser = this.props.users.map((u) =>
            <SingleUser key={u.id} id={u.id} imgUrl={u.photos.small} name={u.name} status={u.status}
                country={u.country} city={u.city} follow={u.followed} followToggle={this.props.followToggle} />)
        return (
            <div className={s.users__wrapper}>
                {singleUser}
            </div>
        )
    }
}

export default Users;