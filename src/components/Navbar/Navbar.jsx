import React from 'react';
import n from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  let friendsElements = props.state.friendsData.map( d => <Friends name={d.name} imgUrl={d.imgUrl} />);
  return (
    <div className={n.navbar}>
      <div className={n.navigation}>
        <ul>
          <li><NavLink to="/profile" activeClassName={n.active}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={n.active}>Messages</NavLink></li>
          <li><NavLink to="/news" activeClassName={n.active}>News</NavLink></li>
          <li><NavLink to="/music" activeClassName={n.active}>Music</NavLink></li>
          <li><NavLink to="/settings" activeClassName={n.active}>Settings</NavLink></li>
        </ul>
      </div>
      <div className={n.friends}>
        <h1>Friends</h1>
        <div className={n.friends__container}>
          <div className={n.friends__body}>
            {friendsElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;