import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";
import NavbarContainer from '../Navbar/NavbarContainer';

const Header = (props) => {
    return (
        // <div className={styles.header}>
        //     <div className={styles.brandContainer}>
        //         <div className={styles.brand}>
        //             <NavLink to='/'> FroskyLTU </NavLink>
        //         </div>
        //     </div>
        //     <div className={styles.login}>
        //         {props.isLogged
        //             ? <div className={styles.login__image} onClick={props.logoutHandler}>
        //                 <img src={"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="" />
        //             </div>
        //             : <div className={styles.login__text} onClick={props.loginHandler}>
        //                 <NavLink to='/login'> {"Login"} </NavLink>
        //             </div>
        //         }
        //     </div>
        // </div>
        <div className={styles.header}>
            <div className={styles.brand}>
                <NavLink to="/">FroskyLT</NavLink>
            </div>
            <div className={styles.navigation}>
                <NavbarContainer />
            </div>
            <div className={styles.menu}>
                {props.isLogged
                    ? <div className={styles.login__image} onClick={props.logoutHandler}>
                        <img src={"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="" />
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