import { connect } from 'react-redux';
import  {fetchPicture, fetchPictures} from '../../actions/picture_actions';
import PictureShow from './picture_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const editorsChoice = state.entities.pictures[ownProps.match.params.pictureId]? state.entities.pictures[ownProps.match.params.pictureId].editors_choice : null
  const hashOfIds = {}
  if (Object.values(state.entities.pictures).length > 0){
     Object.values(state.entities.pictures).forEach((picture, idx) => { 
      //  debugger
     hashOfIds[idx] = picture.id
    //  debugger
    }
  )};

  
  return {
      picture: state.entities.pictures[ownProps.match.params.pictureId]|| {},
      pictureId: ownProps.match.params.pictureId,
      editorsChoice: editorsChoice,
      hashOfIds: hashOfIds,
    };
  };
  
const mapDispatchToProps = dispatch => ({
    fetchPicture: (id) => dispatch(fetchPicture(id)),
    fetchPictures: () => dispatch(fetchPictures())
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PictureShow);