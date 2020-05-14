import { connect } from 'react-redux';
import  { fetchPicture, fetchPictures, deletePicture } from '../../actions/picture_actions';
import { likePicture, unlikePicture } from '../../actions/like_actions'
import PictureShow from './picture_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const picture = state.entities.pictures[ownProps.match.params.pictureId]|| {}
  const editorsChoice = picture? picture.editors_choice : null
  const hashOfIds = {}
  const numLikes = picture && picture.likers ? picture.likers.length : 0;
  const userAvatar = picture.authorAvatarUrl || null;
  const authorName = picture.authorName || null
  const authorId = picture.authorId || null;
  if (Object.values(state.entities.pictures).length > 0){
     Object.values(state.entities.pictures).forEach((picture, idx) => { 
      //  debugger
     hashOfIds[idx] = picture.id
    //  debugger
    }
  )};
  return {
      picture,
      pictureId: ownProps.match.params.pictureId,
      editorsChoice: editorsChoice,
      hashOfIds: hashOfIds,
      currentUserId:state.session.id || null,
      numLikes,
      userAvatar,
      authorName,
      authorId,
    };
  };
  
const mapDispatchToProps = dispatch => ({
    fetchPicture: (id) => dispatch(fetchPicture(id)),
    fetchPictures: () => dispatch(fetchPictures()),
    likePicture: (id) => dispatch(likePicture(id)),
    unlikePicture: (id) => dispatch(unlikePicture(id)),
    deletePicture: (id) => dispatch(deletePicture(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PictureShow);