import React from 'react';
import SingleUser from './SingleUser/SingleUser';
import s from "./Users.module.css";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
            )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            }
            )
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let singleUser = this.props.users.map((u, index) =>
            <SingleUser key={index} id={u.id} imgUrl={u.photos.small} name={u.name} status={u.status}
                country={u.country} city={u.city} follow={u.followed} followToggle={this.props.followToggle}
            />
        )

        return (
            <div className={s.users__wrapper}>
                <div className={s.users__pagination}>
                    {this.props.currentPage > 1 &&
                        <div
                            className={s.users__paginationItem}
                            onClick={() => this.onPageChanged(this.props.currentPage - 1)}
                        >
                            {"❮"}
                        </div>
                    }
                    {pages.map(page => {
                        if ((this.props.currentPage - 2 < page && page < this.props.currentPage + 2)
                            || (this.props.currentPage === 1 && page === 3)
                            || (this.props.currentPage === pagesCount && page === pagesCount - 3)) {
                            return <div
                                key={page}
                                className={this.props.currentPage === page
                                    ? `${s.users__paginationItem} ${s.users__paginationItem_selected}`
                                    : s.users__paginationItem}
                                onClick={() => this.onPageChanged(page)}
                            >
                                {page}
                            </div>
                        } else {
                            return false;
                        }
                    })}
                    {this.props.currentPage < pagesCount &&
                        <div
                            className={s.users__paginationItem}
                            onClick={() => this.onPageChanged(this.props.currentPage + 1)}
                        >
                            {"❯"}
                        </div>
                    }
                </div>
                {singleUser}
            </div>
        )
    }
}

export default Users;

// axios.get("https://social-network.samuraijs.com/api/1.0/users")
// .then(response => {
//     props.setUsers(response.data.items);
// })
// {
//     imgUrl: "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png",
//     id: 1, name: "Dmitry K.", status: "I am looking for a job right now", country: "Belarus", city: "Minsk", follow: false
// }