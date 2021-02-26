import React from 'react';
import styles from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
// import Friends from './Friends/Friends';

const Navbar = (props) => {
    // let friendsElements = props.friendsData.map(d => <Friends name={d.name} imgUrl={d.imgUrl} key={d.id} />);
    return (
        <div className={styles.navbar}>
            <ul className={styles.navigation}>
                <li className={styles.navigation__item}><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                <li className={styles.navigation__item}><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></li>
                <li className={styles.navigation__item}><NavLink to="/users" activeClassName={styles.active}>Users</NavLink></li>
                <li className={styles.navigation__item}><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                <li className={styles.navigation__item}><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
                {/* <li className={styles.navigation__item}><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li> */}
            </ul>
            {/* <div className={styles.navigation}>
                <ul>
                    <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></li>
                    <li><NavLink to="/users" activeClassName={styles.active}>Users</NavLink></li>
                    <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
                </ul>
            </div>
            <div className={styles.friends}>
                <h1>Friends</h1>
                <div className={styles.friends__container}>
                    <div className={styles.friends__body}>
                        {friendsElements}
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Navbar;