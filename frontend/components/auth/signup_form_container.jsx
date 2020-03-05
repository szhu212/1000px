import {connect} from "react-redux";
import SignupForm from "./signup_form";
import { signupUser, clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
    return({
        errors: state.errors.session_errors,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (formUser) => dispatch(signupUser(formUser)),
    clearErrors: ()=> dispatch(clearErrors())
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(SignupForm)