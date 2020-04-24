import { connect } from 'react-redux';
import CreatePictureForm from './create_picture_form' ;
import { createPicture, clearErrors } from '../../actions/picture_actions';
import {openModal, closeModal} from '../../actions/modal_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    // debugger
   return {
       currentUser: state.entities.users[state.session.id],
       errors: state.errors.picture_errors,
       picture: {
           title: "",
           description: "",
           equipment_or_material: "",
           author_id: state.session.id,
           picture: null,
           photoUrl: null
       }
   }
} 
  

const mapDispatchToProps = dispatch => ({
    createPicture: (picture) => dispatch(createPicture(picture)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: ()=> dispatch(clearErrors())
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreatePictureForm));

