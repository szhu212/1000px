import {connect} from "react-redux";
import SignupForm from "./signup_form";
import { signupUser } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        errors: state.errors,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (formUser) => dispatch(signupUser(formUser))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(SignupForm)