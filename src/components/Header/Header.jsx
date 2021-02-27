import React from 'react';
import styles from './header.module.scss';
import { NavLink, Link } from "react-router-dom";
import NavbarContainer from '../Navbar/NavbarContainer';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.brand}>
                <NavLink to="/">FroskyLT</NavLink>
            </div>
            <div className={styles.navbar}>
                <NavbarContainer />
            </div>
            <div className={styles.menu}>
                {props.isLogged
                    ? <div className={styles.login__image} onClick={props.logoutHandler}>
                        <Link to="/profile" className={styles.login__imageLink}>
                            <img src={"https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"} alt="" />
                        </Link>
                    </div>
                    : <div className={styles.menu__login}>
                        <NavLink to='/login'> {"sign in"} </NavLink>
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;