import React from 'react';
import d from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const People = (props) => {
    let path = "/dialogs/" + props.id;

    return (
    <div className = {d.people__body_item}>
        <img src={props.imgUrl} alt=""/>
        <li><NavLink to={path} activeClassName={d.active}>{props.name}</NavLink></li>
    </div>);
}

export default People;