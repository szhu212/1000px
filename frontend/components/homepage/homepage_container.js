import { connect } from 'react-redux';
import  {fetchPictures} from '../../actions/picture_actions';
import Homepage from './homepage';

const mapStateToProps = (state, ownProps) => {
  // debugger
    return {
      pictures: Object.values(state.entities.pictures),
    };
  };
  
const mapDispatchToProps = dispatch => ({
    fetchPictures: () => dispatch(fetchPictures())
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage);