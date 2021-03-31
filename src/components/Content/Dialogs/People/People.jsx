import React from 'react';
import styles from './../dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const People = (props) => {
    let path = "/dialogs/" + props.id;

    return (
    <div className = {styles.people__body_item}>
        <img src={props.imgUrl} alt=""/>
        <li><NavLink to={path} activeClassName={styles.active}>{props.name}</NavLink></li>
    </div>);
}

export default People;