import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = state => {
    return {
        friendsData: state.navbarPage.friendsData
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;