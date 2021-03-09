import { connect } from 'react-redux';
import { addPost, updateNewPostElement } from '../../../../redux/reducers/profileReducer';
import Posts from './Posts';

const mapStateToProps = state => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, { addPost, updateNewPostElement })(Posts);