import {connect} from "react-redux";
import LoginForm from "./login_form";
import {loginUser } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return({
        errors: state.errors.session_errors,
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (formUser) => dispatch(loginUser(formUser))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)