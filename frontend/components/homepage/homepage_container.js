import { connect } from 'react-redux';
import  {fetchEditorPictures} from '../../actions/picture_actions';
import Homepage from './homepage';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // const editorsChoice = state.entities.pictures[ownProps.match.params.pictureId]? state.entities.pictures[ownProps.match.params.pictureId].editors_choice : null
    return {
      pictures: Object.values(state.entities.pictures),
      // editorsChoice: editorsChoice,
    };
  };
  
const mapDispatchToProps = dispatch => ({
    fetchPictures: () => dispatch(fetchEditorPictures())
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage);