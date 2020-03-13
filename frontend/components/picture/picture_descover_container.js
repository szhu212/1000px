import { connect } from 'react-redux';
import  {fetchPictures} from '../../actions/picture_actions';
import PictureDiscover from "../picture/picture_descover"

const mapStateToProps = (state, ownProps) => {
  // debugger
    // const editorsChoice = state.entities.pictures[ownProps.match.params.pictureId]? state.entities.pictures[ownProps.match.params.pictureId].editors_choice : null
    return {
      pictures: Object.values(state.entities.pictures),
    //   editorsChoice: editorsChoice,
    };
  };
  
const mapDispatchToProps = dispatch => ({
    fetchPictures: () => dispatch(fetchPictures())
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PictureDiscover);