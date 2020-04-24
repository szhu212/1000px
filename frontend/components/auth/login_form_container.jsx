import {connect} from "react-redux";
import LoginForm from "./login_form";
import {loginUser, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return({
        errors: state.errors.session_errors,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (formUser) => dispatch(loginUser(formUser)),
    clearErrors: ()=> dispatch(clearErrors())
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)