import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePictureContainer from '../picture/create_picture_form_container'
import UploadAvatarContainer from '../profile/upload_avatar_container';

function Modal({modal, closeModal}) {
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'createPicture':
        component = <CreatePictureContainer />;
        break;
      case 'uploadAvatar':
        component = <UploadAvatarContainer />;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
  
  const mapStateToProps = state => {
    return {
      modal: state.ui.modal
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);
  