import { connect } from "react-redux";
import uploadAvatarForm from './upload_avatar_form';
import { fetchUser, createAvatar } from '../../actions/user_actions';
import { withRouter } from 'react-router';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    let userId = parseInt(ownProps.match.params.userId);
    // let username = state.entities.users[userId] ? state.entities.users[userId].username : null;
    // let userPictures = Object.values(state.entities.pictures).length > 0 ? Object.values(state.entities.pictures) : null
    return {
        userId,
        currentUserId: state.session.id,
        avatar: {
            avatar: null,
            avatarUrl: null,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        createAvatar: (avatar) => dispatch(createAvatar(avatar)),
        // updateAvatar: (avatar) => dispatch(updateAvatar(avatar)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal:(modal) => dispatch(closeModal(modal))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(uploadAvatarForm));