import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = state => {
  return {
    friendsData: state.navbarPage.friendsData 
  }
}
const mapDispatchToProps = dispatch => {
  return {}
}

  const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;