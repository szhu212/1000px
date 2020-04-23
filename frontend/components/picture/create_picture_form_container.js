import { connect } from 'react-redux';
import CreatePictureForm from './create_picture_form' ;
import { createPicture } from '../../actions/picture_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
   return {
       currentUser: state.entities.users[state.session.id],
       picture: {
           title: "",
           description: "",
           equipment_or_material: "",
           author_id: state.session.id,
           picture: null
       }
   }
} 
  

const mapDispatchToProps = dispatch => ({
    createPicture: (picture) => dispatch(createPicture(picture))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreatePictureForm);

