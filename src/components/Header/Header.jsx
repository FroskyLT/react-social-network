import React from 'react';
import h from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={h.header}>
            <div className={h.brandContainer}>
                <div className={h.brand}>
                    <NavLink to='/'> FL </NavLink>
                </div>
            </div>
            <div className={h.login}>
                {props.isLogged
                    ? <div className={h.login__image} onClick={props.logoutHandler}>
                        <img src={"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} alt="" />
                    </div>
                    : <div className={h.login__text} onClick={props.loginHandler}>
                        {/* <NavLink to='/login'> {"Login"} </NavLink> */}
                        {"Login"}
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;