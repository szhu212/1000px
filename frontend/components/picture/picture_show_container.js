import { connect } from 'react-redux';
import  {fetchPicture, fetchPictures} from '../../actions/picture_actions';
import { likePicture, unlikePicture } from '../../actions/like_actions'
import PictureShow from './picture_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const editorsChoice = state.entities.pictures[ownProps.match.params.pictureId]? state.entities.pictures[ownProps.match.params.pictureId].editors_choice : null
  const hashOfIds = {}
  const picture = state.entities.pictures[ownProps.match.params.pictureId]|| {}
  const numLikes = picture && picture.likers ? picture.likers.length : 0
  if (Object.values(state.entities.pictures).length > 0){
     Object.values(state.entities.pictures).forEach((picture, idx) => { 
      //  debugger
     hashOfIds[idx] = picture.id
    //  debugger
    }
  )};
  const likes = Object.values(state.entities.likes).filter(like => like.picture_id === ownProps.match.params.pictureId)
  return {
      picture,
      pictureId: ownProps.match.params.pictureId,
      editorsChoice: editorsChoice,
      hashOfIds: hashOfIds,
      currentUserId:state.session.id || null,
      numLikes
    };
  };
  
const mapDispatchToProps = dispatch => ({
    fetchPicture: (id) => dispatch(fetchPicture(id)),
    fetchPictures: () => dispatch(fetchPictures()),
    likePicture: (id) => dispatch(likePicture(id)),
    unlikePicture: (id) => dispatch(unlikePicture(id))
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PictureShow);