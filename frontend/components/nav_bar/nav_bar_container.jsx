import { connect } from "react-redux";
import NavBar from "./nav_bar";
import {logoutUser} from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions"

const mapStateToProps = (state) => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        // errors: state.errors.picture_errors,
    })
}

const mapDispatchToProps = (dispatch) => ({
   logout: () => dispatch(logoutUser()),
   openModal: (modal) => dispatch(openModal(modal))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(NavBar);