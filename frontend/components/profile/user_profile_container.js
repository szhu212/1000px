import { connect } from "react-redux";
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router';
import { fetchUserPictures } from '../../actions/picture_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    let userId = parseInt(ownProps.match.params.userId);
    let username = state.entities.users[userId] ? state.entities.users[userId].username : null;
    return {
        userId,
        username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUserPictures: (userId) => dispatch(fetchUserPictures(userId))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)(UserProfile));
