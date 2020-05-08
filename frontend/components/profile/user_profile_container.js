import { connect } from "react-redux";
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router';
import { fetchUserPictures } from '../../actions/picture_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    let userId = parseInt(ownProps.match.params.userId);
    let username = state.entities.users[userId] ? state.entities.users[userId].username : null;
    let userPictures = Object.values(state.entities.pictures).length > 0 ? Object.values(state.entities.pictures) : null
    let avatarUrl = state.entities.users[userId] ? state.entities.users[userId].avatarUrl : null
    return {
        userId,
        username,
        userPictures,
        avatarUrl,
        currentUesrId: state.session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUserPictures: (userId) => dispatch(fetchUserPictures(userId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps)(UserProfile));
